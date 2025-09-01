/*
1) Got to Url: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
2) Enter user name and password ( Admin, admin123)
3) Click on login
4) Check user name is visible after login

*/



import { test, expect, Locator } from '@playwright/test';

test('Built-in Locators', async ({ page }) => {
  
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // page.getByAltText()
  let logo: Locator = page.getByAltText('company-branding');
  await expect(logo).toBeVisible();

  // page.getByPlaceholder()
  await page.getByPlaceholder('Username').fill("Admin");
  await page.getByPlaceholder('Password').fill("admin123");

  // page.getByRole()
  await page.getByRole('button', { name: 'Login' }).click();

  // page.getByText()
  await expect(page.getByText("manda user")).toBeVisible(); //user can be changed. Please check manually once.

});