///<reference types="cypress"/>
import { faker } from '@faker-js/faker';
import post from '../fixtures/post.json';

post.userId = faker.number.int({ min: 11, max: 2000 });
post.id = faker.number.int({ min: 101, max: 20000 });
post.title = faker.lorem.sentence();
post.body = faker.lorem.sentences();

describe('HTTP Requests', () => {
    
  it('Verify HTTP response status code 200 and content type', () => {
    cy.request('GET', '/posts')
      .its('status')
      .should('equal', 200);
  });

  
  it('Get only first 10 posts. Verify HTTP response status code. Verify that only the first 10 posts are returned.', () => {
    cy.request('GET', '/posts').then((response) => {
      cy.wrap(response.status).should('eq', 200);
      const first10Posts = response.body.slice(0, 10);

      cy.log('First 10 Posts:');
      cy.log(JSON.stringify(first10Posts)); // Convert the object to a JSON string for logging

      cy.wrap(first10Posts).should('have.length', 10);
    });
  });


  it('Get posts with id = 55 and id = 60. Verify HTTP response status code. Verify id values of returned records.', () => {
    cy.request('GET', 'http://localhost:3000/posts').then((response) => {
      cy.wrap(response.status).should('eq', 200);
      const responseBody = response.body;

      const postsWithId55 = responseBody.filter((post) => post.id === 55);
      const postsWithId60 = responseBody.filter((post) => post.id === 60);

      cy.wrap(postsWithId55).should('have.length', 1);
      cy.wrap(postsWithId60).should('have.length', 1);

      cy.wrap(postsWithId55[0].id).should('eq', 55);
      cy.wrap(postsWithId60[0].id).should('eq', 60);
    });
  });

  it.only('Should send a POST request to create a post and verify 401 response', () => {
    const postData = {
      userId: post.userId,
      id: post.id,
      title: post.title,
      content: post.body,
    };

    cy.request({
      method: 'POST',
      url: 'http://localhost:3000/644/posts',
      body: postData,
      failOnStatusCode: false, 
    }).then((response) => {

      expect(response.status).to.eq(401);

    });
  });
 
});