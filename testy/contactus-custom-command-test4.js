/// <reference types="Cypress" />

//Test contact us form from webdriveruniversity site
describe("Test Contact Us form on WebdriverUniversity page", () => {
  beforeEach(() => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver");
    cy.url().should("include", "contactus");
  });
  before(() => {
    cy.fixture("users")
      .as("user")
      .then((data) => {
        //this.data = data;
        globalThis.data = data; // in case of problems
      });
  });
  it("Should be able to submit successfully submission via contact us form", () => {
    cy.contactFormWDU(
      data.first_name,
      data.last_name,
      data.email,
      data.body,
      "h1",
      "Thank You for your Message!"
    );
  });
  it("Should NOT be able to submit successfully submission via contact-us form as all fields are required and one is missing", () => {
    cy.contactFormWDU(
      data.first_name,
      data.last_name,
      " ",
      data.body,
      "body",
      "Error: Invalid email address"
    );
  });
});
