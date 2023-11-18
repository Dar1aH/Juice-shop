import BasePage from "./BasePage";

class RegistrationPage extends BasePage{

    constructor(){
        super();
        this.elements.newCustomerButton = '#newCustomerLink';
        this.elements.emailField = '#emailControl';
        this.elements.passwordField = '#passwordControl';
        this.elements.repeatPasswordField = '#repeatPasswordControl';
        this.elements.slideToggleLabel = '.mat-slide-toggle-label';
        this.elements.slideToggleButton = '.mat-slide-toggle-thumb';
        this.elements.passwordAdviceText = '.mat-card-content';
        this.elements.securityQuestionDropDown = 'mat-select[name="securityQuestion"]';
        this.elements.securityQuestionText = 'mat-option#mat-option-10';
        this.elements.securityAnswerField = '#securityAnswerControl';
        this.elements.registerNewUserButton = '#registerButton'

    }
    getnewCustomerButton(){
        return cy.get(this.elements.newCustomerButton)
    }
    getemailField(){
        return cy.get(this.elements.emailField)
    }
    getpasswordField(){
        return cy.get(this.elements.passwordField)
    }
    getrepeatPasswordField(){
        return cy.get(this.elements.repeatPasswordField)
    }
    getslideToggleLabel(){
        return cy.get(this.elements.slideToggleLabel)
    }
    getslideToggleButton(){
        return cy.get(this.elements.slideToggleButton)
    }
    getpasswordAdviceText(){
        return cy.get(this.elements.passwordAdviceText)
    }
    getsecurityQuestionDropDown(){
        return cy.get(this.elements.securityQuestionDropDown)
    }
    getsecurityQuestionText(){
        return cy.get(this.elements.securityQuestionText)
    }
    getsecurityAnswerField(){
        return cy.get(this.elements.securityAnswerField)
    }
    getregisterNewUserButton(){
        return cy.get(this.elements.registerNewUserButton)
    }
    
  fillRegistrationFields(user){
    this.getemailField().type(user.Email);
    this.getpasswordField().type(user.Password);
    this.getrepeatPasswordField().type(user.Password);
  }  
}
export default new RegistrationPage();