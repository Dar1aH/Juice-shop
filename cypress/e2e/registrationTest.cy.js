/// <reference types="cypress"/>
import { faker } from "@faker-js/faker";
import user from '../fixtures/user.json';
import HomePage from "../support/pages/HomePage";
import RegistrationPage from "../support/pages/RegistrationPage";
import LoginPage from "../support/pages/LoginPage";


user.Email = faker.internet.email({ provider: 'fakeMail.com'});
user.Answer = faker.person.fullName();

describe('Successful registration', () => {

  it('Registration', () => {
    cy.log('Open website login page');

    HomePage.visit();
    HomePage.getwelcomeBannerDismissButton().click();
    HomePage.getheaderAccountButton().click();
    HomePage.getnavBarLoginButton().click();

    cy.log('Register a new customer');

    cy.contains('Not yet a customer?');
    RegistrationPage.getnewCustomerButton().click();

    cy.log('Fill in registration fields');

    RegistrationPage.fillRegistrationFields(user);
    
    cy.log('Verify password advice content and pass the security check');

    RegistrationPage.getslideToggleLabel().should('contain', 'Show password advice');
    RegistrationPage.getslideToggleButton().click();
    RegistrationPage.getpasswordAdviceText()
                    .should('contain', 'contains at least one lower character',
                                       'contains at least one upper character', 
                                       'contains at least one digit',
                                       'contains at least one special character',
                                       'contains at least 8 characters');
  RegistrationPage.getsecurityQuestionDropDown().click();
  RegistrationPage.getsecurityQuestionText().click()
  RegistrationPage.getsecurityAnswerField().type(user.Answer);
  RegistrationPage.getregisterNewUserButton().click();

  })

it('Authorization', ()=>{

  cy.log('Open website login page');

  HomePage.visit();
  HomePage.getwelcomeBannerDismissButton().click();
  HomePage.getheaderAccountButton().click();
  HomePage.getnavBarLoginButton().click();

  cy.log('Login with valid credentials');
  LoginPage.fillLoginFields(user);

  LoginPage.getforgotPasswordText()
  .should(($link) => {
    expect($link).to.have.attr('href', '#/forgot-password');
  });

 LoginPage.getrememberMeCheckbox().should('not.be.checked');
 LoginPage.getloginButton().click()
})
})
