import {test,expect,Locator} from '@playwright/test';
import * as path from 'path';
test('Axes in Xpath',async({page})=>{
await page.goto("https://www.w3schools.com/html/html_tables.asp");

//Self
const gercell:Locator = page.locator("//td[text()='Germany']/self::td");
await expect(gercell).toHaveText("Germany");

//Parent
const gerparent:Locator = page.locator("//td[text()='Germany']/parent::tr");
await expect(gerparent).toBeVisible();
let parenttext: string = (await gerparent.textContent()) ?? "";
console.log("Parent text is: " + parenttext);

//Child axes
const childaxes:Locator = page.locator("//table[@id='customers']//tr[2]/child::td");
const countchild:number= await childaxes.count();
console.log("Total child rows are: "+countchild);
//await expect(childaxes).toBeVisible();
let childtext:string=await childaxes.nth(1).textContent()??"";
console.log("Child row text is: "+childtext);

//Ancestor axes
const ancestoraxes:Locator = page.locator("//td[text()='Germany']/ancestor::table");
await expect(ancestoraxes).toBeVisible();
let anctext:string=await ancestoraxes.textContent()??"";
console.log("Ancestor text is: "+anctext);

//desendant axes
const descendantaxes:Locator = page.locator("//table[@id='customers']/descendant::td");
const countdesc:number= await descendantaxes.count();
console.log("Total descendant rows are: "+countdesc);
let desctext:string=await descendantaxes.nth(4).textContent()??"";
console.log("Descendant text is: "+desctext);


//Following axes
const followingaxes:Locator = page.locator("//td[text()='Germany']/following::td");
const countfol:number= await followingaxes.count();
console.log("Total following rows are: "+countfol);
let foltext:string=await followingaxes.nth(4).textContent()??"";
console.log("Following text is: "+foltext);

// ...existing code...

//await page.screenshot({ path: path.join("C:\PWUsingTS_WebAutomation\ScreenShots", 'axes_spec_screenshot.png') });
// ...existing code...
});
