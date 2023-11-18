import BasePage from "./BasePage";

class LoginPage extends BasePage{
 constructor(){
    super();
    this.elements.emailField = '#email';
    this.elements.passwordField = '#password';
    this.elements.forgotPasswordText = '.primary-link.forgot-pw';
    this.elements.rememberMeCheckbox = '[type="checkbox"]#rememberMe-input';
    this.elements.loginButton = '#loginButton';
 }
getemailField(){
    return cy.get(this.elements.emailField)
}
getpasswordField(){
    return cy.get(this.elements.passwordField )
}
getforgotPasswordText(){
    return cy.get(this.elements.forgotPasswordText)
}
getrememberMeCheckbox(){
    return cy.get(this.elements.rememberMeCheckbox )
}
getloginButton(){
    return cy.get(this.elements.loginButton)
}

fillLoginFields(user){
    cy.log('Fill in authorization fields')
    this.getemailField().type(user.Email);
    this.getpasswordField().type(user.Password);
}
}
export default new LoginPage();