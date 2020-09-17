/// <reference types="Cypress" />
//Test webdriveruniversity site
describe("Handling iframe and Modals on WebdriverUniversity page", () => {
  it("Test iframe", () => {
    cy.visit("http://www.webdriveruniversity.com");
    // Go to alerts subpage and verify url
    cy.get("#iframe").invoke("removeAttr", "target").click({ force: true });
    cy.url().should("include", "IFrame");
    cy.get("#frame").then(($iframe) => {
      const body = $iframe.contents().find("body");
      cy.wrap(body).as("iframe");
    });
    cy.get("@iframe").find("#button-find-out-more").click();
    //Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras...
    cy.get("@iframe").find("#myModal").as("modal");
    cy.get("@modal").should(($expectedText) => {
      const text = $expectedText.text();
      expect(text).to.include(
        "Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras..."
      );
    });
    cy.get("@modal").contains("Close").click();
  });
});
