/// <reference types="cypress"/>
import HomePage from "../support/pages/HomePage";
import RegistrationPage from "../support/pages/RegistrationPage";
import user1 from '../fixtures/user.json';
import { faker } from "@faker-js/faker";
import LoginPage from "../support/pages/LoginPage";
import ErrorMessages from "../support/pages/ErrorMessages"

user1.Email = faker.person.firstName();
user1.Password = faker.number.int(10);
user1.Password1 = faker.number.int(8);
user1.Answer = faker.person.fullName();

describe('Unsuccessful registration', ()=>{
     beforeEach('Access the page', ()=>{
        HomePage.visit();
        HomePage.getwelcomeBannerDismissButton().click();
        HomePage.getheaderAccountButton().click();
        HomePage.getnavBarLoginButton().click();
     })
    it('Register with invalid credentials and check the error messages', ()=>{

    cy.contains('Not yet a customer?');

    RegistrationPage.getnewCustomerButton().click();
    RegistrationPage.fillRegistrationFieldsInvalid(user1);
    
    cy.log('Check error messages for Email and Password Fields');

    ErrorMessages.getEmailErrorMessage().should('exist').then(($element) => {
        cy.wrap($element).should('have.css', 'color').and('eq', 'rgb(255, 87, 34)'); 
        cy.wrap($element).should('have.text', 'Email address is not valid.'); 
      });

      ErrorMessages.getPasswordErrorMessage().should('exist').then(($element) => {
        cy.wrap($element).should('have.css', 'color').and('eq', 'rgb(255, 87, 34)'); 
        cy.wrap($element).should('have.text', 'Password must be 5-40 characters long. '); 
      });

    RegistrationPage.getsecurityQuestionDropDown().click();
    RegistrationPage.getsecurityQuestionText().click()
    RegistrationPage.getsecurityAnswerField().type(user1.Answer);
    
    cy.log('Check error message for Password Repeat Field');

    ErrorMessages.getPasswordRepeatErrorMessage().should('exist').then(($element) => {
        cy.wrap($element).should('have.css', 'color').and('eq', 'rgb(255, 87, 34)'); 
        cy.wrap($element).should('have.text', ' Passwords do not match '); 
      });

    RegistrationPage.getregisterNewUserButton().should('be.disabled'); 
    })

    it('Login with invalid credentials and check the error messages', ()=>{

    cy.log('Fill the fields with invalid credentials');   
    LoginPage.fillLoginFieldsInvalid(user1);

    LoginPage.getloginButton().click();
    
    cy.log('Check the error message');

    ErrorMessages.getLoginPageErrorMessage().should('exist').then(($element) => {
        cy.wrap($element).should('have.css', 'color').and('eq', 'rgb(255, 87, 34)'); 
        cy.wrap($element).should('have.text', 'Invalid email or password.'); 
      });
    })
} )