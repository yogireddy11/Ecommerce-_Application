import {test,expect}  from '@playwright/test';
import {HomePage} from '../pages/HomePage.spec';   
import {SignupPage} from '../pages/SignUpPage.spec';
import { faker } from '@faker-js/faker';
import { LoginPage } from '../pages/LoginPage.spec';

    let homePage: HomePage;
    let signUpPage: SignupPage;
    let loginPage: LoginPage;


test.describe('Home Page Test', () => {

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);
        signUpPage = new SignupPage(page);
        loginPage = new LoginPage(page);
          await homePage.gotoApplication('https://automationexercise.com/');
    });

    test('Verify Home Page Title', async () => {
     
        await homePage.verifyHomePageTitle();
    });

    test('Verify Pages Available', async () => {
      
        await homePage.verifyPagesAvailable();
    });

    test('Verify Sign Up Process', async () => {
        await signUpPage.navigateToSignUpPage();
        await signUpPage.fillUpDetails(faker.internet.username(), faker.internet.email());
        await signUpPage.completeSignUpProcess(faker.internet.password());
        await signUpPage.fillAdditionalDetails(faker.person.firstName(), faker.person.lastName(), faker.company.name(), faker.location.streetAddress(), faker.location.state(), faker.location.city(), faker.location.zipCode(), faker.phone.number());
    });

    test("Verify login process", async () => {
        await signUpPage.navigateToSignUpPage();
        await loginPage.loginToApplication("Asa72@hotmail.com","qQyR931dsLuL27l");
        await loginPage.verifyLoginSuccess();

    });

});
