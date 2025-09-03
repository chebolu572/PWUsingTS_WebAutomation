 //Dynamic Elements in Playwright https://testautomationpractice.blogspot.com/ Dynamic Button 
import { test, expect, Locator } from '@playwright/test';
test('Dynamic Elements', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');        

    for(let i=1;i<=5;i++)
 {     
      let button:Locator = page.locator("//button[starts-with(@name,'st')]");

      //let button=page.getByRole('button', { name: '/START|STOP/'});
      await button.click();
      await page.waitForTimeout(3000);
    }});