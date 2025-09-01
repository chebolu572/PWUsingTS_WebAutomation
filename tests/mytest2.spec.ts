import {test,expect} from '@playwright/test';

test('Verify Page URL', async ({page}) => {
  await page.goto('http://www.automationpractice.pl/index.php');
  let URL = await page.url();
  console.log(URL);
  await expect(page).toHaveURL(/automationpractice/);
});
