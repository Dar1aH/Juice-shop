/// <reference types="cypress"/>
import { login } from '../support/helper'
import { faker } from "@faker-js/faker";
import user from '../fixtures/user.json';
import shopper from '../fixtures/shopper.json'
import OrderProduct from '../support/pages/OrderProduct';
import { FillAddNewAddressForm } from '../support/helper'
import { FillAddNewCardFields } from '../support/helper';

it('Order a product', ()=>{
   
    user.Email = faker.internet.email({ provider: 'fakeMail.com'});
    user.Password = faker.internet.password();
    user.Answer = faker.person.lastName();
    shopper.Country = faker.location.country();
    shopper.Name = faker.person.fullName();
    shopper.Address = faker.location.streetAddress();
    shopper.City = faker.location.city();
    shopper.State = faker.location.state();

    cy.log('Register and Login to user account');
    login(user);

    cy.log('Add a product to the basket');

    OrderProduct.getAddItemToBasketButton().click();
    OrderProduct.getYourBasketButton().click();
    cy.contains(' Banana Juice (1000ml) ');
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
    
    OrderProduct.getAddNewCardDropDown().click();
    FillAddNewCardFields(shopper);
     
    cy.log('Review and Complete the order');

    OrderProduct.getReviewOrderButton().click()
    OrderProduct.getCompleteOrderButton().click();

    cy.contains('Thank you for your purchase!');
    
})
