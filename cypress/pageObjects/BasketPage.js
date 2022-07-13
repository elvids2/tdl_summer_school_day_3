import BasePage from '../pageObjects/basePage'

class BasketPage extends BasePage {
  static get url () {
    return '/#/basket';
  }

  static get checkoutButton(){
    return cy.get('[class="mat-focus-indicator checkout-button mat-raised-button mat-button-base mat-primary"]');
  }

  

    
}

export default BasketPage;