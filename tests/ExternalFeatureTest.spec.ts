import {test, expect, Page} from "@playwright/test";
import { ContactUsPage } from "../pages/ContactUsPage.spec";
import { faker } from '@faker-js/faker';
import { ProductsPage } from "../pages/ProductsPage.spec";


test.describe("Verify the external features", () => {
   let constaUsPage: ContactUsPage;


   test.beforeEach(async({page})=>{
    constaUsPage = new ContactUsPage(page);
    await constaUsPage.gotoApplication('https://automationexercise.com/');
   })

   test("Verify the ContactUS page",async() => {
        await constaUsPage.navigateToContactUsPage();
        await constaUsPage.submitContactForm(
            faker.internet.displayName(),
            faker.internet.email(),
            faker.internet.domainName(),
            faker.lorem.words(10),
            "C:\\Users\\yogireddy\\Downloads\\Yogi_Reddy_Job_Matches_30.xlsx")
   })

   
})