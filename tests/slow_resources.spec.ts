import { test, expect } from '@playwright/test';

test('Slow Resources', async ({ page }) => {
  await page.goto('/slow');
  const heading = await page.locator('h3');
  await expect(heading).toContainText('Slow Resources');
});
