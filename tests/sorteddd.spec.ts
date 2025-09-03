import { test, expect, Locator } from '@playwright/test';
import { text } from 'stream/consumers';
//Sorted Data Table in Playwright https://testautomationpractice.blogspot.com/
test('Sorted Data Table', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const tablerows:Locator = page.locator("#animals>option");
    console.log("Total rows in table are: " + (await tablerows.allTextContents())
    .map(text => text.trim()));
});