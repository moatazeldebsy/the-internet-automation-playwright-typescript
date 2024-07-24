import { test, expect } from '@playwright/test';
import * as path from 'path';

test('File Upload', async ({ page }) => {
  await page.goto('/upload');
  const filePath = path.resolve('test-file.txt');
  await page.setInputFiles('input[type=file]', filePath);
  await page.click('#file-submit');
  const uploadedFile = page.locator('#uploaded-files');
  await expect(uploadedFile).toHaveText('test-file.txt');
});
