import { test, expect } from '@playwright/test';

test('Horizontal Slider', async ({ page }) => {
  await page.goto('/horizontal_slider');
  
  const slider = page.locator('input[type="range"]');
  
  // Get the bounding box of the slider
  const sliderBoundingBox = await slider.boundingBox();
  
  if (sliderBoundingBox) {
    // Calculate the new position
    const sliderWidth = sliderBoundingBox.width;
    const newPosition = sliderBoundingBox.x + (sliderWidth * (3.5 / 5)); // Assuming the slider ranges from 0 to 5

    // Move the mouse to the starting position of the slider
    await page.mouse.move(sliderBoundingBox.x + sliderWidth / 2, sliderBoundingBox.y + sliderBoundingBox.height / 2);
    
    // Drag the slider to the new position
    await page.mouse.down();
    await page.mouse.move(newPosition, sliderBoundingBox.y + sliderBoundingBox.height / 2);
    await page.mouse.up();
    
    // Verify the value
    await expect(slider).toHaveValue('3.5');
  }
});
