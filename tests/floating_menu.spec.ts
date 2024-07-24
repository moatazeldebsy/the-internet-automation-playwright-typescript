import { test, expect } from '@playwright/test';

test('Floating Menu', async ({ page }) => {
  await page.goto('/floating_menu');
  await page.evaluate(() => window.scrollBy(0, window.innerHeight));
  const floatingMenu = page.locator('#menu');
  await expect(floatingMenu).toBeVisible();
});
