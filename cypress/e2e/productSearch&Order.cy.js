/// <reference types="cypress"/>
import { login } from '../support/helper'
import { faker } from "@faker-js/faker";
import user from '../fixtures/user.json';

it('Search for a product and place an order', ()=>{
    user.Email = faker.internet.email({ provider: 'fakeMail.com'});
    user.Password = faker.internet.password();
    user.Answer = faker.person.lastName();

    cy.log('Register and Login to user account');
    login(user);
})