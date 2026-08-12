import {Page, Locator} from '@playwright/test'

export abstract class BasePage {
    readonly page: Page;
    constructor(page:Page){
        this.page=page;
    }

    async gotoApplication(): Promise<void>{
          await this.page.goto('/');

    }

    async getPageTitle():Promise<string>{
        return await this.page.title();
    }

    protected getLocator(selector: string) {
        return this.page.locator(selector);
    }
    async scrollToBottom(): Promise<void> {
    await this.page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
    });

    
}
}
