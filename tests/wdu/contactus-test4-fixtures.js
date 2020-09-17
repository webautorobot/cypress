/// <reference types="Cypress" />

//Test contact us form with fixtures from webdriveruniversity site
describe("Test Contact Us form on WebdriverUniversity page", () => {
  beforeEach(() => {
    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    //cy.get('#contact-us > .thumbnail').click();
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver");
    cy.url().should("include", "contactus");
  });
  before(() => {
    cy.fixture("contact").then((data) => {
      //this.data = data;
      cy.log(data);
      globalThis.data = data; // in case of problems
    });
  });
  it("Should be able to submit successfully submission via contact us form, import data with fixtures", () => {
    cy.get('[name="first_name"]').type(data.first_name);
    cy.get('[name="last_name"]').type(data.last_name);
    cy.get('[name="email"]').type(data.email);
    cy.get("textarea.feedback-input").type(data.body);
    cy.get('[type="submit"]').click();
    cy.get("h1").should("have.text", "Thank You for your Message!");
  });
  it("Should NOT be able to submit successfully submission via contact-us form as all fields are required and one is missing", () => {
    cy.get('[name="first_name"]').type("Bilbo");
    cy.get('[name="last_name"]').type("Baggins");
    cy.get('[type="submit"]').click();
    //cy.get('h1') Error: all fields are required
    //cy.get('body').should('have.text', 'Error: all fields are required');
    cy.get("body").contains("Error: all fields are required");
  });
});
