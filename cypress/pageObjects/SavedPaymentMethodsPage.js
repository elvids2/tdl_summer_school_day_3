import BasePage from "../pageObjects/basePage";

class SavedPaymentMethodsPage extends BasePage {
  static get url() {
    return "/#/saved-payment-methods";
  }

  static get addNewCard() {
    return cy.get('[id="mat-expansion-panel-header-0"]');
  }
   
  static get payName() {
    return cy.get('[id="mat-input-1"]');
  }
  static get payCardNumber() {
    return cy.get('[id="mat-input-2"]');
  }
  static get payMonth() {
    return cy.get('[id="mat-input-3"]');
  }
  static get payYear() {
    return cy.get('[id="mat-input-4"]');
  }
  static get submit() {
    return cy.get('[id="submitButton"]');
  }
  static get validatePay() {
    return cy.get('[class="mat-table cdk-table"');
  }
  

  
  

  

}

export default SavedPaymentMethodsPage;