// import { test, expect,Page } from '@playwright/test';
// import { SignUpPage } from '../../pages/SignUpPage';
import { test } from '../../fixtures/testFixtures';

import { generateUser } from '../../testData/users';


test.describe("Handle SignUpPage", () => {
  //  let signUpPage :SignUpPage;
    let user: ReturnType<typeof generateUser>;

    

    test.beforeEach(async ({ signUpPage  }) => {
        await signUpPage.gotoApplication();
        user = generateUser();

    })

    test('Verify Sign Up Process', async ({signUpPage }) => {

          
        await signUpPage.navigateToSignUpPage();
        await signUpPage.fillUpDetails(user.username, user.email);
        await signUpPage.completeSignUpProcess(user.password);
        await signUpPage.fillAdditionalDetails(
            user.firstName,
            user.lastName,
            user.company,
            user.address,
            user.state,
            user.city,
            user.zipcode,
            user.phone
        );
    });

    test("Verify Sign Up Process with existing email", async ({signUpPage }) => {

        await signUpPage.navigateToSignUpPage();
        await signUpPage.fillUpDetails("Asa72", "Asa72@hotmail.com");
    });



})