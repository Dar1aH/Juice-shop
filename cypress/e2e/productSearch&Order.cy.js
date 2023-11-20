/// <reference types="cypress"/>

import { login } from '../support/helper'
import { faker } from "@faker-js/faker";
import user from '../fixtures/user.json';
import { findProduct } from '../support/helper';
import OrderProduct from '../support/pages/OrderProduct';
import orderData from '../fixtures/order.json'
import shopper from '../fixtures/shopper.json'
import { FillAddNewAddressForm } from '../support/helper'
import {  MyPaymentOptionsForm } from '../support/helper';


it('Search for a product and place an order', ()=>{

    user.Email = faker.internet.email({ provider: 'fakeMail.com'});
    user.Password = faker.internet.password();
    user.Answer = faker.person.lastName();

    cy.log('Register and Login to user account');
    login(user);
    
    cy.contains('All Products');

   OrderProduct.getSearchKeywordsField().type('s').children('mat-form-field')
                                        .type('{enter}');
    cy.contains('Search Results - ');                             

    findProduct(orderData.productName) //Strawberry Juice
     
    cy.contains('Strawberry Juice (500ml)');
    OrderProduct.getProductReviewCloseButton().click();
    OrderProduct.getAddItemToBasketButtonStrwJuice().click();
    OrderProduct.getYourBasketButton().click();

    cy.log('Strawberry Juice is in the basket');
    OrderProduct.getCheckoutButton().click();

    cy.log('Fill Add New Address Form')

    OrderProduct.getAddNewAddressButton().click();
    FillAddNewAddressForm(shopper);


    OrderProduct.getSelectAddressRadioButton().click();
    OrderProduct.getContinueToPaymentButton().click();

    cy.contains('Choose a delivery speed');
    OrderProduct.getDeliverySpeedRadioOption1().click();
    OrderProduct.getDeliverySpeedRadioOption2().should('not.be.checked');
    OrderProduct.getDeliverySpeedRadioOption3().should('not.be.checked');
    OrderProduct.getDeliverySectionButton().click();
    
    cy.contains('My Payment Options');

    cy.log('Add a credit or debit card');
    MyPaymentOptionsForm(shopper);
     
    cy.log('Review and Complete the order');

    OrderProduct.getReviewOrderButton().click()
    OrderProduct.getCompleteOrderButton().click();

    cy.contains('Thank you for your purchase!');
    
})