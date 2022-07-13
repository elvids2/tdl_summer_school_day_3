import BasePage from '../pageObjects/basePage'

class PaymentOptionsPage extends BasePage {
  static get url () {
    return '/#/payment/shop';
  }

  static get clickRadio(){
    return cy.get('[class="mat-radio-button mat-accent"]');
  }
  static get continuePay(){
    return cy.get('[class="mat-focus-indicator btn nextButton mat-button mat-raised-button mat-button-base mat-primary"]');
  }


}

export default PaymentOptionsPage;