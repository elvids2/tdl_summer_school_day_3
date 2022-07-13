import BasePage from '../pageObjects/basePage'

class DeliveryMethodPage extends BasePage {
  static get url () {
    return '/#/delivery-method';
  }

  static get deliveryChoice(){
    return cy.get('[class="mat-row cdk-row ng-star-inserted"]');
  }
  static get continue(){
    return cy.get('[class="mat-focus-indicator btn nextButton mat-button mat-raised-button mat-button-base mat-primary"]');
  }
  

  

    
}

export default DeliveryMethodPage;