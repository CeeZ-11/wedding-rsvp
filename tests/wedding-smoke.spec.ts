import { mkdirSync } from 'node:fs';
import { test, expect } from '@playwright/test';

const screenshotDir = '/private/tmp/wedding-playwright';

test.beforeAll(() => {
  mkdirSync(screenshotDir, { recursive: true });
});

test.beforeEach(async ({ page }) => {
  await page.route('**/api/gifts', (route) => route.fulfill({ json: { takenGifts: [] } }));
});

for (const width of [390, 1440]) {
  test(`homepage at ${width}px has no horizontal overflow`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    const pageErrors: string[] = [];
    page.on('pageerror', (error) => pageErrors.push(error.message));

    await page.goto('/');
    await expect(page.locator('#wedding-title')).toBeVisible();
    await page.screenshot({ path: `${screenshotDir}/home-${width}.png` });

    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    expect(pageErrors).toEqual([]);
  });

  test(`Wedding Guide at ${width}px has no horizontal overflow and Seating is readable`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    const pageErrors: string[] = [];
    page.on('pageerror', (error) => pageErrors.push(error.message));

    await page.goto('/guide');
    await expect(page.getByRole('heading', { name: 'Wedding Guide' })).toBeVisible();
    await page.getByRole('heading', { name: 'Seating', exact: true }).scrollIntoViewIfNeeded();
    await expect(page.getByRole('heading', { name: 'Ceremony Seating' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Reception Seating' })).toBeVisible();
    await expect(page.locator('nav').first()).toHaveClass(/bg-white\/95/);
    await page.screenshot({ path: `${screenshotDir}/guide-seating-${width}.png` });

    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    expect(pageErrors).toEqual([]);
  });
}

test('prenup gallery images load and lightbox opens, navigates, and closes with Escape', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');

  const gallery = page.locator('#our-prenup');
  const images = gallery.locator('img');
  await expect(images).toHaveCount(8);
  for (const image of await images.all()) {
    await image.scrollIntoViewIfNeeded();
    await expect.poll(() => image.evaluate((element: HTMLImageElement) => element.complete && element.naturalWidth > 0)).toBe(true);
  }

  const leadWidth = await gallery.locator('figure').first().locator('button').evaluate((element) => element.getBoundingClientRect().width);
  const supportingWidth = await gallery.locator('figure').nth(1).locator('button').evaluate((element) => element.getBoundingClientRect().width);
  expect(leadWidth).toBeGreaterThan(supportingWidth);
  await gallery.scrollIntoViewIfNeeded();
  await expect(page.locator('nav a div').first()).toHaveClass(/bg-card-bg/);
  await page.screenshot({ path: `${screenshotDir}/gallery-desktop.png` });

  await gallery.getByRole('button', { name: /View photo 1:/ }).click();
  const dialog = page.getByRole('dialog', { name: 'Prenup photo viewer' });
  await expect(dialog).toBeVisible();
  await expect(dialog.getByText('01 / 08')).toBeVisible();
  await dialog.getByRole('button', { name: 'Next photo' }).click();
  await expect(dialog.getByText('02 / 08')).toBeVisible();
  await page.screenshot({ path: `${screenshotDir}/gallery-lightbox.png` });
  await page.keyboard.press('Escape');
  await expect(dialog).toBeHidden();

  await page.setViewportSize({ width: 390, height: 844 });
  await gallery.scrollIntoViewIfNeeded();
  const mobileLeadWidth = await gallery.locator('figure').first().locator('button').evaluate((element) => element.getBoundingClientRect().width);
  const mobileSupportingWidth = await gallery.locator('figure').nth(1).locator('button').evaluate((element) => element.getBoundingClientRect().width);
  expect(Math.abs(mobileLeadWidth - mobileSupportingWidth)).toBeLessThan(2);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await expect(page.locator('nav a div').first()).toHaveClass(/bg-card-bg/);
  await page.screenshot({ path: `${screenshotDir}/gallery-mobile.png` });
});

test('RSVP submits the expected payload and shows confirmation', async ({ page }) => {
  let submittedPayload: Record<string, unknown> | undefined;
  await page.route('**/api/rsvp', async (route) => {
    submittedPayload = route.request().postDataJSON();
    await route.fulfill({ status: 200, json: { success: true } });
  });

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.getByLabel('Full Name').fill('Playwright Test Guest');
  await page.getByRole('radio', { name: 'Joyfully Accept' }).click();
  await page.getByRole('button', { name: 'Send RSVP' }).click();

  await expect(page.getByRole('status').getByText('Thank You!')).toBeVisible();
  await expect(page.getByRole('status').getByText('Playwright Test Guest')).toBeVisible();
  expect(submittedPayload).toEqual({
    name: 'Playwright Test Guest',
    attendance: 'yes',
    gift: '',
    dietary: '',
    message: '',
  });
});

test('Wedding Guide section navigation and schedule expansion work', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/guide');

  await page.getByRole('link', { name: 'Location' }).click();
  await expect(page).toHaveURL(/#location$/);
  await expect(page.getByRole('heading', { name: 'The venue' })).toBeVisible();

  await page.getByRole('link', { name: 'Schedule' }).click();
  await expect(page).toHaveURL(/#schedule$/);
  const expandButton = page.getByRole('button', { name: 'View Full Program' });
  await expandButton.click();
  await expect(page.getByText('Preparation', { exact: true })).toBeVisible();
  await expect(page.getByText('Bride & groom preparation, photo & video coverage')).toBeVisible();
  await page.screenshot({ path: `${screenshotDir}/guide-schedule-expanded.png` });
  await page.getByRole('button', { name: 'Hide Full Program' }).click();
  await expect(page.getByRole('button', { name: 'View Full Program' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'RSVP' })).toHaveAttribute('href', '/#rsvp');
});
