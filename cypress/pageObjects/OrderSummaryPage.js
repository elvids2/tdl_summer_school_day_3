import BasePage from '../pageObjects/basePage'

class OrderSummaryPage extends BasePage {
  static get url () {
    return '/#/payment/shop';
  }

  static get placeOrder(){
    return cy.get('[id="checkoutButton"]');
  }

      
}

export default OrderSummaryPage;