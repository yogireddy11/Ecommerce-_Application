import { test } from '../../fixtures/testFixtures';
import { generateUser } from '../../testData/users';


test.describe('Contact Us Tests', () => {

       let user: ReturnType<typeof generateUser>;


    test.beforeEach(async ({ contactUsPage }) => {


        await contactUsPage.gotoApplication();
        user =generateUser();

    });

    test('Verify Contact Us form submission', async ({contactUsPage}) => {

        await contactUsPage.navigateToContactUsPage();

        await contactUsPage.submitContactForm(
            user.fullName,
            user.email,
            user.subject,
            user.message,
            "C:\\Users\\yogireddy\\Downloads\\Yogi_Reddy_Job_Matches_30.xlsx"
        );

    });

});