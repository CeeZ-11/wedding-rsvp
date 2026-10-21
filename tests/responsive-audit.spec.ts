import { mkdirSync } from 'node:fs';
import { test, expect } from '@playwright/test';

const screenshotDir = '/private/tmp/wedding-playwright/responsive-audit';
const viewports = [
  { width: 320, height: 800 },
  { width: 375, height: 812 },
  { width: 390, height: 844 },
  { width: 768, height: 1024 },
  { width: 1280, height: 800 },
];

test.beforeAll(() => mkdirSync(screenshotDir, { recursive: true }));

for (const viewport of viewports) {
  test(`responsive audit and screenshots at ${viewport.width}px`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.route('**/api/gifts', (route) => route.fulfill({ json: { takenGifts: [] } }));
    const consoleErrors: string[] = [];
    const pageErrors: string[] = [];
    const failedRequests: string[] = [];
    page.on('console', (message) => {
      if (message.type() === 'error') consoleErrors.push(message.text());
    });
    page.on('pageerror', (error) => pageErrors.push(error.message));
    page.on('requestfailed', (request) => failedRequests.push(`${request.method()} ${request.url()}: ${request.failure()?.errorText}`));

    for (const path of ['/', '/guide']) {
      const response = await page.goto(path);
      expect(response?.status(), `${path} should load`).toBe(200);
      await expect(page.locator('main')).toBeVisible();
      for (const image of await page.locator('main img').all()) {
        await image.scrollIntoViewIfNeeded();
        await expect.poll(() => image.evaluate((element: HTMLImageElement) => element.complete && element.naturalWidth > 0), {
          message: `image failed to load: ${await image.getAttribute('src')}`,
        }).toBe(true);
      }
      const mapFrame = page.locator('#location iframe');
      if (await mapFrame.count()) {
        await mapFrame.scrollIntoViewIfNeeded();
        await expect(page.frameLocator('#location iframe').locator('img[alt="Google"]')).toBeVisible();
      }
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.screenshot({ path: `${screenshotDir}/${path === '/' ? 'home' : 'guide'}-${viewport.width}.png`, fullPage: true });

      const overflow = await page.locator('body *').evaluateAll((elements) => elements.flatMap((element) => {
        const rect = element.getBoundingClientRect();
        const style = getComputedStyle(element);
        if (style.display === 'none' || style.visibility === 'hidden' || rect.width === 0 || rect.height === 0) return [];
        if (rect.left < -1 || rect.right > window.innerWidth + 1) {
          return [`${element.tagName.toLowerCase()}${typeof element.className === 'string' && element.className ? `.${element.className.trim().split(/\s+/).slice(0, 2).join('.')}` : ''} (${Math.round(rect.left)}..${Math.round(rect.right)})`];
        }
        return [];
      }));
      expect(await page.evaluate(() => document.documentElement.scrollWidth), `${path} document overflow at ${viewport.width}px`).toBeLessThanOrEqual(viewport.width);
      expect(overflow, `${path} elements outside viewport at ${viewport.width}px`).toEqual([]);

      const internalLinks = await page.locator('a[href]').evaluateAll((links) => links
        .map((link) => (link as HTMLAnchorElement).href)
        .filter((href) => new URL(href).origin === location.origin && !new URL(href).hash));
      for (const href of [...new Set(internalLinks)]) {
        const result = await page.request.get(href);
        expect(result.status(), `broken internal link: ${href}`).toBeLessThan(400);
      }

      const unnamedButtons = await page.locator('button').evaluateAll((buttons) => buttons
        .filter((button) => !button.textContent?.trim() && !button.getAttribute('aria-label') && !button.getAttribute('title'))
        .map((button) => button.outerHTML.slice(0, 160)));
      expect(unnamedButtons, `${path} has buttons without an accessible name`).toEqual([]);
    }

    expect(consoleErrors, `console errors at ${viewport.width}px`).toEqual([]);
    expect(pageErrors, `uncaught page errors at ${viewport.width}px`).toEqual([]);
    expect(failedRequests, `failed page requests at ${viewport.width}px`).toEqual([]);
  });
}

test('RSVP can be validated without sending guest data', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.route('**/api/gifts', (route) => route.fulfill({ json: { takenGifts: [] } }));
  let postAttempted = false;
  await page.route('**/api/rsvp', (route) => {
    postAttempted = true;
    return route.fulfill({ status: 500, json: { error: 'Submission blocked by audit' } });
  });
  await page.goto('/');
  await page.locator('#rsvp').scrollIntoViewIfNeeded();
  await page.getByRole('button', { name: 'Send RSVP' }).click();
  await expect(page.getByRole('alert').getByText('Please enter your full name', { exact: true })).toBeVisible();
  await expect(page.getByRole('radiogroup')).toHaveAttribute('aria-invalid', 'true');
  expect(postAttempted).toBe(false);
});
