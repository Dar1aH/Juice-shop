export default class BasePage{

    constructor(){
        this.elements = {};
        this.elements.headerAccountButton = '#navbarAccount';
        this.elements.navBarLoginButton = '#navbarLoginButton';
    }
    getheaderAccountButton(){
        return cy.get(this.elements.headerAccountButton);
    }
    getnavBarLoginButton(){
        return cy.get(this.elements.navBarLoginButton);
    }
}