/// <reference types="Cypress" />
//<a class="prdocutname" href="https://automationteststore.com/index.php?rt=product/product&amp;path=52&amp;product_id=70" title="Eau Parfumee au The Vert Shampoo">Eau Parfumee au The Vert Shampoo</a>

//Test  from automationteststore site
describe("Test Automationsite with own command page", () => {
  beforeEach(() => {
    cy.visit("https://automationteststore.com");
    //cy.log("Click on Hair Care Section");
    cy.get(
      '[href="https://automationteststore.com/index.php?rt=product/category&path=52"]'
    ).click();
  });
  it("Iterate list of products in Hair Care section", () => {
    cy.log("Loop products");
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      cy.log("Index: " + index + " : " + $el.text());
    });

    cy.log("Test 1 completed!");
  });
  it("Add selected item to basket", () => {
    cy.selectProduct("Curls to straight Shampoo"); //use of own command from /support/commands.js
    cy.log("Test 2 completed!");
  });
  it("Add selected item to basket", () => {
    cy.selectProduct("Seaweed Conditioner"); //use of own command from /support/commands.js
    cy.log("Test 3 completed!");
  });
  it("Add selected item to basket", () => {
    cy.selectProduct("Eau Parfumee au The Vert Shampoo"); //use of own command from /support/commands.js
    cy.log("Test4 completed!");
  });
});
