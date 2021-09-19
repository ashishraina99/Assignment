import locators from '../locators/locators.json';

class contactUs{
    constructor(){

        this.uploadFile = (element, fileName) => {
            cy.get(element).attachFile(fileName);
        }

    }
}

export default new contactUs();