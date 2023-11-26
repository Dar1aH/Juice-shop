import BasePage from "./BasePage";

 class CustomerFeedbackPage extends BasePage{
    constructor(){
        super();
        this.elements.sideMenuButton = 'button[aria-label="Open Sidenav"]';
        this.elements.customerFeedbackButton = 'a[aria-label="Go to contact us page"]';
        this.elements.customerCommentTextArea = '#comment';
        this.elements.ratingSlider = '#rating';
        this.elements.captcha = '#captcha';
        this.elements.captchaResult = '#captchaControl';
        this.elements.customerFeedbackSubmitButton = '#submitButton';
    }
    getsideMenuButton(){
        return cy.get(this.elements.sideMenuButton)
    }
    getcustomerFeedbackButton(){
        return cy.get(this.elements.customerFeedbackButton)
    }
    getcustomerCommentTextArea(){
        return cy.get(this.elements.customerCommentTextArea)
    }
    getratingSlider(){
        return cy.get(this.elements.ratingSlider)
    }
    getcaptcha(){
        return cy.get(this.elements.captcha)
    }
    getcaptchaResult(){
        return cy.get(this.elements.captchaResult)
    }
    getcustomerFeedbackSubmitButton(){
        return cy.get(this.elements.customerFeedbackSubmitButton)
    }
 }
 export default new CustomerFeedbackPage();