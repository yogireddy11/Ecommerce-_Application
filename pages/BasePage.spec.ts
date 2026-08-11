import {Page, Locator} from '@playwright/test'

export abstract class BasePage {
    readonly page: Page;
    constructor(page:Page){
        this.page=page;
    }

    async gotoApplication(url:string): Promise<void>{
       await this.page.goto(url);
    }

    async getPageTitle():Promise<string>{
        return await this.page.title();
    }

    protected getLocator(selector: string) {
        return this.page.locator(selector);
    }
}
