var locators = require('../locators/locators.json');

class homePage{
    constructor(){

        this.enterTextInSearchField = (text) => {
            cy.get(locators.searchField).clear().type(text);
        }

        this.doesElementExist = (element, existsOrNot) => {
            cy.get(element).should(existsOrNot);
        }

        this.clickTshirtsLinkText = () => {
            cy.get(locators.tShirtsLinkText).click();
        }

        this.clickContactUsLink = () => {
            cy.get(locators.contactUsPageLink).click();
        }

        const clickContinueShoppingButton = () => {
            cy.get(locators.continueShoppingButton).click();
        }

        this.navigateToCartPage = () => {
            cy.get(locators.cartQuantity).click();
        }

        this.addItemsToCart = (numberOfItemsToBeAdded) => {
            for(var i=1;i<=numberOfItemsToBeAdded;i++){
            cy.get('#homefeatured>li:nth-child('+i+')>div>div:nth-child(2)>.button-container>a:nth-child(1)>span')
            .click();
            clickContinueShoppingButton();
            }
        }

    }


}

export default new homePage();