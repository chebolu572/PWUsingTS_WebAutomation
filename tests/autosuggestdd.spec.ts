import {test, expect} from '@playwright/test';
// Auto Suggest Drop Down in Playwright https://testautomationpractice.blogspot.com/
test('Auto Suggest DD', async ({ page }) => {
    await page.goto('https://amazon.com/');
    const autosuggest = await page.locator("input[name='q']");
    await autosuggest.fill("smart");

    const counts=await autosuggest.count();
    console.log("Total count of autosuggest is: "+counts);
    for(let i=0;i<counts;i++)
    {
        const text=await autosuggest.nth(i).textContent();
        console.log(text);
        if(text?.trim()=== "smart watch")
        {
            await autosuggest.nth(i).click();
            break;
        }
    }
});