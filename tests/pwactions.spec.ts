import {test, expect, Locator} from '@playwright/test';
test('Text Input Actions', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const txtbox : Locator= page.locator("#name");
    await expect(txtbox).toBeVisible();
    await expect(txtbox).toBeEnabled();
    const mlength:string| null=await txtbox.getAttribute("maxlength");
    expect(mlength).toBe("15");

    await txtbox.fill("Welcome");
    await page.waitForTimeout(3000);
    const txtvalue:string=await txtbox.inputValue();
    console.log("Text box value is: "+txtvalue);

    
});

//Radio Button in Playwright https://testautomationpractice.blogspot.com/
test('Radio Button Actions', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');    
    const rbutton : Locator=page.locator("#male");
    await expect(rbutton).toBeVisible();
    await expect(rbutton).toBeEnabled();
    await expect(rbutton).not.toBeChecked();
    await rbutton.check();
    await expect(rbutton).toBeChecked();
    await page.waitForTimeout(3000);    
});



test('Check selected gender', async ({ page }) => {
  // Navigate to the page
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Locate the gender radio buttons
  const maleRadio = page.locator('input[value="male"]');
  const femaleRadio = page.locator('input[value="female"]');

  // Check which one is selected
  const isMaleChecked = await maleRadio.isChecked();
  const isFemaleChecked = await femaleRadio.isChecked();

  if (isMaleChecked) {
    console.log('Selected gender is Male');
  } else if (isFemaleChecked) {
    console.log('Selected gender is Female');
  } else {
    console.log('No gender selected');
  }
  // Optional assertion
  expect(isMaleChecked || isFemaleChecked).toBeTruthy();
});


//Chckbox in Playwright https://testautomationpractice.blogspot.com/
test('Checkbox Actions', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const cbox : Locator=page.getByLabel("Sunday");
    await expect(cbox).toBeVisible();
    await expect(cbox).toBeEnabled();
    await expect(cbox).not.toBeChecked();
    await cbox.check();
    await expect(cbox).toBeChecked();

    await page.waitForTimeout(3000);
    await cbox.uncheck();
    await expect(cbox).not.toBeChecked();
});

//Chckbox in Playwright https://testautomationpractice.blogspot.com/
test('Checkbox Actions All', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    for(const day of days)
    {
        const cbox : Locator=page.getByLabel(day);
        await expect(cbox).toBeVisible();
        await expect(cbox).toBeEnabled();
        await expect(cbox).not.toBeChecked();
        await cbox.check();
        await expect(cbox).toBeChecked();
        await page.waitForTimeout(1000);
    }   
});

//Chckbox in Playwright https://testautomationpractice.blogspot.com/
test.only('Checkbox Actions Last 3 ', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    for(const day of days.slice(-3))
    {
        const cbox : Locator=page.getByLabel(day);
        await expect(cbox).toBeVisible();
        await expect(cbox).toBeEnabled();
        await expect(cbox).not.toBeChecked();
        await cbox.check();
        await expect(cbox).toBeChecked();
        await page.waitForTimeout(1000);
    }   
});

//Toggle Checkbox in Playwright https://testautomationpractice.blogspot.com/
test('Toggle Checkbox Actions', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const tbox : Locator=page.locator("#toggle");
    await expect(tbox).toBeVisible();
    await expect(tbox).toBeEnabled();   
    await tbox.click();
    await page.waitForTimeout(3000);
    const cbox : Locator=page.getByLabel("Sunday");
    await expect(cbox).not.toBeVisible();
    await tbox.click();
    await page.waitForTimeout(3000);
    await expect(cbox).toBeVisible();
} );