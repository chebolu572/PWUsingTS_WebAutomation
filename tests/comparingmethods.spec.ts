import {test, expect,Locator} from '@playwright/test';
import { Console } from 'console';
// Comparing Methods in Playwright https://testautomationpractice.blogspot.com/
test('Comparing Methods', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');
    const products:Locator=page.locator('.product-title')

    //Innertext vs TextContent
    console.log(await products.nth(1).innerText());
    console.log(await products.nth(1).textContent());
    const count=await products.count();
    console.log("Total products Count: "+count);
    for(let i=0;i<count;i++) 
    {
        const productname=await products.nth(i).innerText();
        console.log("Total products: "+ productname);
    }  
    
    //allInnertext vs allTextContent
    console.log("----allInnertext vs allTextContent--------");
    console.log("Product Names Capture by ALLINNERTEXT():"+await products.allInnerTexts());
    console.log("Product Names Capture by ALLTEXTCONTENT():"+await products.allTextContents());

    //All()

    console.log("----All() Method--------");
    const allproducts:Locator[]=await products.all(); 
    console.log("Total products: "+ allproducts);

});