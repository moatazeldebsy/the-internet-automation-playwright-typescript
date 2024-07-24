import { test, expect } from '@playwright/test';

test('Infinite Scroll', async ({ page }) => {
  await page.goto('/infinite_scroll');
  const content = page.locator('.jscroll-added');
  await page.evaluate(() => window.scrollBy(0, window.innerHeight));
  await expect(content).toHaveCount(2);
});
