import { test, expect } from '@playwright/test';

test('JQuery UI Menus', async ({ page }) => {
  await page.goto('/jqueryui/menu');

  // Hover over the "Enabled" menu item to reveal its submenu
  const enabledMenu = page.locator('text=Enabled');
  await enabledMenu.hover();
  
  // Wait for the "Downloads" submenu item to be visible
  const downloadsMenu = page.locator('text=Downloads');
  await downloadsMenu.waitFor({ state: 'visible' });
  await downloadsMenu.hover();
  
  // Wait for the "PDF" item to be visible and then click on it
  const pdfMenuItem = page.locator('text=PDF');
  await pdfMenuItem.waitFor({ state: 'visible' });
  await pdfMenuItem.click();

  // Verify that the result is as expected (you may need to adjust the expected URL or result based on actual behavior)
  // This is an example. Adjust the URL or result check as needed.
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/jqueryui/menu');
});
