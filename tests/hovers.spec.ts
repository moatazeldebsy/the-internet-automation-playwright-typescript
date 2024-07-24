import { test, expect } from '@playwright/test';

test('Hovers', async ({ page }) => {
  await page.goto('/hovers');
  const figure = page.locator('.figure').nth(0);
  await figure.hover();
  const caption = figure.locator('.figcaption');
  await expect(caption).toBeVisible();
});
