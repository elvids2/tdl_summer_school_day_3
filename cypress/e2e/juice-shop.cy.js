import HomePage from "../pageObjects/HomePage";
import LoginPage from "../pageObjects/LoginPage";
import RegistrationPage from "../pageObjects/RegistrationPage";

describe("Juice-shop without auto login", () => {
  beforeEach(() => {
    HomePage.visit();
    HomePage.dismissButton.click();
    HomePage.meWantItButton.click();
  });

  it("Login", () => {
    LoginPage.accountButton.click();
    LoginPage.loginButton.click();
    LoginPage.emailBar.type('demo');
    LoginPage.passBar.type('demo');
    LoginPage.login1Button.click();
    LoginPage.accountButton.click();
    LoginPage.checkAccount.contains('demo').should('contain','demo');
  });
  function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let value5 = generateRandomIntegerInRange(1000, 9999);
let email =('email_'+value5+'@ebox.com')
let pass=12345;
  it("Registration", () => {
    RegistrationPage.accountButton.click();
    RegistrationPage.loginButton.click();
    RegistrationPage.newAccount.click();
    RegistrationPage.emailBar.type(email);
    RegistrationPage.passwordBar.type(pass);
    RegistrationPage.repeatPasswordBar.type(pass);
    RegistrationPage.securityBar.click();
    RegistrationPage.securityBarSelect.contains(' Name of your favorite pet? ').click();
    RegistrationPage.securityAnswer.type('Bob');
    RegistrationPage.register.click();
    LoginPage.emailBar.type(email);
    LoginPage.passBar.type(pass);
    LoginPage.login1Button.click();
    LoginPage.accountButton.click();
    LoginPage.checkAccount.contains(email).should('contain',email);
  });
});

describe("Juice-shop with Auto login", () => {
  beforeEach(() => {
   cy.login("demo", "demo");
    HomePage.visit();
  });

  it("Search and validate Lemon", () => {
    HomePage.searchButton.click();
    HomePage.searchInput.type('Lemon{enter}');
    HomePage.lemon.click();
    HomePage.validateLemon.should('contain','Sour but full of vitamins.');
  });
  
  it("Search 500ml and validate Lemon", () => {
    HomePage.searchButton.click();
    HomePage.searchInput.type('500ml{enter}');
    HomePage.findItem.contains('Lemon Juice (500ml)').click();
    HomePage.validateLemon.should('contain','Sour but full of vitamins.');
  });
  
  it("Search 500ml and validate cards", () => {
    HomePage.searchButton.click();
    HomePage.searchInput.type('500ml{enter}');
    HomePage.findItem.contains('Eggfruit Juice (500ml)').click();
    HomePage.validateLemon.should('contain','Now with even more exotic flavour.');
    HomePage.escape.type('{esc}');
    HomePage.findItem.contains('Lemon Juice (500ml)').click();
    HomePage.validateLemon.should('contain','Sour but full of vitamins.');
    HomePage.escape.type('{esc}');
    HomePage.findItem.contains('Strawberry Juice (500ml)').click();
    HomePage.validateLemon.should('contain','Sweet & tasty!');
  });
  it("Read and review", () => {
    HomePage.searchButton.click();
    HomePage.searchInput.type('King{enter}');
    HomePage.findItem.contains('OWASP Juice Shop "King of the Hill" Facemask').click();
    HomePage.expandReview.click();
    HomePage.validateReview.should('contain', 'K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!');
  });
  it("Add and review", () => {
    HomePage.searchButton.click();
    HomePage.searchInput.type('Raspberry{enter}');
    HomePage.findItem.contains('Raspberry Juice (1000ml)').click();
    HomePage.writeReview.click().type('Tastes like metal');
    HomePage.submitReview.click();
    HomePage.expandReview.click();
    HomePage.validateReview.should('contain', 'Tastes like metal');
    
  });
  it.only("Validate product card amount", () => {
    HomePage.defaultAmount.should('contain', '12');
    HomePage.expandDefaultAmount.click();
    HomePage.amount.contains("24").click();
    HomePage.defaultAmount.should('contain', '24');
    HomePage.expandDefaultAmount.click();
    HomePage.amount.contains("36").click();
    HomePage.defaultAmount.should('contain', '36');
    
  });
  
  
  

  // Create scenario - Buy Girlie T-shirt
  // Click on search icon
  // Search for Girlie
  // Add to basket "Girlie"
  // Click on "Your Basket" button
  // Create page object - BasketPage
  // Click on "Checkout" button
  // Create page object - SelectAddressPage
  // Select address containing "United Fakedom"
  // Click Continue button
  // Create page object - DeliveryMethodPage
  // Select delivery speed Standard Delivery
  // Click Continue button
  // Create page object - PaymentOptionsPage
  // Select card that ends with "5678"
  // Click Continue button
  // Create page object - OrderSummaryPage
  // Click on "Place your order and pay"
  // Create page object - OrderCompletionPage
  // Validate confirmation - "Thank you for your purchase!"

  // Create scenario - Add address
  // Click on Account
  // Click on Orders & Payment
  // Click on My saved addresses
  // Create page object - SavedAddressesPage
  // Click on Add New Address
  // Create page object - CreateAddressPage
  // Fill in the necessary information
  // Click Submit button
  // Validate that previously added address is visible

  // Create scenario - Add payment option
  // Click on Account
  // Click on Orders & Payment
  // Click on My payment options
  // Create page object - SavedPaymentMethodsPage
  // Click Add new card
  // Fill in Name
  // Fill in Card Number
  // Set expiry month to 7
  // Set expiry year to 2090
  // Click Submit button
  // Validate that the card shows up in the list
});
