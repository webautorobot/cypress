/// <reference types="Cypress" />

//<a class="prdocutname" href="https://automationteststore.com/index.php?rt=product/product&amp;path=52&amp;product_id=70" title="Eau Parfumee au The Vert Shampoo">Eau Parfumee au The Vert Shampoo</a>

//Test  from automationteststore site
describe("Test Automationsite with own command - add to cart multiple items ", () => {
  beforeEach(() => {
    cy.visit("https://automationteststore.com");
    cy.get(
      '[href="https://automationteststore.com/index.php?rt=product/category&path=52"]'
    ).click();
  });
  before(() => {
    cy.fixture("products")
      .as("products")
      .then((data) => {
        //this.data = data;
        globalThis.data = data; // in case of problems
      });
  });
  it("Add item from Hair Care section to cart", () => {
    globalThis.data.productName.forEach((element) => {
      cy.addProductToBasket(element);
    });
    cy.get('.block_7 > .nav > .dropdown > .dropdown-toggle').click();
  });
});
