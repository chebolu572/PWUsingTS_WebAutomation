//Locators 

import {test, expect,Locator} from '@playwright/test';

test('Verify Playwright Locators', async ({page})=>
{
    await page.goto("https://demo.nopcommerce.com/");

    //Get by ALT Text Locator
    const logo:Locator = page.getByAltText("nopCommerce demo store");
    await expect(logo).toBeVisible();

    //Get By Text Locator
    const registerLink:Locator = page.getByText("Welcome to our store");
    await expect(registerLink).toBeVisible();

    //Get by Role Locator
    await page.getByRole('link', {name: 'Register'}).click();
    await expect(page.getByRole('heading', {name: 'Register'})).toBeVisible();
    
    //Get by label Locator
    const firstName:Locator = page.getByLabel("First name");
    await firstName.fill("John");
    await expect(firstName).toHaveValue("John");

    //Get by Title Locator
    const lastName:Locator = page.getByTitle("Last name");
    await lastName.fill("Wick");
    await expect(lastName).toHaveValue("Wick");

    //get by test id locator
    const newsLetter:Locator = page.getByTestId("Newsletter");
    await newsLetter.check();
    await expect(newsLetter).toBeChecked();
});

