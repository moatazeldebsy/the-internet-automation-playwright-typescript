import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  
  timeout: 30000,
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    trace: 'on',
    baseURL: 'https://the-internet.herokuapp.com',

  },
  reporter: [
    ['list'],
    ['json', { outputFile: 'test-results.json' }],
    ['junit', { outputFile: 'test-results.xml' }],
    ['html', { outputFolder: 'playwright-report', open: 'never' }]
  ],

  retries: 2,

});
