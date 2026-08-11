import {Page, expect,Locator} from '@playwright/test';
import { BasePage } from './BasePage.spec';
import { faker } from '@faker-js/faker';

export class ContactUsPage extends BasePage{

    private readonly contactUsLink: Locator;
    private readonly userName: Locator;
    private readonly userEmail: Locator;
    private readonly userSubject: Locator;
    private readonly userMessage: Locator;
    private readonly uploadFile: Locator;
    private readonly submitButton: Locator;
    private readonly alertSuccess :Locator;

    constructor(page:Page){
        super(page);
        this.contactUsLink = this.getLocator('a[href="/contact_us"]');
        this.userName = this.getLocator('input[name="name"]');
        this.userEmail = this.getLocator('input[name="email"]');
        this.userSubject = this.getLocator('input[name="subject"]');
        this.userMessage = this.getLocator('#message');
        this.uploadFile = this.getLocator('input[name="upload_file"]');
        this.submitButton = this.getLocator('input[name="submit"]');
        this.alertSuccess = this.getLocator('div[class="status alert alert-success"]');


    }

    async navigateToContactUsPage(): Promise<void>{
        await this.contactUsLink.click();
        const title =  this.page.url();
        console.log('Navigated to Contact Us Page:', title);
        await expect(this.page).toHaveURL(/.*contact_us/);
    }

    async submitContactForm(name: string, email: string, subject: string, message: string, filePath: string) {
        await this.userName.fill(name);
        await this.userEmail.fill(email);
        await this.userSubject.fill(subject);
        await this.userMessage.fill(message);
        await this.uploadFile.setInputFiles(filePath);
        console.log('Contact form filled with details:'+ await this.userName.inputValue(), await this.userEmail.inputValue(), await this.userSubject.inputValue(), await this.userMessage.inputValue(), await this.uploadFile.inputValue());
       

        this.page.once('dialog',async dialog=>{
                console.log(dialog.message());
              await  dialog.accept();
        })
         await this.submitButton.click();
        // await expect(this.alertSuccess).toBeVisible();
         const alertTxt = await this.alertSuccess.textContent();
         console.log("Success Message | "+alertTxt)
         expect(alertTxt).toBe("Success! Your details have been submitted successfully.");
    }

}