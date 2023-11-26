///<reference types="cypress"/>
import { faker } from '@faker-js/faker';
import post from '../fixtures/post.json';

post.userId = faker.number.int({ min: 11, max: 2000 });
post.id = faker.number.int({ min: 101, max: 20000 });
post.title = faker.lorem.sentence();
post.body = faker.lorem.sentences();

    it('Create post entity and verify that the entity is created. Verify HTTP response status code. Use JSON in body.', () => {

        const newPostData = {
            userId: post.userId,
            id: post.id,
            title: post.title,
            content: post.body,
          };

      cy.request({
        method: 'POST',
        url: 'http://localhost:3000/posts', 
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: newPostData,
      }).as('createPost');

      cy.get('@createPost').its('status').should('eq', 201);
  

      cy.get('@createPost').its('body').then((responseBody) => {
        cy.log(JSON.stringify(responseBody));
      });
    });

    it('Update non-existing entity. Verify HTTP response status code.', () => {

        cy.request({
          method: 'PUT',
          url: 'http://localhost:3000/posts', 
          body: {
            userId: post.userId,
            id: post.id,
            title: post.title,
            content: post.body
        },
          failOnStatusCode: false,
        }).then((response) => {

          expect(response.status).to.eq(404);
        });
      });
      