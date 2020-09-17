/// <reference types="Cypress" />

//Test webdriveruniversity site
describe("Test multiple mouse actions on WebdriverUniversity page", () => {
  it("Test scroll into view", () => {
    cy.visit("http://www.webdriveruniversity.com");
    // Go to subpage and verify url - scroll and click
    //cy.get("#actions").invoke("removeAttr", "target").click({ force: true }); // clicking based on id
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.url().should("include", "Actions");
  });
  it("Test scroll into view and draw and drop a box", () => {
    cy.visit("http://www.webdriveruniversity.com");
    // Go to subpage and verify url - scroll and click
    //cy.get("#actions").invoke("removeAttr", "target").click({ force: true }); // clicking based on id
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.url().should("include", "Actions");
    cy.get("#draggable").trigger("mousedown", { which: 1 });
    cy.get("#droppable")
      .trigger("mousemove")
      .trigger("mouseup", { force: true });

    cy.get("#droppable").should("contain", "Dropped!");
  });
  it("Test scroll into view and double click a box", () => {
    cy.visit("http://www.webdriveruniversity.com");
    // Go to subpage and verify url - scroll and click
    //cy.get("#actions").invoke("removeAttr", "target").click({ force: true }); // clicking based on id
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.url().should("include", "Actions");

    cy.get("#double-click").trigger("dblclick");

    cy.get("#double-click").should("contain", "Double Click Me!");
  });
  it.only("Test scroll into view and click and hold-down LMB a box", () => {
    cy.visit("http://www.webdriveruniversity.com");
    // Go to subpage and verify url - scroll and click
    //cy.get("#actions").invoke("removeAttr", "target").click({ force: true }); // clicking based on id
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.url().should("include", "Actions");

    cy.get("#click-box").trigger("mousedown");

    cy.get("#click-box").should(
      "contain",
      "Well done! keep holding that click now....."
    );
    cy.get("#click-box").then(($element) => {
      expect($element).to.have.css("background-color", "rgb(0, 255, 0)");
    });
  });
});
