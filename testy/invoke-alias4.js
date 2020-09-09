/// <reference types="Cypress" />
//<a class="prdocutname" href="https://automationteststore.com/index.php?rt=product/product&amp;path=52&amp;product_id=70" title="Eau Parfumee au The Vert Shampoo">Eau Parfumee au The Vert Shampoo</a>

//Test  from automationteststore site
describe("Test Automationsite page Invoke & Alias", () => {
  it("Iterate list of products and count number of products on main page", () => {
    cy.visit("https://automationteststore.com");
    
    cy.get('#maincontainer .thumbnail').each(($el, index, $list) => {
      cy.log('Index: ' + index + ' : ' + $el.text());
    });
    
    cy.get('#maincontainer .thumbnail').as('productThumbnail');
    cy.get('@productThumbnail').should('have.length', 16);
    cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart');

    cy.log('Test 1 completed!');
  });
  it.only("Total all regular prices of products on main page ", () => {
    cy.visit("https://automationteststore.com");
        
    cy.get('.thumbnail').as('productThumbnail');
    cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
      cy.log('Index: ' + index + ' : ' + $el.text());
    });
    
    //cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart');
    cy.log('Test 2 completed!');
  });
});
