import BasePage from "../pageObjects/basePage";

class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }
  static get searchButton() {
    return cy.get('[id="searchQuery"]');
  }
  static get searchInput() {
    return cy.get('[id="mat-input-0"]');
  }
  static get lemon() {
    return cy.get('[class="mat-tooltip-trigger product"]');
  }
  static get validateLemon() {
    return cy.get('[class="container mat-typography"]');
  }
  static get findItem(){
    return cy.get('[class="mat-grid-list"]');
  }
  static get escape(){
    return cy.get('[class="container mat-typography"]');
  }
  static get expandReview(){
    return cy.get('[class="mat-expansion-indicator ng-tns-c150-14 ng-trigger ng-trigger-indicatorRotate ng-star-inserted"]');
  }
  static get validateReview(){
    return cy.get('[class="mat-tooltip-trigger review-text"]');
  }
  static get writeReview(){
    return cy.get('[id="mat-input-1"]');
  }
  static get submitReview(){
    return cy.get('[id="submitButton"]');
  }
  static get defaultAmount(){
    return cy.get('[class="mat-paginator-page-size ng-star-inserted"]');
  }
  static get expandDefaultAmount(){
    return cy.get('[id="mat-select-value-1"]');
  }
  static get amount(){
    return cy.get('[class="mat-option-text"]');
  }
  static get addToBasket(){
    return cy.get('[class="mat-focus-indicator btn-basket mat-button mat-raised-button mat-button-base mat-primary ng-star-inserted"]');
  }
  static get basketButton(){
    return cy.get('[class="mat-focus-indicator buttons mat-button mat-button-base ng-star-inserted"]');
  }
  static get accountButton(){
    return cy.get('[id="navbarAccount"]');
  }
  static get checkAccount(){
    return cy.get('[id="mat-menu-panel-0"]');
  }
  static get savedAdresses(){
    return cy.get('[class="mat-focus-indicator mat-menu-item ng-tns-c248-5 ng-star-inserted"]')
  }
  
  
  

  

  
  

  
  
  
  
}

export default HomePage;
