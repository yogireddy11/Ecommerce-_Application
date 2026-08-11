import {Page, expect, Locator} from '@playwright/test';
import {BasePage} from './BasePage.spec';

export class SignupPage extends BasePage{
    private readonly gotoSignPage: Locator;
    private readonly userName: Locator;
    private readonly emailAdd: Locator;
    private readonly signUpButton: Locator;
    private readonly errorMessage: Locator;
    private readonly userTitle: Locator;
    private readonly password: Locator; 
    private readonly days: Locator;
    private readonly months: Locator;
    private readonly years: Locator
    private readonly firstName: Locator;
    private readonly lastName: Locator;
    private readonly company: Locator;
    private readonly address1: Locator;
    private readonly country: Locator;
    private readonly state: Locator;
    private readonly city: Locator;
    private readonly zipCode: Locator;
    private readonly mobileNumber: Locator;
    private readonly createAccountButton: Locator;



    constructor(page:Page){
        super(page);
        this.gotoSignPage =this.getLocator('a[href="/login"]');
        this.userName = this.getLocator('input[name="name"]');
        this.emailAdd = this.getLocator('//input[@data-qa="signup-email"]');
        this.signUpButton = this.getLocator('//button[@data-qa="signup-button"]');
        this.errorMessage = page.getByText('Email Address already exist!');
        this.userTitle = this.getLocator('#id_gender1');
        this.password = this.getLocator('#password');
        this.days = this.getLocator('#days');
        this.months = this.getLocator('#months');
        this.years = this.getLocator('#years');
        this.firstName = this.getLocator('input[name="first_name"]');
        this.lastName = this.getLocator('input[name="last_name"]');
        this.company = this.getLocator('input[name="company"]');
        this.address1 = this.getLocator('input[name="address1"]');
        this.country = this.getLocator('select[name="country"]');
        this.state = this.getLocator('input[name="state"]');
        this.city = this.getLocator('input[name="city"]');
        this.zipCode = this.getLocator('input[id="zipcode"]');
        this.mobileNumber = this.getLocator('input[name="mobile_number"]');
        this.createAccountButton = this.getLocator('//button[@data-qa="create-account"]');

    }

    async navigateToSignUpPage(): Promise<void>{
        await this.gotoSignPage.click();
    }

    async fillUpDetails(name:string, email: string){
        await this.userName.fill(name);
        
        await this.emailAdd.fill(email);
        console.log('User Name:', await this.userName.inputValue()+" | Email Address:", await this.emailAdd.inputValue());
        await this.signUpButton.click();
        if(await this.errorMessage.isVisible()){
            console.log('Error Message:', await this.errorMessage.textContent());
        }else{
            console.log('Sign Up Process is on going, please check the next page for further details');
        }
    }

    async completeSignUpProcess(pass:string){

        await this.userTitle.click();
        await this.password.fill(pass);
        await this.days.selectOption({label: '10'});
        await this.months.selectOption({label: 'May'});
        await this.years.selectOption({label: '1990'});
        console.log('User Title:', await this.userTitle.isChecked() ? 'Mr.' : 'Mrs.', " | Password:", await this.password.inputValue(), " | Date of Birth:", await this.days.inputValue() + "-" + await this.months.inputValue() + "-" + await this.years.inputValue());

        
    }

    async fillAdditionalDetails(firstName:string, lastName:string, company:string, address1:string, state:string, city:string, zipCode:string, mobileNumber:string): Promise<void>{
        
        console.log('Fill the additional details!');
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.company.fill(company);
        await this.address1.fill(address1);
        await this.country.selectOption({label: 'India'});
        await this.state.fill(state);
        await this.city.fill(city);
        await this.zipCode.fill(zipCode);
        await this.mobileNumber.fill(mobileNumber);
        console.log('First Name:', await this.firstName.inputValue(), " | Last Name:", await this.lastName.inputValue(), " | Company:", await this.company.inputValue(), " | Address:", await this.address1.inputValue(), " | Country:", await this.country.inputValue(), " | State:", await this.state.inputValue(), " | City:", await this.city.inputValue(), " | Zip Code:", await this.zipCode.inputValue(), " | Mobile Number:", await this.mobileNumber.inputValue());    
        await this.createAccountButton.click();
        

    }

    async verifySignUpWithExistingEmail(user:string, email:string): Promise<void>{

    }

}





