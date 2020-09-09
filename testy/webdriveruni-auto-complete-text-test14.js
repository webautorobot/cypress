/// <reference types="Cypress" />

//Test webdriveruniversity site
describe("Handling auto-complete text on WebdriverUniversity page", () => {
  it("Test auto-complete drop-down lists - select letter a and choose  Bagels and then Avocado item from the list", () => {
    cy.visit("http://www.webdriveruniversity.com");
    // Go to alerts subpage and verify url
    cy.get("#autocomplete-textfield")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.url().should("include", "Autocomplete-TextField");

    //set alias and choose bagels
    cy.get("#myInput").as("myInput");
    cy.get("#submit-button").as("submit");

    cy.get("@myInput").type("bagels");
    cy.get("@myInput").should("have.value", "bagels");
    cy.get("@submit").click();

    // Now Avocado
    cy.get("@myInput").type("a");
    cy.get("#myInputautocomplete-list > *").each(($el, index, $list) => {
      const prod = $el.text();
      const productToSelect = "Avacado";

      if (prod === productToSelect) {
        $el.click();
        cy.get("@myInput").should("have.value", "Avacado");
        cy.log(index);
        cy.get("@submit").click();
        cy.url().should("include", "Avacado");
      }
    }).then;
    // now grapes
    cy.get("@myInput").type("g").then;
    cy.get("#myInputautocomplete-list > *").each(($el, index, $list) => {
      const prod = $el.text();
      const productToSelect = "Grapes";

      if (prod === productToSelect) {
        $el.click();
        cy.get("@myInput").should("have.value", productToSelect);
        cy.log(index);
        cy.get("@submit").click();
        cy.url().should("include", productToSelect);
      }
    });
  });
});
