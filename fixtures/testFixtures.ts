import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartItemPage } from '../pages/CartItemPage';
import { SignUpPage } from '../pages/SignUpPage';
import { ContactUsPage } from '../pages/ContactUsPage';

type Pages = {
    homePage: HomePage;
    loginPage: LoginPage;
    productsPage: ProductsPage;
    cartPage: CartItemPage;
    signUpPage: SignUpPage;
    contactUsPage: ContactUsPage;
};

export const test = base.extend<Pages>({

    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    productsPage: async ({ page }, use) => {
        await use(new ProductsPage(page));
    },

    cartPage: async ({ page }, use) => {
        await use(new CartItemPage(page));
    },

    signUpPage: async ({ page }, use) => {
        await use(new SignUpPage(page));
    },

    contactUsPage: async ({ page }, use) => {
        await use(new ContactUsPage(page));
    },

});

export { expect } from '@playwright/test';