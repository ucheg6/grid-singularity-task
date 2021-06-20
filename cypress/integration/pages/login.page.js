export default class LoginPage {
    url = "https://www.d3a.io/login";
 
    // Create variables for element locators
    formElement = '.form__element';
    usernameInput = '[type="text"]';
    passwordInput = '[type="password"]';
    loginButton = '.button';
    email = 'akogwuuche@ymail.com';
    password= 'uchechukwu';
    HomePageHeader = '.header > .headline';
 
    // Create independent methods to do actions on elements
    visitLogin(){
        cy.visit(this.url);
        cy.title().should('eq', 'D3A')
    }
 
    login(){
        cy.get(this.formElement)
        .find(this.usernameInput).type(this.email)
  
        cy.get(this.formElement)
        .find(this.passwordInput).type('uchechukwu')
  
        cy.get(this.loginButton).click()
    }

    getHomePage(){
        cy.get(this.HomePageHeader).should('contain', 'Home')
    }

}
