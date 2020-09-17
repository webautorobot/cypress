/// <reference types="Cypress" />
//<a class="prdocutname" href="https://automationteststore.com/index.php?rt=product/product&amp;path=52&amp;product_id=70" title="Eau Parfumee au The Vert Shampoo">Eau Parfumee au The Vert Shampoo</a>

//Test  from automationteststore site
describe("Test Automationsite page Invoke & Alias", () => {
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
  it.only("Validate specific hair care product", () => {
    cy.visit("https://automationteststore.com");
    cy.log('Click on Hair Care Section');
    cy.get('a[href*="product/category&path"]').contains("Hair Care").click();
    //as is alias variable
    cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail');
    cy.get('@productThumbnail').its('length').should('be.gt', 5);
    cy.get('@productThumbnail').should('include', 'Seaweed Conditioner');
    
    cy.log('Test 2 completed!');
  });
});
