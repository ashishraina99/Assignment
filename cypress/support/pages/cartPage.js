import locators from '../locators/locators.json';

class cart{
    constructor(){

        this.calculateTotalPrice = (numberOfItems) => {
            for(var i=1;i<=numberOfItems;i++){
            cy.get('table > tbody > tr:nth-child('+i+') > td:nth-child(6) > span').should(($div) => {
                var text = $div.text()
                var sum=0;
                sum = sum + text.substring(1);
                console.log("summ "+sum);
              })
            }
        }
    }
}

export default new cart();