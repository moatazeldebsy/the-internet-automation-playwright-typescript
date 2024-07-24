import { test, expect } from '@playwright/test';

test('Shifting Content', async ({ page }) => {
  await page.goto('/shifting_content');
  await page.click('a[href="/shifting_content/menu"]');
  const menuItem = await page.locator('ul li:nth-child(1)');
  await expect(menuItem).toBeVisible();
});
