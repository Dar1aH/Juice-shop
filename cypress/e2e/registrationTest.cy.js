/// <reference types="cypress"/>
import { faker } from "@faker-js/faker";
import user from '../fixtures/user.json';
import HomePage from "../support/pages/HomePage";

user.Email = faker.internet.email({ provider: 'fakeMail.com'});
user.Answer = faker.person.fullName();

describe('Successful registration', () => {

  it.only('Registration', () => {
    HomePage.visit();
    HomePage.getwelcomeBannerDismissButton().click();
    HomePage.getheaderAccountButton().click();
    HomePage.getnavBarLoginButton().click();
  
    cy.contains('Not yet a customer?');
 
    cy.get('#newCustomerLink').click();
    cy.get('#emailControl').type(user.Email);
    cy.get('#passwordControl').type(user.Password);
    cy.get('#repeatPasswordControl').type(user.Password);
    cy.get('.mat-slide-toggle-label').should('contain', 'Show password advice');
    cy.get('.mat-slide-toggle-thumb').click();
    cy.get('.mat-card-content').should('contain', 'contains at least one lower character',
                                                  'contains at least one upper character', 
                                                  'contains at least one digit',
                                                  'contains at least one special character',
                                                  'contains at least 8 characters');
  cy.get('mat-select[name="securityQuestion"]').click();
  cy.get('mat-option#mat-option-10').click()
  cy.get('#securityAnswerControl').type(user.Answer);
  cy.get('#registerButton').click();

  })

it.skip('Authorization', ()=>{
  cy.log('Open website login page');
  cy.visit('#/login');
  cy.get('button.mat-focus-indicator:contains("Help getting started")').click();

  cy.get('#email').type(user.Email);
  cy.get('#password').type(user.Password);
  cy.get('.primary-link.forgot-pw')
  .should(($link) => {
    expect($link).to.have.attr('href', '#/forgot-password');
  });

 cy.get('[type="checkbox"]#rememberMe-input').should('not.be.checked');
 cy.get('#loginButton').click()
})
})
