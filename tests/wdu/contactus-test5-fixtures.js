/// <reference types="Cypress" />

//Test contact us form with fixtures and alias from webdriveruniversity site
describe("Test Contact Us form on WebdriverUniversity page", () => {
  beforeEach(() => {
    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    //cy.get('#contact-us > .thumbnail').click();
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver");
    cy.url().should("include", "contactus");
    cy.get('[name="first_name"]').as("firstName");
    cy.get('[name="last_name"]').as("lastName");
  });
  before(() => {
    cy.fixture("users")
      .as("user")
      .then((data) => {
        //this.data = data;
        cy.log(data);
        globalThis.data = data; // in case of problems
      });
  });
  it("Should be able to submit successfully submission via contact us form, import data with fixtures", () => {
    cy.get("@user").then((user) => {
      cy.get("@firstName").type(user.first_name);
      cy.get('[name="email"]').type(user.email);
    });

    cy.get("@lastName").type(data.last_name);
    cy.get("textarea.feedback-input").type(data.body);
    cy.get('[type="submit"]').click();
    cy.get("h1").should("have.text", "Thank You for your Message!");
  });
  it("Should NOT be able to submit successfully submission via contact-us form as all fields are required and one is missing", () => {
    cy.get("@firstName").type("Bilbo");
    cy.get("@lastname").type("Baggins");
    cy.get('[type="submit"]').click();
    //cy.get('h1') Error: all fields are required
    //cy.get('body').should('have.text', 'Error: all fields are required');
    cy.get("body").contains("Error: all fields are required");
  });
});
