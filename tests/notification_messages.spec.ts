import { test, expect } from '@playwright/test';

test('Notification Messages', async ({ page }) => {
  // Navigate to the notification message page and ensure it's loaded
  await page.goto('/notification_message_rendered', { waitUntil: 'networkidle' });

  // Retry clicking the link to trigger the notification message
  for (let i = 0; i < 3; i++) {
    try {
      await page.click('a[href="/notification_message"]');
      break; // Exit the loop if the click is successful
    } catch (e) {
      if (i === 2) throw e; // Rethrow the error if it's the last attempt
    }
  }

  // Wait for the notification message to appear
  const message = page.locator('#flash');

  // Wait for the notification to be visible with increased timeout
  await message.waitFor({ state: 'visible', timeout: 10000 });

  // Log the message text for debugging purposes
  const messageText = await message.textContent();
  console.log('Notification message text:', messageText);

  // Verify the message contains the expected text
  await expect(message).toHaveText(/Action (unsuccessful|successful)/i);
});
