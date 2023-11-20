/// <reference types="cypress"/>

it('Customer Feedback Form', ()=>{
  cy.visit('/'); 
  cy.get('button[aria-label="Close Welcome Banner"]').click();
  cy.get('button[aria-label="Open Sidenav"]').click();
  cy.get('a[aria-label="Go to contact us page"]').click();
  cy.get('#comment').type('Nice products. Awesome selection.Thanks a lot!')
  cy.get('#rating').type('{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}');
  
})