import { mkdirSync } from 'node:fs';
import { test, expect } from '@playwright/test';

const screenshotDir = '/private/tmp/wedding-playwright';
const auditViewports = [
  { width: 1366, height: 768 },
  { width: 1440, height: 900 },
  { width: 1920, height: 1080 },
  { width: 390, height: 844 },
];

test.beforeAll(() => {
  mkdirSync(screenshotDir, { recursive: true });
});

test.beforeEach(async ({ page }) => {
  await page.route('**/api/gifts', (route) => route.fulfill({ json: { takenGifts: [] } }));
});

test('homepage metadata and favicon assets are configured', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');

  await expect(page).toHaveTitle('Seamor & Lady Stephanie — December 27, 2026');
  await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', 'Join Seamor & Lady Stephanie at Balai Ramirez DSB on December 27, 2026.');
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://wed-snap-nine.vercel.app/');
  await expect(page.locator('meta[property="og:type"]')).toHaveAttribute('content', 'website');
  await expect(page.locator('meta[property="og:url"]')).toHaveAttribute('content', 'https://wed-snap-nine.vercel.app/');
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', 'https://wed-snap-nine.vercel.app/og-wedding.jpg');
  await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute('content', 'summary_large_image');
  await expect(page.locator('meta[name="theme-color"]')).toHaveAttribute('content', '#FBFBF9');

  const icon = page.locator('link[rel="icon"][type="image/svg+xml"]');
  await expect(icon).toHaveAttribute('href', '/favicon.svg');
  expect((await page.request.get('/favicon.svg')).status()).toBe(200);
  expect((await page.request.get('/apple-touch-icon.png')).status()).toBe(200);
  const socialImageResponse = await page.request.get('/og-wedding.jpg');
  expect(socialImageResponse.status()).toBe(200);
  expect(socialImageResponse.headers()['content-type']).toContain('image/jpeg');
});

