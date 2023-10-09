import locators  from '../locators/locators.json';

class testPage{

    constructor(){

        this.enterDataInTextField = (data) => {
            cy.get(locators.todoTextField).type(data).type('{enter}');
        }

        this.toggleTheDataAdded = (numberOfRecords) => {
            for(var i=1; i<=numberOfRecords;i++){
            cy.get("li:nth-child("+i+") > .view > .toggle").click();
            }
        }

        // this.addRecordByPressingEnterKey = () => {
        //     cy.
        // }



    }


}

export default new testPage();