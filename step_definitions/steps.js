const { I, cartPage, homePage, searchPage, productPage, productUtils } = inject();

Before(() => {
    I.amOnPage('/');  
});

Given('I search by the product Faded Short Sleeve', () => {    
    I.fillField(homePage.fields.search, productUtils.product.shortName);
    I.click(homePage.buttons.search);
});

Given('I add the product in the cart', () => {    
    I.seeTextEquals(searchPage.title, searchPage.navigation);
    I.click(searchPage.firstItem.name);
    I.see(productUtils.product.fullName, productPage.product.name);    
    I.waitForElement(productPage.product.btnAdd);
    I.click(productPage.product.btnAdd);    
    I.waitForVisible(productPage.modalValidationAddCart.modal);
    I.see(productPage.modalValidationAddCart.txtValidationSuccess, productPage.modalValidationAddCart.modal);        
});

When('I go to the Cart page', () => {
    I.click(productPage.modalValidationAddCart.btnGoCheckout);    
    I.see(cartPage.title);    
});

Then('I should see the correct product information', () => {
    I.seeTextEquals(productUtils.product.fullName, cartPage.cartItem.description);
    I.seeTextEquals(productUtils.product.unitPrice, cartPage.cartItem.unitPrice);
});

After(() => {
    console.log('Failed with');
});

Fail(async () => {    
    await I.runCommand('npm run allure:report');     
});