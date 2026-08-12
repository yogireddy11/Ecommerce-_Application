import { test } from '../../fixtures/testFixtures';


test.describe('Login Tests', () => {

    test.beforeEach("Perform login page",async({loginPage})=>{
        await loginPage.gotoApplication();


    })

    test('Verify login process', async ({ loginPage,signUpPage }) => {

      

        await signUpPage.navigateToSignUpPage();

        await loginPage.loginToApplication(
            
            process.env.TEST_USERNAME!,
            process.env.TEST_PASSWORD!
        );

        await loginPage.verifyLoginSuccess();
    });

    test('Verify login with invalid credentials', async ({ loginPage,signUpPage }) => {

        

        await signUpPage.navigateToSignUpPage();

        await loginPage.loginToApplication(
            'invalid@example.com',
            'invalidpassword'
        );

        await loginPage.inValidCredentials();
    });

    test('Verify logout process', async ({ loginPage,signUpPage }) => {

    

        await signUpPage.navigateToSignUpPage();

        await loginPage.loginToApplication(
            process.env.TEST_USERNAME!,
            process.env.TEST_PASSWORD!
        );

        await loginPage.logoutFromApplication();
    });

});