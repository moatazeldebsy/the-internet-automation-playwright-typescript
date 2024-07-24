import { test, expect } from '@playwright/test';

test('Checkboxes', async ({ page }) => {
  await page.goto('/checkboxes');

  const checkbox1 = page.locator('input[type="checkbox"]').first();
  const checkbox2 = page.locator('input[type="checkbox"]').nth(1);

  await expect(checkbox1).not.toBeChecked();
  await expect(checkbox2).toBeChecked();

});
