import { Page, Locator } from '@playwright/test';

export class ABTestingPage {
  readonly page: Page;
  readonly heading: Locator;
  URL: string;

  constructor(page: Page, URL: string) {
    this.page = page;
    this.heading = page.locator('h3');
    this.URL = URL;
  }

  async goto() {
    await this.page.goto(this.URL);
  }

  async getHeadingText() {
    return await this.heading.textContent();
  }
}
