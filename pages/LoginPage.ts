import {Page,Locator} from '@playwright/test'

class loginpage
{
    // Define the Variables -- private and ReadOnly

    private readonly page:Page;
    private readonly loginlink:Locator;
    private readonly userNameInput:Locator;
    private readonly passwordInput:Locator;
    private readonly loginButton:Locator;

    //Constructor
     constructor(page:Page)
     {
        this.page=page;
        this.loginlink=this.page.locator('login2');
        this.userNameInput=this.page.locator('loginusername');
        this.passwordInput=this.page.locator('loginpassword');
        this.loginButton=this.page.locator("button[onCLick=''logIn()']");
     }

     //ActionMethods

     async ClickLoginLink()
     {
        await this.loginlink.click();
     }

     async enterUserName(username:string)
     {
        await this.userNameInput.clear();
        await this.userNameInput.fill(username);
     }

     async enterPassword(password:string)
     {
        await this.passwordInput.clear();
        await this.passwordInput.fill(password);
     }

     async CLickLoginBUtton()
     {
        await this.loginButton.click();
     }
     
     async performLogin(username:string,password:string)
     {
        await this.ClickLoginLink();
        await this.enterUserName(username);
        await this.enterPassword(password);
        await this.CLickLoginBUtton();
     }



}