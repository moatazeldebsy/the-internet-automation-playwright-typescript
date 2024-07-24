import { test, expect } from '@playwright/test';

test('Geolocation', async ({ page, context }) => {
  await context.grantPermissions(['geolocation']);
  await context.setGeolocation({ latitude: 28.6139, longitude: 77.209 });
  await page.goto('/geolocation');
  await page.click('button');
  const geoLocationText = await page.locator('#lat-value').textContent();
  await expect(geoLocationText).toContain('28.6139');
});
