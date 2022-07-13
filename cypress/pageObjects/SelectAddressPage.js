import BasePage from "../pageObjects/basePage";

class SelectAddressPage extends BasePage {
  static get url() {
    return "/#/address/select";
  }

  static get clickUK() {
    return cy.get('[class="mat-cell cdk-cell cdk-column-Country mat-column-Country ng-star-inserted"]');
  }
  static get clickContinue() {
    return cy.get('[class="mat-focus-indicator btn btn-next mat-button mat-raised-button mat-button-base mat-primary ng-star-inserted"]');
  }

  

}

export default SelectAddressPage;