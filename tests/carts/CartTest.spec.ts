import { test } from '../../fixtures/testFixtures';




test.describe("Checkout the cart Items",()=>{
  


    test.beforeEach("CheckOut the product",async({cartPage})=>{
         await cartPage.gotoApplication();
    })

       
    

    test("Check out an added items",async({ signUpPage,
        loginPage,
        productsPage,
        cartPage})=>{

        await signUpPage.navigateToSignUpPage();
        await loginPage.loginToApplication("Asa72@hotmail.com","qQyR931dsLuL27l");
        await productsPage.navigateToProductPage();
        await cartPage.checkOutProcess();
        await cartPage.placeOrder();
    })
});