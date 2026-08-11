import {test, expect, Page} from "@playwright/test";
import { ContactUsPage } from "../pages/ContactUsPage.spec";
import { faker } from '@faker-js/faker';
import { ProductsPage } from "../pages/ProductsPage.spec";


test.describe("Verify the external features", () => {
   let productsPage: ProductsPage;

   test.beforeEach(async({page})=>{
    productsPage = new ProductsPage(page);
    await productsPage.gotoApplication('https://automationexercise.com/');
   })

   

   test("verify products", async()=>{

        await productsPage.navigateToProductPage();
        await productsPage.fetchAvailBrands();
        await productsPage.scrollPageAndFetchProducts();
        await productsPage.viewProduct();

   })



})