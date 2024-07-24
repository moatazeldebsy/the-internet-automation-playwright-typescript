import { test, expect } from '@playwright/test';

test('Notification Messages', async ({ page }) => {
  await page.goto('/notification_message_rendered');
  
  // Click on the link to trigger the notification message
  await page.click('a[href="/notification_message"]');
  
  // Wait for the notification message to appear
  const message = page.locator('#flash');
  
  // Wait for the notification to be visible
  await message.waitFor({ state: 'visible' });

  // Verify the message contains the expected text
  await expect(message).toHaveText(/Action (unsuccessful|successful)/i);
});
