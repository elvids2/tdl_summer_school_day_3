import BasePage from '../pageObjects/basePage'

class OrderCompletePage extends BasePage {
  static get url () {
    return '/#/order-completion/..';
  }

  static get purchaseValidation(){
    return cy.get('[class="confirmation"]');
  }



    
}

export default OrderCompletePage;