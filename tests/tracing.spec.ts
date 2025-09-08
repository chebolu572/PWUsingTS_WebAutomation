import {test, expect} from '@playwright/test';

test.only('Tracing Test', async ({ page,context }) => {

    context.tracing.start({screenshots:true,snapshots:true})

    await page.goto("https://shop.polymer-project.org/")
    await page.locator("a[aria-label=\"Men's Outerwear Shop Now\"]").click();
    await page.waitForTimeout(5000);
    const productsfound=await page.locator('div.title').all();
    console.log("Number of products found:",productsfound.length);
    expect(productsfound.length).toBe(16);    

     context.tracing.stop({path:'trace.zip'})
    await page.waitForTimeout(3000);

});