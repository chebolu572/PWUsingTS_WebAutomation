//Locators 

import {test, expect,Locator} from '@playwright/test';

test('Verify Playwright Locators', async ({page})=>
{
    await page.goto("https://demo.nopcommerce.com/");

    //Get by ALT Text Locator
    const logo:Locator = page.getByAltText("nopCommerce demo store");
    await expect(logo).toBeVisible();
});