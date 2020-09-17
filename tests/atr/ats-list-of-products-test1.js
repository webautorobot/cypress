/// <reference types="Cypress" />
//<a class="prdocutname" href="https://automationteststore.com/index.php?rt=product/product&amp;path=52&amp;product_id=70" title="Eau Parfumee au The Vert Shampoo">Eau Parfumee au The Vert Shampoo</a>

//Test  from automationteststore site
describe("Test Automationsite page", () => {
  it("Iterate list of products in Hair Care section", () => {
    cy.visit("https://automationteststore.com");
    cy.log('Click on Hair Care Section');
    cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=52"]').click();
    
    cy.log('Loop products');
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
      cy.log('Index: ' + index + ' : ' + $el.text());
    });
    

    cy.log('Test 1 completed!');
  });
  it("Add selected item to basket", () => {
    cy.visit("https://automationteststore.com");
    cy.log('Click on Hair Care Section');
    cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=52"]').click();
    
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
      cy.log('Index: ' + index + ' : ' + $el.text());
      if($el.text().includes('Curls to straight Shampoo'))
      {
        cy.wrap($el).click();
        cy.get('.cart').click();
      }
    });
      
    cy.log('Test 2 completed!');
  });
});
