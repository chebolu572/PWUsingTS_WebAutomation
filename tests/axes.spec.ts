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

//Preceding axes
const precedingaxes:Locator = page.locator("//td[text()='Germany']/preceding::td");
const countpre:number= await precedingaxes.count();
console.log("Total preceding rows are: "+countpre);
let pretext:string=await precedingaxes.nth(4).textContent()??"";
console.log("Preceding text is: "+pretext);

//Preceding-sibling axes
const presibaxes:Locator = page.locator("//td[text()='Germany']/preceding-sibling::td");
const countpresib:number= await presibaxes.count();
console.log("Total preceding-sibling rows are: "+countpresib);
let presibtext:string=await presibaxes.nth(1).textContent()??"";
console.log("Preceding-sibling text is: "+presibtext);

//Following-sibling axes
const folsibaxes:Locator = page.locator("//td[text()='Germany']/following-sibling::td");
const countfolsib:number= await folsibaxes.count();
console.log("Total following-sibling rows are: "+countfolsib);
let folsibtext:string=await folsibaxes.nth(1).textContent()??"";
console.log("Following-sibling text is: "+folsibtext);
});
