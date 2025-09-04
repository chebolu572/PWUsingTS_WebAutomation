import {test, expect,Locator} from '@playwright/test';
import { text } from 'stream/consumers';
// Dynamic Table in Playwright https://testautomationpractice.blogspot.com/
test('Dynamic Table', async ({ page }) => {

    await page.goto("https://practice.expandtesting.com/dynamic-table");
    const dynamictab=page.locator("table.table tbody");
    await expect (dynamictab).toBeVisible();

    //Step1:For chrome Prcess get value of CPU Load
    const rows:Locator[]=await dynamictab.locator("tr").all();
    console.log("Total number of rows: "+rows.length);
    expect(rows.length).toBe(4);
    let cpuvalue='';
    for(const row of rows)
    {
        const processname:string=await row.locator('td').nth(0).innerText();
        if(processname.trim()==="Chrome")
        {
            //const cpuvalue:string=await row.locator('td:has-text("%")').nth(1).innerText();
            cpuvalue=await row.locator("td",{hasText:'%'}).innerText();
            console.log("CPU Load for Chrome process is: "+cpuvalue);
            //expect(cpuvalue).toBe("25%");
        }
    }
    //Step2: Comparing the CPU Load value of Chrome process with the value in the progress bar
    const progressbarvalue=await page.locator("#chrome-cpu").innerText();
    console.log("Value of CPU Load in the progress bar is: "+progressbarvalue);
    if(progressbarvalue.includes(cpuvalue))
    {
        console.log("Value of CPU Load in the progress bar matches with the value of Chrome process");
    }
    else
    {
        console.log("Value of CPU Load in the progress bar does not match with the value of Chrome process");
    }
    expect(progressbarvalue).toContain(cpuvalue);

     await page.waitForTimeout(5000)
});