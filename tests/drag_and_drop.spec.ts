import { test, expect } from '@playwright/test';

test('Drag and Drop', async ({ page }) => {
  await page.goto('/drag_and_drop');
  const source = page.locator('#column-a');
  const target = page.locator('#column-b');
  await source.dragTo(target);
  await expect(source).toHaveText('B');
  await expect(target).toHaveText('A');
});
