/// <reference types="Cypress" />
//Test webdriveruniversity site
describe("Handling radiobuttons on WebdriverUniversity page", () => {
  it("Test radiobuttons - check specific radiobutton - Blue and Lettuce", () => {
    cy.visit("http://www.webdriveruniversity.com");
    // Go to alerts subpage and verify url
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.url().should("include", "Dropdown-Checkboxes-RadioButtons");

    cy.get("#radio-buttons")
      .find('[value="blue"]')
      .check()
      .should("be.checked");

    cy.get("#radio-buttons-selected-disabled")
      .find('[value="lettuce"]')
      .check()
      .should("be.checked");

    //cy.get('[value="cabbage"]').check().should("not.be.checked");
  });
  it("Test radiobuttons - check specific radiobutton - third and first", () => {
    cy.visit("http://www.webdriveruniversity.com");
    // Go to alerts subpage and verify url
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.url().should("include", "Dropdown-Checkboxes-RadioButtons");

    cy.get("#radio-buttons")
      .find('[type="radio"]')
      .eq(2)
      .check()
      .should("be.checked");
    // selection of radiobutton from Selected and Disabled Box
    cy.get("#radio-buttons-selected-disabled")
      .find('[type="radio"]')
      .eq(0)
      .check()
      .should("be.checked");
  });
  it("Test radiobuttons - check status of specific radiobutton ", () => {
    cy.visit("http://www.webdriveruniversity.com");
    // Go to alerts subpage and verify url
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.url().should("include", "Dropdown-Checkboxes-RadioButtons");

    // selection of radiobutton from Selected and Disabled Box
    cy.get("#radio-buttons-selected-disabled")
      .find('[type="radio"]')
      .eq(0)
      .should("not.be.checked");
    cy.get("#radio-buttons-selected-disabled")
      .find('[type="radio"]')
      .eq(1)
      .should("be.disabled");
    cy.get("#radio-buttons-selected-disabled")
      .find('[type="radio"]')
      .eq(2)
      .should("be.checked");
    cy.get("#radio-buttons-selected-disabled")
      .find('[value="cabbage"]')
      .should("not.be.checked");
  });
});
