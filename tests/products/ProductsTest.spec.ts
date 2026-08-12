import { test } from '../../fixtures/testFixtures';
// import { ProductsPage } from '../../pages/ProductsPage';

test.describe('Products Tests', () => {


    test.beforeEach(async ({ productsPage }) => {
      //   productsPage = new ProductsPage(page);
        await productsPage.gotoApplication();
    });

    test('Verify products', async ({productsPage}) => {

        await productsPage.navigateToProductPage();
        await productsPage.fetchAvailBrands();
        await productsPage.scrollPageAndFetchProducts();
        await productsPage.viewProduct();

    });

    test('Search an item', async ({productsPage}) => {

        await productsPage.navigateToProductPage();
        await productsPage.searchProduct();

    });

});