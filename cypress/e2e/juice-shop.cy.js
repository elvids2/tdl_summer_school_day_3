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
  
  it.only("Search 500ml and validate cards", () => {
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

  // Create scenario - Search 500ml and validate cards
  // Click on search icon
  // Search for 500ml
  // Select a product card - Eggfruit Juice (500ml)
  // Validate that the card (should) contains "Now with even more exotic flavour."
  // Close the card
  // Select a product card - Lemon Juice (500ml)
  // Validate that the card (should) contains "Sour but full of vitamins."
  // Close the card
  // Select a product card - Strawberry Juice (500ml)
  // Validate that the card (should) contains "Sweet & tasty!"

  // Create scenario - Read a review
  // Click on search icon
  // Search for King
  // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
  // Click expand reviews button/icon (wait for reviews to appear)
  // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!

  // Create scenario - Add a review
  // Click on search icon
  // Search for Raspberry
  // Select a product card - Raspberry Juice (1000ml)
  // Type in review - "Tastes like metal"
  // Click Submit
  // Click expand reviews button/icon (wait for reviews to appear)
  // Validate review -  "Tastes like metal"

  // Create scenario - Validate product card amount
  // Validate that the default amount of cards is 12
  // Change items per page (at the bottom of page) to 24
  // Validate that the amount of cards is 24
  // Change items per page (at the bottom of page) to 36
  // Validate that the amount of cards is 35

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
