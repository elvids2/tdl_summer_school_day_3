import BasePage from '../pageObjects/basePage'

class CreateAddressPage extends BasePage {
  static get url () {
    return '/#/address/create';
  }

  static get countryField(){
    return cy.get('[id="mat-input-1"]');
  }
  static get nameField(){
    return cy.get('[id="mat-input-2"]');
  }
  static get mobileField(){
    return cy.get('[id="mat-input-3"]');
  }
  static get zipField(){
    return cy.get('[id="mat-input-4"]');
  }
  static get addressField(){
    return cy.get('[id="address"]');
  }
  static get cityField(){
    return cy.get('[id="mat-input-6"]');
  }
  static get stateField(){
    return cy.get('[id="mat-input-7"]');
  }
  static get submitAddress(){
    return cy.get('[type="submit"]');
  }
  


  

    
}

export default CreateAddressPage;


