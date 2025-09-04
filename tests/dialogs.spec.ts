import {test, expect,Locator} from '@playwright/test';
// Pagination Table in Playwright https://testautomationpractice.blogspot.com/
test('simple Dialogs', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com");

    page.on('dialog', async dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        console.log(`Dialog type: ${dialog.type()}`);
        await dialog.accept();
        //await dialog.dismiss();
    });
    await page.locator("#alertBtn").click();
    await page.waitForTimeout(2000);
});

test('Confirmation Dialogs', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com");

    page.on('dialog', async dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        console.log(`Dialog type: ${dialog.type()}`);
        await dialog.accept();
        //await dialog.dismiss();
    });
    await page.locator("#confirmBtn").click();
    const msg:string=await page.locator("#demo").innerText();
    expect(msg).toBe("You pressed OK!");
    await page.waitForTimeout(2000);
});

test.only('Promot Dialogs', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com");

    page.on('dialog', async dialog => {
        console.log(`Dialog type: ${dialog.type()}`);
        expect(dialog.type()).toBe("prompt");   
        console.log(`Dialog message: ${dialog.message()}`);
        expect(dialog.message()).toBe("Please enter your name:");
        await dialog.accept("Mukesh");
        //await dialog.dismiss();
    });
    await page.locator("#promptBtn").click();
    const msg:string=await page.locator("#demo").innerText();
    expect(msg).toBe("Hello Mukesh! How are you today?");
    await page.waitForTimeout(2000);
});