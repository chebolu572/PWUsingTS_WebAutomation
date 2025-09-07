import {test, expect} from '@playwright/test';

test('ScreenShot', async ({ page }) => {

    await page.goto('https://demowebshop.tricentis.com/');
    const timestamp=Date.now();

    // Full Page
    await page.screenshot({ path: 'screenshots/'+'homepage'+timestamp+'.png', fullPage: true });

    //Page ScreenShot
    await page.screenshot({ path: 'screenshots/'+'homepage_screenshot'+timestamp+'.png' });

    //Element ScreenShot
    await page.locator('img[alt="Tricentis Demo Web Shop"]')
    .screenshot({ path: 'screenshots/'+'logo_screenshot'+timestamp+'.png' });

    await page.waitForTimeout(3000);

});

test.only('ScreenShot from Config', async ({ page }) => {

    await page.goto("https://shop.polymer-project.org/")
    await page.locator("a[aria-label=\"Men's Outerwear Shop Now\"]").click();
    await page.waitForTimeout(5000);
    const productsfound=await page.locator('div.title').all();
    console.log("Number of products found:",productsfound.length);
    expect(productsfound.length).toBe(16);    
    await page.waitForTimeout(3000);

    await page.waitForTimeout(3000);

});