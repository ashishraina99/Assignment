import homePage from '../support/pages/homePage';
import locators from '../support/locators/locators.json';
import tShirtsPage from '../support/pages/tShirtsPage';
import contactUs from '../support/pages/contactUsPage';
import cartPage from '../support/pages/cartPage';

describe('practice automation', async function(){

    it('UI Automation', async function(){
        cy.visit('/');
        cy
        .fixture('data')
        .then(enter => {
            homePage.enterTextInSearchField(enter.twoCharsInSearchField);
            homePage.doesElementExist(locators.resultsDropdown, enter.notExist);
            homePage.enterTextInSearchField(enter.threeCharsInSearchField);
            homePage.doesElementExist(locators.resultsDropdown, enter.exists);
            homePage.clickTshirtsLinkText();
            tShirtsPage.clickCheckbox(locators.largeSizeCheckbox);
            tShirtsPage.isCheckboxChecked(locators.largeSizeCheckbox, enter.beChecked);
        });

        const fileName = 'downloads.jpg';
        homePage.clickContactUsLink();        
        contactUs.uploadFile(locators.fileUploadFieldID, fileName);
        cy.get(locators.fileUploadFieldClass).contains(fileName);

        cy.visit('/');
        const numberOfItems=5;
        homePage.addItemsToCart(numberOfItems);
        cy.get(locators.cartQuantity).should('have.text', numberOfItems);

        homePage.navigateToCartPage();
        cartPage.calculateTotalPrice(numberOfItems);
    });

});