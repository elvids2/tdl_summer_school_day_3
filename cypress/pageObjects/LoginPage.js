import BasePage from '../pageObjects/basePage'

class LoginPage extends BasePage {
  static get url () {
    return '/#/login';
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
  static get emailBar(){
    return cy.get('[id="email"]');
  }
  static get passBar(){
    return cy.get('[id="password"]');
  }
  static get login1Button(){
    return cy.get('[class="mat-focus-indicator mat-raised-button mat-button-base mat-primary"]');
  }
  static get accountButton(){
    return cy.get('[id="navbarAccount"]');
  }
  static get checkAccount(){
    return cy.get('[id="mat-menu-panel-0"]');
  }
  

  

  

  


  


 

  
}

export default LoginPage;
