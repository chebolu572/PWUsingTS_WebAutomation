import {test,Page} from '@playwright/test';
let page: Page;
test.beforeAll('Open app',async({browser})=>{

    page=await browser.newPage();
    await page.goto("https://www.dempblaze.com/index.html")

})

test.afterAll('Closing APP', async()=>{

   await page.close();

});