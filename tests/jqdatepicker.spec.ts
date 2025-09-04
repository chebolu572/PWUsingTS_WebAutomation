import {test, expect,Locator} from '@playwright/test';
// JQuery Datepicker in Playwright https://testautomationpractice.blogspot.com/
test('JQuery Datepicker', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    const datepicker:Locator=page.locator("#datepicker");
    await expect (datepicker).toBeVisible();

    //1)Using fill method
    //datepicker.fill("06/20/2025");

    //2.Click on datepicker icon
    await datepicker.click();
    const year='2025';
    const month='Jun';
    const date='20';    

    while(true)
    {
        const cuumon=await page.locator('.ui-datepicker-month').innerText();        
        const cuuyear=await page.locator('.ui-datepicker-year').innerText();
      
        if(cuumon===month && cuuyear===year)
        {
            break;
        }       
        //Future Date
        await page.locator('.ui-datepicker-next').click();
    }
    
    const alldates=await page.locator(".ui-datepicker-calendar td").all();
    for(const alldate of alldates)
    {
        const dt=await alldate.innerText(); 

        if(dt===date)
        {
            await alldate.click();
            break;
        }
    }
    await page.waitForTimeout(5000)
});