import { test, expect } from '@playwright/test';

test('Frames', async ({ page }) => {
  await page.goto('/frames');
  await page.click('a[href="/nested_frames"]');

  // Accessing the top frame
  const frameTop = page.frameLocator('frame[name="frame-top"]');
  
  // Accessing the left frame within the top frame
  const frameLeft = frameTop.frameLocator('frame[name="frame-left"]');

  // Getting the text content of the left frame's body
  const bodyText = await frameLeft.locator('body').textContent();
  
  // Assert that the text content is 'LEFT'
  expect(bodyText?.trim()).toBe('LEFT');
});
