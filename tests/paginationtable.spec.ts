import {test, expect,Locator} from '@playwright/test';
// Pagination Table in Playwright https://testautomationpractice.blogspot.com/
test('Pagination Table', async ({ page }) => {
    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html")
    let totalpages=true;
    while(totalpages)
    {
        const rows=await page.locator("#example tbody tr").all();
        for (let row of rows)
        {
            const rowdata=await row.innerText();
            console.log(rowdata);
        }
        const nextbutton:Locator=page.locator("button[aria-label='Next']");
        const classvalue=await nextbutton.getAttribute("class");
        if(classvalue?.includes("disabled"))
        {
            totalpages=false;
            console.log("No more pages to process. Exiting the loop");
        }   
        else
        {
            await nextbutton.click();
            await page.waitForTimeout(2000);
        }
    }
    await page.waitForTimeout(5000)
    });



    test('Filter the rows and check the rows Table', async ({ page }) => {
    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");
    const dropdown:Locator=page.locator("#dt-length-0");
    await dropdown.selectOption({label:"25"});
    const rows=await page.locator("#example tbody tr").all();
    console.log("Total number of rows displayed after selecting 25 from dropdown: "+rows.length);
    expect(rows.length).toBe(25);
    });


    
    test('Search for specific data in a table', async ({ page }) => {
    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");
    const search:Locator=page.locator("#dt-search-0");
    await search.fill("Software Engineer");
    const rows=await page.locator("#example tbody tr").all();
    if(rows.length>=1)
    {
        for (let row of rows)
        {
            const rowdata=await row.innerText();
            console.log(rowdata);
        }
    }
    else
    {
        console.log("No rows found with the search criteria");
    }
    console.log("Total number of rows displayed after searching for Software Engineer: "+rows.length);
    expect(rows.length).toBe(true);
    });