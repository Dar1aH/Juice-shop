import BasePage from "./BasePage";

class ErrorMessages extends BasePage{
    constructor(){
        super();
        this.elements.EmailErrorMessage = '#mat-error-7';
        this.elements.PasswordErrorMessage = '#mat-error-8';
        this.elements.PasswordRepeatErrorMessage = '#mat-error-9';
        this.elements.LoginPageErrorMessage = '.error.ng-star-inserted';
    }
  getEmailErrorMessage(){
    return cy.get(this.elements.EmailErrorMessage)
  }
  getPasswordErrorMessage(){
    return cy.get(this.elements.PasswordErrorMessage)
  }
  getPasswordRepeatErrorMessage(){
    return cy.get(this.elements.PasswordRepeatErrorMessage)
  }
  getLoginPageErrorMessage(){
    return cy.get(this.elements.LoginPageErrorMessage)
  }
}
export default new ErrorMessages();
