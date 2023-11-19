export function login(user){
 cy.log('Open website login page')
 cy.visit('https://juice-shop-sanitarskyi.herokuapp.com');
 cy.get('[aria-label="Close Welcome Banner"]').click();
 cy.get('#navbarAccount').click();
 cy.get('#navbarLoginButton').click();
 cy.get('#newCustomerLink').click();
 cy.get('#emailControl').type(user.Email);
 cy.get('#passwordControl').type(user.Password);
 cy.get('#repeatPasswordControl').type(user.Password);
 cy.get('[name="securityQuestion"]').click();
 cy.get('#mat-option-4').click();
 cy.get('#securityAnswerControl').type(user.Answer);
 cy.get('#registerButton').click();
 cy.get('#email').type(user.Email);
 cy.get('#password').type(user.Password);
 cy.get('#loginButton').click();
}

export function FillAddNewAddressForm(shopper){
    cy.get('[data-placeholder="Please provide a country."]').type(shopper.Country);
    cy.get('[placeholder="Please provide a name."]').type(shopper.Name);
    cy.get('[data-placeholder="Please provide a mobile number."]').type(shopper.Phone);
    cy.get('[placeholder="Please provide a ZIP code."]').type(shopper.ZipCode);
    cy.get('#address').type(shopper.Address);
    cy.get('[placeholder="Please provide a city."]').type(shopper.City);
    cy.get('#mat-input-15').type(shopper.State);
    cy.get('#submitButton').click();  
}

export function FillAddNewCardFields(shopper){
    cy.get('#mat-input-17').type(shopper.Name);
    cy.get('#mat-input-18').type(shopper.CardNumber);
    cy.get('#mat-input-19').select('5').should('have.value', '5');
    cy.get('#mat-input-20').select('2082').should('have.value', '2082');
    cy.get('#submitButton').click();
    cy.get('#mat-radio-44').click();
}

export function findProduct(productName){
    cy.get('body').then(body =>{
        if (body.find(`.item-name:contains("${productName}")`).length > 0){
            cy.get(`.item-name:contains("${productName}")`).click();
        } else{
            cy.get('div.mat-paginator-range-actions [aria-label="Next page"]').click({ force: true });
            findProduct(productName);
    }
    
});
}