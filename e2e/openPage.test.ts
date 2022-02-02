import { test, expect } from '@playwright/test';

const PAGE_URL = process.env.BASE_URL + process.env.PUBLIC_URL;

test('opens page', async ({ page }) => {
  await page.goto(PAGE_URL );
  await page.waitForSelector('text=Welcome!', { state: 'visible' });

  await Promise.all([page.waitForNavigation(), page.click('a.ExposeLink')]);
  expect(await page.url()).toContain('expose/');
});
