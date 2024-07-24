import { test, expect } from '@playwright/test';

test('Key Presses', async ({ page }) => {
  await page.goto('/key_presses');
  await page.keyboard.press('A');
  const result = page.locator('#result');
  await expect(result).toHaveText('You entered: A');
});
