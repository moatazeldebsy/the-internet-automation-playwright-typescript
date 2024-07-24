import { test, expect } from '@playwright/test';

test('Dynamic Controls', async ({ page }) => {
  await page.goto('/dynamic_controls');
  
  // Checkbox
  const checkbox = page.locator('#checkbox');
  await expect(checkbox).toBeVisible();
  await page.click('#checkbox-example button');
  await expect(checkbox).not.toBeVisible();
  await page.click('#checkbox-example button');
  await expect(checkbox).toBeVisible();

  // Input
  const input = page.locator('#input-example input');
  await expect(input).toBeDisabled();
  await page.click('#input-example button');
  await expect(input).toBeEnabled();
  await page.click('#input-example button');
  await expect(input).toBeDisabled();
});