for (const { width, height } of [
  { width: 390, height: 844 },
  { width: 375, height: 812 },
  { width: 1440, height: 900 },
]) {
  test(`mobile text alignment is intentional at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height });
    const isMobile = width < 640;
    const expected = isMobile ? 'center' : 'left';

    await page.goto('/');
    const homeSections = [
      page.locator('#our-story'),
      page.locator('#the-wedding'),
      page.locator('section[aria-labelledby="countdown-heading"]'),
      page.locator('#our-prenup'),
      page.locator('#rsvp'),
      page.locator('footer'),
    ];
    await expect(page.locator('#our-story h2')).toHaveCSS('text-align', expected);
    await expect(page.locator('#our-story figcaption')).toHaveCSS('text-align', expected);
    await expect(page.locator('#wedding-details-heading')).toHaveCSS('text-align', expected);
    await expect(page.getByRole('link', { name: 'Full day schedule' }).locator('..')).toHaveCSS('text-align', expected);
    await expect(page.locator('#the-wedding .space-y-1 > div').first()).toHaveCSS('text-align', expected);
    await expect(page.locator('#countdown-heading')).toHaveCSS('text-align', 'center');
    await expect(page.locator('#prenup-heading')).toHaveCSS('text-align', 'center');
    await expect(page.locator('#our-prenup figcaption').first()).toHaveCSS('text-align', expected);
    await expect(page.locator('#rsvp h2')).toHaveCSS('text-align', 'center');
    await expect(page.locator('#rsvp > div').first()).toHaveCSS('text-align', 'center');
    await expect(page.locator('footer > p').first()).toHaveCSS('text-align', 'center');
    for (const [index, section] of homeSections.entries()) {
      await section.scrollIntoViewIfNeeded();
      await page.waitForTimeout(750);
      await page.screenshot({ path: `${screenshotDir}/alignment-home-${width}-${index}.png` });
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);

    await page.goto('/guide');
    const guideNavFits = await page.locator('nav[aria-label="Wedding Guide sections"] a').evaluateAll((links) =>
      links.every((link) => {
        const { left, right } = link.getBoundingClientRect();
        return left >= 0 && right <= window.innerWidth;
      }),
    );
    expect(guideNavFits).toBe(true);
    await expect(page.locator('#guide-heading')).toHaveCSS('text-align', isMobile ? 'center' : 'left');
    await expect(page.locator('#schedule h2')).toHaveCSS('text-align', 'center');
    await expect(page.locator('#schedule .relative > .relative').first()).toHaveCSS('text-align', expected);
    await expect(page.locator('#dress h2')).toHaveCSS('text-align', expected);
    await expect(page.locator('#dress h4 + p').first()).toHaveCSS('text-align', expected);
    await expect(page.locator('#location h2')).toHaveCSS('text-align', expected);
    await expect(page.locator('#location ol')).toHaveCSS('text-align', expected);
    await expect(page.locator('#seating h2')).toHaveCSS('text-align', 'center');
    await expect(page.locator('#seating article p').last()).toHaveCSS('text-align', expected);
    await expect(page.getByRole('heading', { name: 'Principal Sponsors' })).toHaveCSS('text-align', expected);
    await expect(page.locator('#entourage ul li').first()).toHaveCSS('text-align', expected);
    await expect(page.locator('#explore h2')).toHaveCSS('text-align', expected);
    await expect(page.locator('#explore li h3').first()).toHaveCSS('text-align', expected);
    const cafeHeading = page.locator('#explore li h3').filter({ hasText: 'Calea & Local Cafés' });
    const cafeHeadingHeight = await cafeHeading.evaluate((element) => element.getBoundingClientRect().height);
    expect(cafeHeadingHeight).toBeLessThan(40);
    for (const [index, selector] of ['main > section:first-child', '#schedule', '#location', '#dress', '#seating', '#entourage', '#explore'].entries()) {
      await page.locator(selector).scrollIntoViewIfNeeded();
      await page.waitForTimeout(750);
      await page.screenshot({ path: `${screenshotDir}/alignment-guide-${width}-${index}.png` });
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  });
}

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
    await expect(image).toHaveCSS('object-fit', 'cover');
    const heroBounds = await hero.evaluate((element) => element.getBoundingClientRect().toJSON());
    expect(heroBounds.top).toBe(0);
    expect(heroBounds.bottom).toBeLessThanOrEqual(height);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    await page.screenshot({ path: `${screenshotDir}/hero-${width}.png` });
  });
}

for (const { width, height } of auditViewports) {
  test(`homepage at ${width}x${height} has no horizontal overflow`, async ({ page }) => {
    await page.setViewportSize({ width, height });
    const pageErrors: string[] = [];
    page.on('pageerror', (error) => pageErrors.push(error.message));

    await page.goto('/');
    await expect(page.locator('#wedding-title')).toBeVisible();
    const homeNav = page.locator('nav[aria-label="Wedding links"]').filter({ has: page.getByRole('link', { name: 'Wedding Gallery' }) });
    const musicButton = page.getByRole('button', { name: 'Play music' });
    await expect(homeNav).toHaveCSS('position', 'absolute');
    await expect(musicButton).toHaveCSS('position', 'absolute');
    await page.screenshot({ path: `${screenshotDir}/home-${width}.png` });
    const story = page.locator('#our-story');
    await expect(story.getByRole('heading', { name: 'Our story' })).toBeVisible();
    await expect(story.getByText('Personal welcome copy to be added.')).toBeVisible();
    const storyImage = story.locator('img');
    await storyImage.scrollIntoViewIfNeeded();
    await expect.poll(() => storyImage.evaluate((element: HTMLImageElement) => element.complete && element.naturalWidth > 0)).toBe(true);
    await storyImage.evaluate((element: HTMLImageElement) => element.decode());
    await story.screenshot({ path: `${screenshotDir}/home-story-${width}.png` });
    await page.evaluate(() => window.scrollTo(0, 0));

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

  test(`Wedding Guide at ${width}x${height} has no horizontal overflow and Seating is readable`, async ({ page }) => {
    await page.setViewportSize({ width, height });
    const pageErrors: string[] = [];
    page.on('pageerror', (error) => pageErrors.push(error.message));

    await page.goto('/guide');
    await expect(page.getByRole('heading', { name: 'Everything you need for December 27' })).toBeVisible();
    await expect(page.getByRole('navigation', { name: 'Guide highlights' }).getByRole('link')).toHaveCount(4);
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
  await expect(page.getByRole('status').getByText('Your response has been received.')).toBeVisible();
  expect(submittedPayload).toEqual({
    name: 'Playwright Test Guest',
    attendance: 'yes',
    gift: '',
    dietary: '',
    message: '',
  });
});

test('RSVP validation and attendance radio keyboard interaction are accessible', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.locator('#rsvp').scrollIntoViewIfNeeded();

  await page.getByRole('button', { name: 'Send RSVP' }).click();
  await expect(page.getByRole('alert').getByText('Please enter your full name', { exact: true })).toBeVisible();
  await expect(page.getByRole('radiogroup')).toHaveAttribute('aria-invalid', 'true');
  await expect(page.getByRole('radio', { name: 'Joyfully Accept' })).toHaveAttribute('aria-checked', 'false');

  const accept = page.getByRole('radio', { name: 'Joyfully Accept' });
  await accept.focus();
  await page.keyboard.press('ArrowRight');
  const decline = page.getByRole('radio', { name: 'Regretfully Decline' });
  await expect(decline).toBeFocused();
  await expect(decline).toHaveAttribute('aria-checked', 'true');
  await page.keyboard.press('ArrowLeft');
  await expect(accept).toBeFocused();
  await expect(accept).toHaveAttribute('aria-checked', 'true');
  await page.keyboard.press('End');
  await expect(decline).toBeFocused();
  await expect(decline).toHaveAttribute('aria-checked', 'true');
});

test('RSVP keeps the form visible and reports an API failure', async ({ page }) => {
  await page.route('**/api/rsvp', (route) => route.fulfill({ status: 500, json: { error: 'test failure' } }));
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.locator('#rsvp').scrollIntoViewIfNeeded();
  await page.getByLabel('Full Name').fill('Playwright Test Guest');
  await page.getByRole('radio', { name: 'Joyfully Accept' }).click();
  await page.getByRole('button', { name: 'Send RSVP' }).click();

  await expect(page.getByRole('alert').getByText('We couldn’t send your RSVP. Please try again.')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Send RSVP' })).toBeVisible();
  await expect(page.getByRole('status')).toHaveCount(0);
});

test('Wedding Guide section navigation and schedule expansion work', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/guide');

  await page.getByRole('link', { name: 'Location' }).click();
  await expect(page).toHaveURL(/#location$/);
  await expect(page.getByRole('heading', { name: 'The venue' })).toBeVisible();

  await page.locator('nav').first().getByRole('link', { name: 'Schedule' }).click();
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

  for (const destination of [
    { id: 'location', navLink: 'Schedule', nextId: 'schedule', heading: 'The venue' },
    { id: 'schedule', navLink: 'Location', nextId: 'location', heading: 'Schedule' },
  ]) {
    test(`direct Guide URL and refresh work for #${destination.id} at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 844 });
      const response = await page.goto(`/guide#${destination.id}`);
      expect(response?.status()).toBe(200);
      await expect(page).toHaveURL(new RegExp(`/guide#${destination.id}$`));
      await expect(page.getByRole('heading', { name: destination.heading, exact: true })).toBeVisible();
      const initialSection = page.locator(`#${destination.id}`);
      await expect.poll(() => initialSection.evaluate((element) => element.getBoundingClientRect().top)).toBeGreaterThanOrEqual(0);
      await expect.poll(() => initialSection.evaluate((element) => element.getBoundingClientRect().top)).toBeLessThan(200);

      const refreshed = await page.reload();
      expect(refreshed?.status()).toBe(200);
      await expect(page).toHaveURL(new RegExp(`/guide#${destination.id}$`));
      await expect(page.getByRole('heading', { name: destination.heading, exact: true })).toBeVisible();
      await expect.poll(() => initialSection.evaluate((element) => element.getBoundingClientRect().top)).toBeGreaterThanOrEqual(0);
      await expect.poll(() => initialSection.evaluate((element) => element.getBoundingClientRect().top)).toBeLessThan(200);

      await page.locator('nav').first().getByRole('link', { name: destination.navLink, exact: true }).click();
      await expect(page).toHaveURL(new RegExp(`/guide#${destination.nextId}$`));
      const nextSection = page.locator(`#${destination.nextId}`);
      await expect.poll(() => nextSection.evaluate((element) => element.getBoundingClientRect().top)).toBeGreaterThanOrEqual(0);
      await expect.poll(() => nextSection.evaluate((element) => element.getBoundingClientRect().top)).toBeLessThan(200);
    });
  }
}
