import {test, expect, Locator} from '@playwright/test';
test('XPath Locators', async ({page}) => {
    await page.goto('https://demowebshop.tricentis.com');         
    //Absoloute Xpath for logo
    const ablogo = page.locator("//html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]");
    await page.waitForTimeout(5000);
    await expect(ablogo).toBeVisible();

    //Relative Xpath for logo
    const relogo = page.locator("//img[@alt='Tricentis Demo Web Shop']");
    await page.waitForTimeout(5000);
    await expect(relogo).toBeVisible();  
    await page.evaluate(() => window.scrollTo(0, 100));

    //Contains Xpath for Product
    const product:Locator = page.locator("//h2/a[contains(@href,'computer')]");
    const countpro:number= await product.count();
    console.log("Total products are: "+countpro);
    await page.waitForTimeout(5000);
    expect(countpro).toBeGreaterThan(0);
   await product.first().textContent();
   await product.last().textContent();
    await product.nth(2).textContent();
    let protitles:string[]=await product.allTextContents();
    console.log("Product titles are: "+protitles);

    //Starts-with Xpath for search box
    const searchbox = page.locator("//h2/a[starts-with(@href,'/bulid')]");
    const countsear:number= await searchbox.count();
    //await searchbox.fill("computer");
    await page.waitForTimeout(5000);

    //Text() FUnction  Xpath for search button
    const searchbtn = page.locator("//a[text()='Search']");
    expect(searchbtn).toBeVisible();
    await searchbtn.click();
    await page.waitForTimeout(5000);

    //LAst() Function Xpath for last product
    const lastpro = page.locator("//div[@class='column follow-us']//li[last()]");
    await expect(lastpro).toBeVisible();
    await lastpro.textContent();

    //Position() Function Xpath for 3rd product 
    const thirdpro = page.locator("//div[@class='column follow-us']//li[position()=3]");
    await expect(thirdpro).toBeVisible();
    await thirdpro.textContent();
});