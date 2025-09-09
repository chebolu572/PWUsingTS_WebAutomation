import {test,except} from '@playwright/test';

import {LoginPage} from '../pages/LoginPage'

test('User Login',async({page})=>{

    await page.goto("https://www.dempblaze.com/index.html")

    const loginpage=new LoginPage(page);
    /*loginpage.ClickLoginLink();
    loginpage.enterUserName("pavanol");
    loginpage.enterPassword("test@123");
    loginpage.CLickLoginBUtton();*/
    loginpage.performLogin("pavanol","test@123");
   



});