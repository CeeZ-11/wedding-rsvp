import { mkdirSync } from 'node:fs';
import { test, expect } from '@playwright/test';

const screenshotDir = '/private/tmp/wedding-playwright';

test.beforeAll(() => {
  mkdirSync(screenshotDir, { recursive: true });
});

test.beforeEach(async ({ page }) => {
  await page.route('**/api/gifts', (route) => route.fulfill({ json: { takenGifts: [] } }));
});

for (const { width, height } of [
  { width: 1366, height: 768 },
  { width: 1440, height: 900 },
  { width: 1920, height: 1080 },
  { width: 390, height: 844 },
]) {
  test(`hero framing and overflow at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height });
    await page.goto('/');

    const hero = page.locator('main > section').first();
    const image = hero.getByRole('img', { name: 'A couple walking hand in hand through a mountain landscape' });
    await expect(image).toBeVisible();
    await expect.poll(() => image.evaluate((element: HTMLImageElement) => element.complete && element.naturalWidth === 1400)).toBe(true);
    await expect(image).toHaveCSS('object-fit', width >= 1024 ? 'contain' : 'cover');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    await page.screenshot({ path: `${screenshotDir}/hero-${width}.png` });
  });
}

for (const width of [390, 1440]) {
  test(`homepage at ${width}px has no horizontal overflow`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    const pageErrors: string[] = [];
    page.on('pageerror', (error) => pageErrors.push(error.message));

    await page.goto('/');
    await expect(page.locator('#wedding-title')).toBeVisible();
    const homeNav = page.locator('nav[aria-label="Wedding links"]').filter({ has: page.getByRole('link', { name: 'Wedding Gallery' }) });
    const musicButton = page.getByRole('button', { name: 'Play music' });
    await expect(homeNav).toHaveCSS('position', 'absolute');
    await expect(musicButton).toHaveCSS('position', 'absolute');
    await page.screenshot({ path: `${screenshotDir}/home-${width}.png` });

    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    await page.locator('#our-prenup').scrollIntoViewIfNeeded();
    await expect.poll(() => homeNav.evaluate((element) => element.getBoundingClientRect().bottom)).toBeLessThan(0);
    await expect.poll(() => musicButton.evaluate((element) => element.getBoundingClientRect().bottom)).toBeLessThan(0);
    const footerNav = page.locator('footer nav[aria-label="Wedding links"]');
    await footerNav.scrollIntoViewIfNeeded();
    await expect(footerNav.getByRole('link', { name: 'Guide' })).toBeVisible();
    await expect(footerNav.getByRole('link', { name: 'Gallery' })).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    expect(pageErrors).toEqual([]);
  });

  test(`Wedding Guide at ${width}px has no horizontal overflow and Seating is readable`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    const pageErrors: string[] = [];
    page.on('pageerror', (error) => pageErrors.push(error.message));

    await page.goto('/guide');
    await expect(page.getByRole('heading', { name: 'Wedding Guide' })).toBeVisible();
    await expect(page.getByRole('main').getByText('Seamor & Lady Stephanie')).toBeVisible();
    await expect(page.getByRole('main').getByText('December 27, 2026')).toBeVisible();
    await page.screenshot({ path: `${screenshotDir}/guide-intro-${width}.png` });
    await page.getByRole('heading', { name: 'Seating', exact: true }).scrollIntoViewIfNeeded();
    await expect(page.getByRole('heading', { name: 'Ceremony Seating' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Reception Seating' })).toBeVisible();
    await expect(page.locator('nav').first()).toHaveClass(/bg-cream-bg/);
    await expect(page.locator('nav').first()).toHaveCSS('background-color', 'rgb(251, 251, 249)');
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

for (const width of [390, 1440]) {
  test(`Principal Sponsors contrast and editorial Explore layout at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/guide');

    const sponsorsHeading = page.getByRole('heading', { name: 'Principal Sponsors' });
    await sponsorsHeading.scrollIntoViewIfNeeded();
    await expect(page.locator('nav').first()).toHaveCSS('background-color', 'rgb(251, 251, 249)');
    await expect(sponsorsHeading).toHaveCSS('color', 'rgb(248, 245, 235)');
    await expect(page.getByText('Harvey Tee')).toBeVisible();
    await page.screenshot({ path: `${screenshotDir}/guide-sponsors-${width}.png` });

    const explore = page.locator('#explore');
    await explore.scrollIntoViewIfNeeded();
    const places = explore.locator('ul > li');
    await expect(places).toHaveCount(4);
    await expect(places.getByRole('heading', { name: 'The Ruins' })).toBeVisible();
    await expect(places.getByRole('link', { name: /View on map/ }).first()).toHaveAttribute('target', '_blank');
    const images = explore.locator('img');
    await expect(images).toHaveCount(4);
    for (const image of await images.all()) {
      await image.scrollIntoViewIfNeeded();
      await expect.poll(() => image.evaluate((element: HTMLImageElement) => element.complete && element.naturalWidth > 0)).toBe(true);
    }
    await explore.evaluate((element) => window.scrollTo(0, element.getBoundingClientRect().top + window.scrollY - 120));
    await page.waitForTimeout(100);
    await page.screenshot({ path: `${screenshotDir}/guide-explore-${width}.png` });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  });
}

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
  await expect(page.getByRole('navigation', { name: 'Wedding links' }).getByRole('link', { name: 'RSVP' })).toHaveAttribute('href', '/#rsvp');
});

for (const width of [390, 1440]) {
  test(`homepage Venue & Directions opens the Guide venue section at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 844 });
    await page.goto('/');
    const link = page.getByRole('link', { name: 'Venue & directions' });
    await link.scrollIntoViewIfNeeded();
    await link.click();

    await expect(page).toHaveURL(/\/guide#location$/);
    await expect(page.getByRole('heading', { name: 'The venue' })).toBeVisible();
    const sectionTop = await page.locator('#location').evaluate((element) => element.getBoundingClientRect().top);
    expect(sectionTop).toBeGreaterThanOrEqual(0);
    expect(sectionTop).toBeLessThan(200);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    await page.screenshot({ path: `${screenshotDir}/guide-location-from-home-${width}.png` });
  });

  test(`homepage Full Day Schedule opens the Guide schedule section at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 844 });
    await page.goto('/');
    const link = page.getByRole('link', { name: 'Full day schedule' });
    await link.scrollIntoViewIfNeeded();
    await link.click();

    await expect(page).toHaveURL(/\/guide#schedule$/);
    await expect(page.getByRole('heading', { name: 'Schedule', exact: true })).toBeVisible();
    const sectionTop = await page.locator('#schedule').evaluate((element) => element.getBoundingClientRect().top);
    expect(sectionTop).toBeGreaterThanOrEqual(0);
    expect(sectionTop).toBeLessThan(200);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    await page.screenshot({ path: `${screenshotDir}/guide-schedule-from-home-${width}.png` });
  });
}
