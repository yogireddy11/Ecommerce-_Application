

import { Page, expect, Locator } from '@playwright/test';
import { BasePage } from './BasePage';


export class CartItemPage extends BasePage {
    private readonly continueShopping: Locator;
    private readonly product1: Locator;
    private readonly product2: Locator;

    private readonly cartPage: Locator;
    private readonly proceedCheckout: Locator;
    private readonly address: Locator;
    private readonly totalPrice: Locator;

    private readonly placeOrderBtn: Locator;
    private readonly cardName: Locator;
    private readonly cardNumber: Locator;
    private readonly cvcNum: Locator;
    private readonly expiryMonth: Locator;
    private readonly expiryYear: Locator;
    private readonly payBtn: Locator;
    private readonly successOrderMsg: Locator;
    private readonly downloadInvoice :Locator;

    constructor(page: Page) {
        super(page);
        this.continueShopping = this.getLocator('button[class="btn btn-success close-modal btn-block"]');
        this.product1 = this.getLocator('a[data-product-id="1"]');
        this.product2 = this.getLocator('a[data-product-id="2"]');

        this.cartPage = this.getLocator('a[href="/view_cart"]');
        this.proceedCheckout = page.getByText('Proceed To Checkout');
        this.address = this.getLocator('//ul[@id="address_delivery"]/li');
        this.totalPrice = this.getLocator('//p[@class="cart_total_price"]');

        this.placeOrderBtn = this.getLocator('//a[@class="btn btn-default check_out"]');

        this.cardName = this.getLocator('input[name="name_on_card"]');
        this.cardNumber = this.getLocator('input[name="card_number"]');
        this.cvcNum = this.getLocator('input[name="cvc"]');
        this.expiryMonth = this.getLocator('input[name="expiry_month"]');
        this.expiryYear = this.getLocator('input[name="expiry_year"]');
        this.payBtn = this.getLocator('button[id="submit"]');
        this.successOrderMsg = this.getLocator('//p[contains(text(),"Congratulations")]');
        this.downloadInvoice =this.getLocator('a[class="btn btn-default check_out"]');
    }

    async checkOutProcess() {
        await this.product1.first().click();
        await this.continueShopping.click();
        await this.product2.first().click();

        await this.cartPage.first().click();
        await this.page.waitForLoadState();
        await this.page.screenshot({ path: "Cart Items.png" })
        await this.proceedCheckout.click();

        const addressDetails = await this.address.allTextContents();
        for (let details of addressDetails) {
            console.log(details);
        }
        const price = await this.totalPrice.last().textContent();
        console.log("Total price of the products | " + price);
    }

    async placeOrder(): Promise<void> {
        await this.placeOrderBtn.click();
        await this.cardName.fill("Kanakaraju")
        await this.cardNumber.fill("789456123012")
        await this.cvcNum.fill("582");
        await this.expiryMonth.fill("10");
        await this.expiryYear.fill("2035");
        await this.payBtn.click();
        const getMsg = await this.successOrderMsg.textContent();
        console.log(getMsg);
         expect(getMsg).toContain("Congratulations");

    }

}