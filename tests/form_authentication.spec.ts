import { test, expect } from '@playwright/test';

test('Form Authentication', async ({ page }) => {

  await page.goto('/login');
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button[type="submit"]');
  const flash = page.locator('#flash');
  await expect(flash).toContainText('You logged into a secure area!');
});
