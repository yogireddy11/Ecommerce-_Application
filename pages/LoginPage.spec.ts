import {Page,expect,Locator} from '@playwright/test';
import {BasePage} from './BasePage.spec';

export class LoginPage extends BasePage{

    private readonly emailAddress: Locator;
    private readonly password: Locator;
    private readonly loginButton: Locator
    private readonly verifyLogin: Locator;
    private readonly errorMessage: Locator;
    private readonly logoutButton: Locator;

    constructor(page:Page){
        super(page);
        this.emailAddress = this.getLocator('input[data-qa="login-email"]');
        this.password = this.getLocator('input[data-qa="login-password"]');
        this.loginButton = this.getLocator('button[data-qa="login-button"]');
        this.verifyLogin = this.getLocator('//i[@class="fa fa-user"]');
        this.errorMessage = page.getByText('Your email or password is incorrect!');
        this.logoutButton =this.getLocator('a[href="/logout"]');
    }

    async loginToApplication(email:string, password:string):Promise<void>{
        await this.emailAddress.fill(email);
        await this.password.fill(password);
        await this.loginButton.click();
    }
    async verifyLoginSuccess(): Promise<void>{
        await expect(this.verifyLogin).toBeVisible();
        console.log('Logged Account UserName | ',await this.verifyLogin.textContent());
        const pageTitle =await this.page.title();
        console.log('Page Title after login | ',pageTitle);
        await expect(this.page).toHaveTitle('Automation Exercise');
    }

    async inValidCredentials():Promise<void>{
        
        await expect(this.errorMessage).toBeVisible();
        console.log('Error Message | ',await this.errorMessage.textContent());
    }

    async logoutFromApplication():Promise<void>{
            await this.logoutButton.click();
            const getURl = this.page.url();
            await expect(getURl).toContain('https://automationexercise.com/login');
    }
}