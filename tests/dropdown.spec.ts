import { test, expect } from '@playwright/test';

test('Dropdown', async ({ page }) => {
  await page.goto('/dropdown');
  const dropdown = page.locator('#dropdown');
  await dropdown.selectOption('1');
  await expect(dropdown).toHaveValue('1');
  await dropdown.selectOption('2');
  await expect(dropdown).toHaveValue('2');
});
