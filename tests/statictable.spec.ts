import {test, expect,Locator} from '@playwright/test';
// Static Table in Playwright https://testautomationpractice.blogspot.com/
test('Static Table', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const table:Locator=page.locator("//table[@name='BookTable']//ancestor::tbody")
    console.log(table.innerText());
    await expect (table).toBeVisible();
//REad all the data from 2nd row
    const rowdata=await table.locator("tr").nth(2).allTextContents();
    console.log("Data from 2nd row: "+rowdata); 

    //Read data from 2nd row 3rd column
    const rowcolumndata=await table.locator("tr").nth(2).locator("td").nth(3).textContent();
    console.log("Data from 2nd row 3rd column: "+rowcolumndata);

    //Read all Rows and Columns
    const rowcount=await table.locator("tr").count();
    console.log("Total number of rows: "+rowcount);
    for(let i=0;i<rowcount;i++)
    {
        const colcount=await table.locator("tr").nth(i).locator("td").count();
        console.log("Total number of columns in row "+i+" is: "+colcount);
        for(let j=0;j<colcount;j++)
        {
            const data=await table.locator("tr").nth(i).locator("td").nth(j).textContent();
            console.log("Data from row "+i+" column "+j+" is: "+data);
        }
    }   

    //Print Book Names where Author is Mukesh
    for(let i=0;i<rowcount;i++)
    {
        const author=await table.locator("tr").nth(i).locator("td").nth(1).textContent();
        if(author?.trim()==="Mukesh")
        {
            const bookname=await table.locator("tr").nth(i).locator("td").nth(0).textContent();
            console.log("Book name where author is Mukesh: "+bookname);
            console.log("Author is: "+author);
        }
    }   
});