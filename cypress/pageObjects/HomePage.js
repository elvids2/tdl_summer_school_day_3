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
  
  
  
  
}

export default HomePage;
