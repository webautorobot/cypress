/// <reference types="Cypress" />
//Test webdriveruniversity site
describe("Handling checkboxes on WebdriverUniversity page", () => {
  it("Test checkboxes", () => {
    cy.visit("http://www.webdriveruniversity.com");
    // Go to alerts subpage and verify url
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.url().should("include", "Dropdown-Checkboxes-RadioButtons");
    //cy.get("#checkboxes > :nth-child(1) > input").check();
    cy.get("#checkboxes > :nth-child(1) > input").check().should("be.checked");
    //cy.get(":nth-child(3) > input").check();
    cy.get(":nth-child(3) > input").check().should("be.checked");
    cy.get(":nth-child(5) > input").check();
    cy.get(":nth-child(5) > input").should("be.checked");
    cy.get(":nth-child(7) > input").should("not.be.checked");
  });
  it("Test checkboxes with uncheck and with alias", () => {
    cy.visit("http://www.webdriveruniversity.com");
    // Go to alerts subpage and verify url
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.url().should("include", "Dropdown-Checkboxes-RadioButtons");
    // setting alias for first checkbox
    cy.get("#checkboxes > :nth-child(1) > input").as("option-1");
    cy.get("@option-1").check();
    cy.get("@option-1").should("be.checked");

    cy.get(":nth-child(5) > input").as("option-3");
    cy.get("@option-3").uncheck();
    cy.get("@option-3").should("not.be.checked");
  });
  it("Test multiple checkboxes using one command", () => {
    cy.visit("http://www.webdriveruniversity.com");
    // Go to alerts subpage and verify url
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.url().should("include", "Dropdown-Checkboxes-RadioButtons");

    // setting alias for first checkbox
    cy.get("input[type='checkbox']").as("checkboxes");
    cy.get("@checkboxes")
      .check(["option-1", "option-2", "option-3", "option-4"])
      .should("be.checked");
    cy.get("@checkboxes")
      .uncheck(["option-1", "option-2", "option-3", "option-4"])
      .should("not.be.checked");
  });
});
