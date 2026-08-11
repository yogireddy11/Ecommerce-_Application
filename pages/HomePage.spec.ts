import {Page, expect, Locator} from '@playwright/test';
import {BasePage} from './BasePage.spec';

export class HomePage extends BasePage{

    private readonly titleOfPage: Locator;
    private readonly pagesAvail : Locator;
    private readonly banners : Locator;

    constructor(page:Page){
        super(page);
        this.titleOfPage = this.getLocator('img[alt="Website for automation practice"]');
        this.pagesAvail =this.getLocator('//ul[@class="nav navbar-nav"]/li');
        this.banners = this.getLocator('//img[@class="girl img-responsive"]');
    }

    

    async verifyHomePageTitle(): Promise<void>{
        
        const title = await this.getPageTitle();
        console.log(title);
        await expect(this.page).toHaveTitle('Automation Exercise');
        await expect(this.titleOfPage).toBeVisible();
    }
    async verifyPagesAvailable(): Promise<void> {

         await expect (this.pagesAvail).toHaveCount(8)
         const pages = await this.pagesAvail.allTextContents();
         console.log('Pages available on the Home Page:', pages);

    }

   
}


