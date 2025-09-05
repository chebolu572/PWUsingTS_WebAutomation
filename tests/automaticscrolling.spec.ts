import {test, expect,Locator} from '@playwright/test';

//Automatic Scrolling in Playwright https://testautomationpractice.blogspot.com/com/
test('Automatic Scrolling', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    //Scrolling Down using mouse wheel
    await page.mouse.wheel(0, 1000); //x and y axis
    await page.waitForTimeout(3000);
    await page.mouse.wheel(0, 1000); //x and y axis
    await page.waitForTimeout(3000);
    await page.mouse.wheel(0, -1000); //x and y axis
    await page.waitForTimeout(3000);
    await page.mouse.wheel(0, -1000); //x and y axis
    await page.waitForTimeout(3000);

});