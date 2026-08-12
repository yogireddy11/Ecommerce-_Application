import { test } from '../../fixtures/testFixtures';
import {HomePage} from '../../pages/HomePage';   


   
test.describe('Home Page Tests', () => {

    test('Verify Home Page Title', async ({ homePage }) => {
       

        await homePage.gotoApplication();
        await homePage.verifyHomePageTitle();
    });

    test('Verify Pages Available', async ({ homePage }) => {
  

        await homePage.gotoApplication();
        await homePage.verifyPagesAvailable();
    });

});