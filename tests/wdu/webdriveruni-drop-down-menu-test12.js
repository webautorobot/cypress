/// <reference types="Cypress" />

//Test webdriveruniversity site
describe("Handling drop-down menus on WebdriverUniversity page", () => {
  it("Test drop-down lists - select specific values via specific drop-down lists", () => {
    cy.visit("http://www.webdriveruniversity.com");
    // Go to alerts subpage and verify url
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.url().should("include", "Dropdown-Checkboxes-RadioButtons");

    //set aliasses
    cy.get("#dropdowm-menu-1").as("dm1");
    cy.get("#dropdowm-menu-2").as("dm2");
    cy.get("#dropdowm-menu-3").as("dm3");
    cy.get("#fruit-selects").as("dm4");
    //fruit-selects

    cy.get("@dm1").select("python");
    cy.get("@dm2").select("junit");
    cy.get("@dm3").select("css");
    cy.get("@dm4").select("pear");

    cy.get("@dm1").should("have.value", "python");
    cy.get("@dm2").should("have.value", "junit");
    cy.get("@dm3").should("have.value", "css");
    cy.get("@dm4").should("have.value", "pear");
    cy.get("@dm4").find('[value="orange"]').should("be.disabled");
  });
});
