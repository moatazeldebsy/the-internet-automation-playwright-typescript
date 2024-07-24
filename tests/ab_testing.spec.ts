import { test, expect } from '@playwright/test';
import { ABTestingPage } from '../pages/ABTestingPage';

test('A/B Testing', async ({ page }) => {
  const abTestingPage = new ABTestingPage(page, '/abtest');
  await abTestingPage.goto();
  const headingText = await abTestingPage.getHeadingText();
  await expect(headingText).toContain('A/B Test');
});
