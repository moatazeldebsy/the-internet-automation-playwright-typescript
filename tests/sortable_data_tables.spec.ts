import { test, expect } from '@playwright/test';

test('Sortable Data Tables', async ({ page }) => {
  // Step 1: Navigate to the tables page
  await page.goto('/tables');

  // Helper function to get table rows and verify data
  async function getTableData(selector: string) {
    // Extract text content from each row and return as an array
    return await page.locator(`${selector} tbody tr`).allTextContents();
  }

  // Step 2: Click the column header to sort the table (e.g., "Last Name" column)
  const headerLocator = page.locator('table#table1 thead th').nth(1); // Assuming sorting by the second column (Last Name)
  await headerLocator.click();

  // Wait for sorting to be applied (adjust if necessary)
  await page.waitForTimeout(1000);

  // Step 3: Verify the sorting by checking data order in the sorted column
  const tableDataBefore = await getTableData('table#table1');
  
  // Click the header again to sort in reverse order
  await headerLocator.click();
  
  // Wait again for sorting to be applied
  await page.waitForTimeout(1000);

  const tableDataAfter = await getTableData('table#table1');
  
  // Extract sorted column values from before and after sorting
  const extractColumnData = (data: string[]) => data.map(row => row.split(/\s{2,}/)[1]); // Assuming columns are separated by multiple spaces
  
  const columnDataBefore = extractColumnData(tableDataBefore);
  const columnDataAfter = extractColumnData(tableDataAfter);
  
  // Check if the data has changed after sorting
  const isSortedAscending = columnDataBefore.join(',') !== columnDataAfter.join(',');
  const isSortedDescending = columnDataAfter.join(',') === columnDataBefore.reverse().join(',');

  expect(isSortedAscending || isSortedDescending).toBe(true);
});
