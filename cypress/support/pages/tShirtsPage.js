class tShirtsPage{

    constructor(){

        this.clickCheckbox = (element) => {
            cy.get(element).check();
        }

        this.isCheckboxChecked = (element, checkedOrNot) => {
            cy.get(element).should(checkedOrNot);
        }


    }

}

export default new tShirtsPage();