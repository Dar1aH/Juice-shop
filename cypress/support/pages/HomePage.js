import BasePage from "./BasePage";

class homePage extends BasePage{

constructor(){
    super();
    this.elements.welcomeBannerDismissButton = '[aria-label="Close Welcome Banner"]';     
}
visit(){
    cy.log('Opening home page...')
    cy.visit('/');
}
getwelcomeBannerDismissButton(){
    return cy.get(this.elements.welcomeBannerDismissButton)
}
}
export default new homePage();