import { test, expect } from '@playwright/test';

test('JavaScript onload event error', async ({ page }) => {
  await page.goto('/javascript_error');
  const errorText = await page.locator('body').textContent();
  expect(errorText).toContain('This page has a JavaScript error in the onload event.');
});
