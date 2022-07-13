import HomePage from "../pageObjects/HomePage";
import LoginPage from "../pageObjects/LoginPage";
import RegistrationPage from "../pageObjects/RegistrationPage";
import BasketPage from "../pageObjects/BasketPage";
import SelectAddressesPage from "../pageObjects/SelectAddressPage";
import DeliveryMethodPage from "../pageObjects/DeliveryMethodPage";
import PaymentOptionsPage from "../pageObjects/PaymentOptionsPage";
import OrderSummaryPage from "../pageObjects/OrderSummaryPage";
import OrderCompletePage from "../pageObjects/OrderCompletePage";
import SavedAddressesPage from "../pageObjects/SavedAddressesPage";
import CreateAddressPage from "../pageObjects/CreateAddressPage";
import SavedPaymentMethodsPage from "../pageObjects/SavedPaymentMethodsPage";

describe("Juice-shop without auto login", () => {
  beforeEach(() => {
    HomePage.visit();
    HomePage.dismissButton.click();
    HomePage.meWantItButton.click();
  });

  it("Login", () => {
    HomePage.accountButton.click();
    LoginPage.loginButton.click();
    LoginPage.emailBar.type('demo');
    LoginPage.passBar.type('demo');
    LoginPage.login1Button.click();
    HomePage.accountButton.click();
    HomePage.checkAccount.contains('demo').should('contain','demo');
  });
  function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let value5 = generateRandomIntegerInRange(1000, 9999);
let email =('email_'+value5+'@ebox.com')
let pass=12345;
  it("Registration", () => {
    HomePage.accountButton.click();
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
    HomePage.accountButton.click();
    HomePage.checkAccount.contains(email).should('contain',email);
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
  it("Validate product card amount", () => {
    HomePage.defaultAmount.should('contain', '12');
    HomePage.expandDefaultAmount.click();
    HomePage.amount.contains("24").click();
    HomePage.defaultAmount.should('contain', '24');
    HomePage.expandDefaultAmount.click();
    HomePage.amount.contains("36").click();
    HomePage.defaultAmount.should('contain', '36');
    
  });
  
  it("Buy Girlie T-shirt", () => {
    HomePage.searchButton.click();
    HomePage.searchInput.type('Girlie{enter}');
    HomePage.addToBasket.click();
    HomePage.basketButton.click();
    BasketPage.checkoutButton.click();
    SelectAddressesPage.clickUK.click();
    SelectAddressesPage.clickContinue.click();
    DeliveryMethodPage.deliveryChoice.contains('Standard Delivery').click();
    DeliveryMethodPage.continue.contains('Continue').click();
    PaymentOptionsPage.clickRadio.click();
    PaymentOptionsPage.continuePay.contains('Continue').click();
    OrderSummaryPage.placeOrder.click();
    OrderCompletePage.purchaseValidation.should('contain', 'Thank you for your purchase!');
    
  });
  it("Add address", () => {
    HomePage.accountButton.click();
    HomePage.checkAccount.contains('Orders & Payment').click();
    HomePage.savedAdresses.contains('My saved addresses').click();
    SavedAddressesPage.createAdress.click();
    CreateAddressPage.countryField.type('Afrika');
    CreateAddressPage.nameField.type('Bob');
    CreateAddressPage.mobileField.type('2734012')
    CreateAddressPage.zipField.type('LV-3130');
    CreateAddressPage.addressField.type('Jungle street 5');
    CreateAddressPage.cityField.type('Paris');
    CreateAddressPage.stateField.type('Washington');
    CreateAddressPage.submitAddress.click();
    SavedAddressesPage.validateAdress.should('contain', 'Jungle street 5, Paris, Washington, LV-3130')
  });
  it.only("Add payment option", () => {
    HomePage.accountButton.click();
    HomePage.checkAccount.contains('Orders & Payment').click();
    HomePage.paymentOption.contains(' My Payment Options ').click();
    SavedPaymentMethodsPage.addNewCard.click();
    SavedPaymentMethodsPage.payName.type('Bob');
    SavedPaymentMethodsPage.payCardNumber.type('1234567890123456');
    SavedPaymentMethodsPage.payMonth.select(6);
    SavedPaymentMethodsPage.payYear.select(10);
    SavedPaymentMethodsPage.submit.click();
    SavedPaymentMethodsPage.validatePay.should('contain','Bob');
    SavedPaymentMethodsPage.validatePay.should('contain','************3456');
    SavedPaymentMethodsPage.validatePay.should('contain','7/2090');
    
  });
  

});
