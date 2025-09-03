// CSS Examples from playwright.dev
/*
1) Got to Url: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
2) Enter user name and password ( Admin, admin123)
3) Click on login
4) Check user name is visible after login
*/
import { test, expect } from '@playwright/test';
test('CSS Locators', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // CSS locator for logo
    const logo = page.locator("img[alt='company-branding']");
    await expect(logo).toBeVisible();
    // CSS locator for username
    await page.locator("input[placeholder='Username']").fill("Admin");
    // CSS locator for password
    await page.locator("input[placeholder='Password']").fill("admin123");
    // CSS locator for login button
    await page.locator("button:has-text('Login')").click();
    await page.waitForTimeout(5000);
    // CSS locator for user name after login
    await expect(page.locator("p:has-text('manda user')")).toBeVisible(); //user can be changed. Please check manually once.
});

