///<reference types="cypress"/>
import { faker } from '@faker-js/faker';
import post from '../fixtures/post.json';

post.userId = faker.number.int({ min: 11, max: 2000 });
post.id = faker.number.int({ min: 101, max: 20000 });
post.title = faker.lorem.sentence();
post.body = faker.lorem.sentences();

it('Create post entity and update the created entity.Verify HTTP response status code and verify that the entity is updated.', () => {
      
    cy.request({
      method: 'POST',
      url: 'http://localhost:3000/posts', 
      body: {
        userId: post.userId,
        id: post.id,
        title: post.title,
        content: post.body
    }
    }).then((response) => {

      const postId = response.body.id;    

      cy.request({
        method: 'PUT',
        url: `http://localhost:3000/posts/${postId}`,
        body: {
          userId: post.userId,
          id: post.id,
          title: post.title,
          content: post.body
      },
      failOnStatusCode: false,
      }).then((updateResponse) => {        
        expect(updateResponse.status).to.equal(200);

        cy.request({
          method: 'GET',
          url: `http://localhost:3000/posts/${postId}`
        }).then((fetchResponse) => {
         
          expect(fetchResponse.status).to.equal(200);
          expect(fetchResponse.body.title).to.equal(post.title);
          expect(fetchResponse.body.content).to.equal(post.body);
        });
      });
    });
  });

  it('Delete non-existing post entity. Verify HTTP response status code 404.', () => {

    const nonExistingPostId = post.id; 
    cy.request({
      method: 'DELETE',
      url: `http://localhost:3000/posts/${nonExistingPostId}`,
      failOnStatusCode: false,
    }).then((deleteResponse) => {
      expect(deleteResponse.status).to.equal(200);
    });
    cy.request({
        method: 'GET',
        url: `http://localhost:3000/posts/${nonExistingPostId}`,
        failOnStatusCode: false,
      }).then((getResponse) => {
        expect(getResponse.status).to.equal(404);
      });
  });

 