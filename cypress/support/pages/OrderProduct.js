import BasePage from "./BasePage";

class OrderProduct extends BasePage{
    constructor(){
        super();
    this.elements.AddItemToBasketButton = '[aria-label="Add to Basket"]:eq(2)';
    this.elements.YourBasketButton = '[aria-label="Show the shopping cart"]';
    this.elements.CheckoutButton = '#checkoutButton';


    this.elements.AddNewAddressButton = '[aria-label="Add a new address"]';
    this.elements.SelectAddressRadioButton = '#mat-radio-40'; 
    this.elements.ContinueToPaymentButton = '[aria-label="Proceed to payment selection"]'; 
    this.elements.DeliverySpeedRadioOption1 = '#mat-radio-41';
    this.elements.DeliverySpeedRadioOption2 = '#mat-radio-42';
    this.elements.DeliverySpeedRadioOption3 = '#mat-radio-43';
    this.elements.DeliverySectionButton = '[aria-label="Proceed to delivery method selection"]';
    this.elements.AddNewCardDropDown = '#mat-expansion-panel-header-1';
    this.elements.ReviewOrderButton = '[aria-label="Proceed to review"]';
    this.elements.CompleteOrderButton = '[aria-label="Complete your purchase"]';

    this.elements.SearchKeywordsField = 'mat-search-bar:eq(0)';
    this.elements.ProductReviewCloseButton = '[aria-label="Close Dialog"]';
    this.elements.AddItemToBasketButtonStrwJuice = 'button[aria-label="Add to Basket"]:eq(9)'
    }
    getAddItemToBasketButton(){
        return cy.get(this.elements.AddItemToBasketButton)
    }
    getYourBasketButton(){
        return cy.get(this.elements.YourBasketButton)
    }
    getCheckoutButton(){
        return cy.get(this.elements.CheckoutButton)
    }
    getAddNewAddressButton(){
        return cy.get(this.elements.AddNewAddressButton)
    }
    getSelectAddressRadioButton(){
        return cy.get(this.elements.SelectAddressRadioButton)
    }
    getContinueToPaymentButton(){
        return cy.get(this.elements.ContinueToPaymentButton)
    }
    getDeliverySpeedRadioOption1(){
        return cy.get(this.elements.DeliverySpeedRadioOption1)
    }
    getDeliverySpeedRadioOption2(){
        return cy.get(this.elements.DeliverySpeedRadioOption2)
    }
    getDeliverySpeedRadioOption3(){
        return cy.get(this.elements.DeliverySpeedRadioOption3)
    }
    getDeliverySectionButton(){
        return cy.get(this.elements.DeliverySectionButton)
    }
    getAddNewCardDropDown(){
        return cy.get(this.elements.AddNewCardDropDown )
    }
    getReviewOrderButton(){
        return cy.get(this.elements.ReviewOrderButton)
    }
    getCompleteOrderButton(){
        return cy.get(this.elements.CompleteOrderButton)
    }
    getSearchKeywordsField(){
        return cy.get(this.elements.SearchKeywordsField)
    }
    getProductReviewCloseButton(){
        return cy.get(this.elements.ProductReviewCloseButton)
    }
    getAddItemToBasketButtonStrwJuice(){
        return cy.get(this.elements.AddItemToBasketButtonStrwJuice)
    }
}
export default new OrderProduct();