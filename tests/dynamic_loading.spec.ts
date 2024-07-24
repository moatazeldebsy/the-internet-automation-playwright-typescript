import { test, expect } from '@playwright/test';

test('Dynamic Loading', async ({ page }) => {
  await page.goto('/dynamic_loading/1');
  await page.click('#start button');
  const finish = await page.locator('#finish');
  await expect(finish).toContainText('Hello World!');
});
