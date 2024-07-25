import { test, expect } from '@playwright/test';

test('Infinite Scroll', async ({ page }) => {
  await page.goto('/infinite_scroll');

  // Ensure the initial content is loaded
  await page.waitForSelector('.jscroll-added');

  const initialCount = await page.locator('.jscroll-added').count();
  console.log(`Initial content count: ${initialCount}`);

  // Scroll down the page and wait for new content to load
  for (let i = 0; i < 2; i++) {
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    await page.waitForTimeout(2000); // Increase the timeout to ensure content has time to load
  }

  // Explicitly wait for at least two new elements to be added
  await expect(page.locator('.jscroll-added')).toHaveCount(initialCount + 2, { timeout: 10000 });

  // Check if new content has been added
  const newContentCount = await page.locator('.jscroll-added').count();
  console.log(`New content count after scrolling: ${newContentCount}`);

  expect(newContentCount).toBeGreaterThan(initialCount);
});
