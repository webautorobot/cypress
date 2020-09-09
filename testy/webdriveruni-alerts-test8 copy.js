/// <reference types="Cypress" />
//Test contact us form from webdriveruniversity site
describe("Test alerts on WebdriverUniversity page", () => {
  it("Test alerts", () => {
    cy.visit("http://www.webdriveruniversity.com");
    // Go to alerts subpage and verify url
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.url().should("include", "Popup-Alerts");
    cy.get("#button1").click();
    cy.on("window:confirm", (str) => {
      expect(str).to.equal("I am an alert box!");
    });
    // cy.get('#button2').click();
    // cy.get('#button3').click();
    // cy.get('.modal-footer > .btn').click();
    // cy.get('#button4').click();
    // cy.get('#button1').click();
  });
  it(" Validate alert with 2 options press OK", () => {
    cy.visit("http://www.webdriveruniversity.com");
    // Go to alerts subpage and verify url
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.url().should("include", "Popup-Alerts");
    cy.get("#button4").click();
    cy.on("window:confirm", (str) => {
      return true;
    });
    cy.get("#confirm-alert-text").should("contain", "You pressed OK!");
  });
  it(" Validate alert with 2 options press Cancel", () => {
    cy.visit("http://www.webdriveruniversity.com");
    // Go to alerts subpage and verify url
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.url().should("include", "Popup-Alerts");
    cy.get("#button4").click();
    cy.on("window:confirm", (str) => {
      return false;
    });
    cy.get("#confirm-alert-text").should("contain", "You pressed Cancel!");
  });
  it.only(" Validate alert using stub", () => {
    // cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
    cy.visit("http://www.webdriveruniversity.com");
    // Go to alerts subpage and verify url
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.url().should("include", "Popup-Alerts");

    // cy.get("#button4").click();
    const stub = cy.stub();
    cy.on("window:confirm", stub);

    cy.get("#button4")
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith("Press a button!");
      })
      .then(() => {
        cy.get("#confirm-alert-text").should("contain", "You pressed OK!");
      });
    //cy.get("#confirm-alert-text").should("contain", "You pressed Cancel!");
  });
});
