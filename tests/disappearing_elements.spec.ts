import { test, expect } from '@playwright/test';

test('Disappearing Elements', async ({ page }) => {
  await page.goto('/disappearing_elements');
  const links = await page.locator('ul > li > a');
  const expectedLinks = ['Home', 'About', 'Contact Us', 'Portfolio', 'Gallery'];
  for (const link of expectedLinks) {
    const linkElement = links.locator(`text=${link}`);
    if (await linkElement.count() > 0) {
      await expect(linkElement).toBeVisible();
    }
  }
});
