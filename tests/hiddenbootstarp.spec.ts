import {test, expect} from '@playwright/test';
// Dropdown in Playwright https://testautomationpractice.blogspot.com/
test('BootStarp Hidden DD', async ({ page }) => {
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login/');
await page.locator("input[placeholder='Username']").fill("Admin");
await page.locator("input[placeholder='Password']").fill("admin123");
await page.locator("button:has-text('Login')").click();
await page.waitForTimeout(5000);
await page.getByText('PIM').click();
await page.locator('form i').nth(2).click(); //Click on dropdown

await page.waitForTimeout(2000);
await page.locator("a:has-text('Logout')").click();

});