import {test, expect,Locator} from '@playwright/test';
// FRames in Playwright https://testautomationpractice.blogspot.com/
    test('Frames', async ({ page }) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");
//Total nuber of frames in a page
    const framecount=page.frames();
    console.log("Total number of frames in a page: "+framecount.length);

    //Get Frame using Frame Name Attribute
    const framename=page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"});
    if(framename){
    const text1=await framename.locator("[name='mytext1']").fill("Hello");
    console.log("Frame using Frame Name Attribute: "+text1);
    }
    else
    {
        console.log("Frame using Frame Name Attribute: Frame not found");
    }

    //Using FrameLocator()
    const frame1=page.frameLocator("iframe[name='framel1']");
    await frame1.locator("[name='mytext1']").fill("Hello World");
    console.log("Using FrameLocator(): Hello World");
    await page.waitForTimeout(3000);
});