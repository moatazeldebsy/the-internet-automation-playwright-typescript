import { test, expect } from '@playwright/test';

test('Status Codes', async ({ page }) => {
  await page.goto('/status_codes');
  await page.click('a[href="status_codes/200"]');
  const statusCode = await page.locator('h3');
  await expect(statusCode).toHaveText('Status Codes');
});
