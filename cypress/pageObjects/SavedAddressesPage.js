import BasePage from "../pageObjects/basePage";

class SavedAddressPage extends BasePage {
  static get url() {
    return "/#/address/saved";
  }

  static get createAdress() {
    return cy.get('[class="mat-focus-indicator btn btn-new-address mat-button mat-raised-button mat-button-base mat-primary"]');
  }
   
  static get validateAdress() {
    return cy.get('[class="mat-cell cdk-cell cdk-column-Address mat-column-Address ng-star-inserted"]');
  }
  
  

  

}

export default SavedAddressPage;