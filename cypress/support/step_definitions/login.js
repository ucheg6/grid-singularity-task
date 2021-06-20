const { Given, When, Then } = require("cypress-cucumber-preprocessor/steps");
const LoginPage = require('../../integration/pages/login.page');

const loginPage = new LoginPage();

  Given("I am on the login page as a precreated user", () => {
    loginPage.visitLogin();
  })

  When("I log in with my email and password credentials", () => {
    loginPage.login()
  })

  Then("I should see the Home page", () => {
    loginPage.getHomePage()
  })