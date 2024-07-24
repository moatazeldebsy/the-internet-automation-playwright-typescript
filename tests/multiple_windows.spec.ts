import { test, expect } from '@playwright/test';

test('Multiple Windows', async ({ page, context }) => {
  await page.goto('/windows');
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.click('a[href="/windows/new"]')
  ]);
  await newPage.waitForLoadState();
  await expect(newPage).toHaveTitle('New Window');
});
