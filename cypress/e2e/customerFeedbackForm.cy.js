/// <reference types="cypress"/>
import HomePage from "../support/pages/HomePage";
import CustomerFeedbackPage from "../support/pages/CustomerFeedbackPage";

it('Customer Feedback Form', ()=>{

  HomePage.visit();
  HomePage.getwelcomeBannerDismissButton().click();

  CustomerFeedbackPage.getsideMenuButton().click();
  CustomerFeedbackPage.getcustomerFeedbackButton().click();
  CustomerFeedbackPage.getcustomerCommentTextArea().type('Nice products. Awesome selection.Thanks a lot!')
  CustomerFeedbackPage.getratingSlider().type('{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}');

  CustomerFeedbackPage.getcaptcha().invoke('text').then((captchaText) => {
    const result = eval(captchaText);
    CustomerFeedbackPage.getcaptchaResult().type(result); 

    CustomerFeedbackPage.getcustomerFeedbackSubmitButton().click()

    cy.contains("Thank you so much for your amazing 5-star feedback!")
  });
})