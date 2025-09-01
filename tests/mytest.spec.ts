import {test,expect} from '@playwright/test';

test('Verify Page Title', async ({page}) => {
  await page.goto('http://www.automationpractice.pl/index.php');
  let title = await page.title();
  console.log(title);
  await expect(page).toHaveTitle('My Shop');
});
