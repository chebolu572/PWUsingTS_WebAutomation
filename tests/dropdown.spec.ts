import {test, expect} from '@playwright/test';
// Dropdown in Playwright https://testautomationpractice.blogspot.com/
test('Single Select Drop Down', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    //const dropdown = await page.locator("#country").selectOption("India"); //Visible Text
    //const dropdown = await page.locator("#country").selectOption({ label: 'uk' }); //Visible Text
    //const dropdown = await page.locator("#country").selectOption({ value: 'India' }); //value attribute
    const dropdown = await page.locator("#country").selectOption({ index: 8 }); //index value
    await page.waitForTimeout(3000);    
});

// Check Number of Options in Drop Down
test('Check Number of Options in Drop Down', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    //const dropdown = await page.locator("#country").selectOption("India"); //Visible Text
    //const dropdown = await page.locator("#country").selectOption({ label: 'uk' }); //Visible Text
    //const dropdown = await page.locator("#country").selectOption({ value: 'India' }); //value attribute
    const dropdownoptions = await page.locator("#country>option");
    const countoptions = await dropdownoptions.count();
    console.log("Total options in dropdown are: " + countoptions);
    console.log(await dropdownoptions.first().textContent());
    console.log(await dropdownoptions.last().textContent());
    console.log(await dropdownoptions.nth(6).textContent());
    console.log(await dropdownoptions.allTextContents());
});

//MUlti Select Drop Down
test('Multi Select Drop Down', async ({ page }) => {     
    await page.goto('https://testautomationpractice.blogspot.com/');
    const dropdown = await page.locator("#colours").
    selectOption([{ label: 'Red' },
        { value: 'Yellow' },
        { index: 3 }]);
    await page.waitForTimeout(3000);
    const selectedoptions = await page.locator("#selenium_commands>option:checked");

    const countselected = await selectedoptions.count();
    console.log("Total selected options in dropdown are: " + countselected);
    console.log(await selectedoptions.first().textContent());
    console.log(await selectedoptions.last().textContent());
    console.log(await selectedoptions.nth(1).textContent());

    console.log(await selectedoptions.allTextContents());
});