import {test, expect,Locator} from '@playwright/test';
// JQuery Datepicker in Playwright https://testautomationpractice.blogspot.com/
test('BS Datepicker', async ({ page }) => {

    await page.goto("https://www.booking.com/");
    page.getByTestId("searchbox-dates-container").click();
    
    //1)Using fill method
    //datepicker.fill("06/20/2025");

    //2.Click on datepicker icon
    let checkinyear:string='2026';
    let checkinmonth:string='Jun';
    let checkinday='20';    

    while(true)
    {
        const checkinmonthyear=await page.locator("h3[aria-live='polite']").first().innerText();       
        const currentmonth=checkinmonthyear.split(' ')[0];
        const currentyear=checkinmonthyear.split(' ')[1];
      
        if(currentmonth===checkinmonth && currentyear===checkinyear)
        {
            break;
        }    
        else
        {
            await page.locator('button[aria-label="Next month"]').click();
        }   
    }
    
    //select the Specific checkin date
    const alldates=await page.locator("td[data-bui-ref='calendar-date']").all();
    for(const alldate of alldates)
    {
        const dt=await alldate.getAttribute("data-date");
        if(dt?.endsWith(checkinday))
        {
            await alldate.click();
            break;
        }
    }
    await page.waitForTimeout(5000)
});