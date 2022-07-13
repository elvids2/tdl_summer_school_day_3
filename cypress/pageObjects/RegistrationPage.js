import BasePage from '../pageObjects/basePage'

class RegistrationPage extends BasePage {
  static get url () {
    return '/#/register';
  }

  static get elementName(){
    return cy.get('elementSelector');
  }
  static get loginButton(){
    return cy.get('[id="navbarLoginButton"]');
  }
  static get accountButton(){
    return cy.get('[id="navbarAccount"]');
  }
  static get newAccount(){
    return cy.get('[id="newCustomerLink"]');
  }
  static get emailBar(){
    return cy.get('[id="emailControl"]');
  }
  static get passwordBar(){
    return cy.get('[id="passwordControl"]');
  }
  static get repeatPasswordBar(){
    return cy.get('[id="repeatPasswordControl"]');
  }
  static get securityBar(){
    return cy.get('[class="mat-form-field-infix ng-tns-c119-16"]');
  }
  static get securityBarSelect(){
    return cy.get('[class="mat-option-text"]');
  }
  static get securityAnswer(){
    return cy.get('[id="securityAnswerControl"]');
  }
  static get register(){
    return cy.get('[id="registerButton"]');
  }

  

  


  
  


  
}

export default RegistrationPage;
