import {Page,expect, Locator} from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductsPage extends BasePage{

    private readonly products :Locator;
    private readonly availBrands : Locator;
    private readonly fetchAllProducts :Locator;
    private readonly firstProduct :Locator;
    private readonly productInfo : Locator;

    private readonly searchBar :Locator;
    private readonly searchBtn : Locator;
    private readonly productCount : Locator;

  



    constructor(page:Page){
        super(page)
        this.products = this.getLocator('a[href="/products"]');
        this.availBrands = this.getLocator('//ul[@class="nav nav-pills nav-stacked"]/li/a');
        this.fetchAllProducts = this.getLocator('//div[@class="single-products"]/div/div/p');
        this.firstProduct = this.getLocator('//a[@href="/product_details/1"]');
        this.productInfo = this.getLocator('//div[@class="product-information"]');

        this.searchBar = this.getLocator("#search_product");
        this.searchBtn = this.getLocator("#submit_search");
        this.productCount =this.getLocator('//div[@class="single-products"]');

       
    }  

    async navigateToProductPage():Promise<void>{
        await this.products.click();
        console.log(this.page.url());
        await expect(this.page).toHaveURL(/.*products/);
        await this.page.screenshot({path: "Products.png"})
    }

    async fetchAvailBrands(){
        const brandsCount = await this.availBrands.count();
        for(let i=0;i<brandsCount;i++){
            const getTxt =  this.availBrands.nth(i);
            console.log(await getTxt.textContent());
        }
    }

    async scrollPageAndFetchProducts(){
        console.log("--------------------------------------------------")
        await this.scrollToBottom();
        await this.page.screenshot({path:"Bottom of page.png"})
        const product = await this.fetchAllProducts.allTextContents();
        console.log(" Total products count | "+product.length);
        for(const prod of product){
            console.log(prod.trim())
        }
    }

    async viewProduct(){
        await this.firstProduct.click();
        const getDetails = await this.productInfo.textContent();
        console.log(getDetails?.trim());
    }

    async searchProduct(){
      await  this.searchBar.fill("jeans")
      await  this.searchBtn.click();
        const size = await this.productCount.count();
        console.log("Count matched with search | "+size)
    }

    

}