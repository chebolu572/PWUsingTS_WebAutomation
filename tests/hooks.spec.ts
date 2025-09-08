import {test, expect} from '@playwright/test';

test.beforeEach('before for each',async()=>
{
    console.log("This is Vefore Each............")
})

test.afterEach('Aftereach',async()=>
{
    console.log("This is Afer  Each............")
})

test.beforeAll('BeforeAll',async()=>
{
    console.log("This is Before  ALL............")
})