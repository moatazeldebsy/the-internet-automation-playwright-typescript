import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

test('File Download with Specified Filename', async ({ page }) => {
  await page.goto('/download');

  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.click('a[href*="download/"]') // Adjust the selector if necessary
  ]);

  // Get the suggested filename from the download
  const suggestedFilename = download.suggestedFilename();
  console.log(`Suggested filename: ${suggestedFilename}`);

  // Define a custom filename
  const customFilename = 'test-file.txt';
  const downloadDir = './downloads';
  const customFilePath = path.join(downloadDir, customFilename);

  // Ensure the downloads directory exists
  if (!fs.existsSync(downloadDir)) {
    fs.mkdirSync(downloadDir);
  }

  // Save the download to a temporary path
  const tempFilePath = await download.path();

  // Move the file to the custom path
  fs.renameSync(tempFilePath!, customFilePath);

  // Verify the file exists at the custom path
  expect(fs.existsSync(customFilePath)).toBeTruthy();
  console.log(`File downloaded and renamed to: ${customFilePath}`);
});
