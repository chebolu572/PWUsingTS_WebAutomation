import {test, expect} from '@playwright/test';
import { console } from 'inspector';

test.describe('Group2',async()=>{


test('Grouping Test1', async ({ page,context }) => {

    console.log("This is Test1............")

});

test('Grouping Test2', async ({ page,context }) => {

    console.log("This is Test2............")

});
})

test.describe('Group2',async()=>{

    test('Grouping Test3', async ({ page,context }) => {
    console.log("This is Test3............")

});

test('Grouping Test4', async ({ page,context }) => {
    console.log("This is Test4............")

});

})

