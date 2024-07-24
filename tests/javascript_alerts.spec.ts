import { test, expect } from '@playwright/test';

test('JavaScript Alerts', async ({ page }) => {
  await page.goto('/javascript_alerts');

  // Set up a single dialog event listener
  page.on('dialog', async dialog => {
    const message = dialog.message();
    if (message.includes('I am a JS Alert')) {
      await dialog.accept();
    } else if (message.includes('I am a JS Confirm')) {
      await dialog.accept();
    } else if (message.includes('I am a JS prompt')) {
      await dialog.accept('Hello!');
    }
  });

  // Alert
  await page.click('button[onclick="jsAlert()"]');
  const result = page.locator('#result');
  await expect(result).toHaveText('You successfully clicked an alert');

  // Confirm
  await page.click('button[onclick="jsConfirm()"]');
  await expect(result).toHaveText('You clicked: Ok');

  // Prompt
  await page.click('button[onclick="jsPrompt()"]');
  await expect(result).toHaveText('You entered: Hello!');
});
