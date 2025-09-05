import {test, expect,Locator} from '@playwright/test';
// FRames in Playwright https://testautomationpractice.blogspot.com/
    test('Mouse Hover', async ({ page }) => {

        await page.goto("https://testautomationpractice.blogspot.com/");
        await page.locator(".dropbtn").hover();

        page.locator('.dropdown-content a:nth-child(2)').hover()

        await page.waitForTimeout(3000);

    });

    //Right CLick 
    test('Right Click', async ({ page }) => {

        await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");
        await page.locator(".context-menu-one").click({button:'right'});        

        await page.waitForTimeout(3000);
    });

    //Double Click
    test('Double Click', async ({ page }) => {

        await page.goto("https://testautomationpractice.blogspot.com/");
        await page.locator("button[ondblclick='myFunction1()']").dblclick();
        await expect(page.locator("#field2")).toHaveText("Hello World!");
        await page.waitForTimeout(3000);
    });

    //Drag and Drop
    test.only('Drag and Drop', async ({ page }) => { 
        await page.goto("https://testautomationpractice.blogspot.com/");
        const sourcelocator=page.locator("#draggable");
        const targetlocator=page.locator("#droppable");
        await sourcelocator.dragTo(targetlocator);
        await expect(targetlocator).toHaveText("Dropped!");
        await page.waitForTimeout(3000);
    });

    
