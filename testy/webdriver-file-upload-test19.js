/// <reference types="Cypress" />

// install cypress-file-upload
// add to support/commands.js:  import "cypress-file-upload"; 

//Test webdriveruniversity site
describe("Handling file upload on WebdriverUniversity page", () => {
  it("Test upload of the file", () => {
    cy.visit("http://www.webdriveruniversity.com");
    // Go to subpage and verify url
    cy.get("#file-upload")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.url().should("include", "File-Upload");

    //Test of file upload

    cy.fixture("cypress-test.png", "base64").then((fileContent) => {
      cy.get("#myFile").attachFile(
        {
          fileContent,
          fileName: "cypress-test.png",
          mimeType: "image/png",
        },
        {
          uploadType: "input",
        }
      );
      cy.get("#submit-button").click();
    });
  });
  it("Test upload no file", () => {
    cy.visit("http://www.webdriveruniversity.com");
    // Go to subpage and verify url
    cy.get("#file-upload")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.url().should("include", "File-Upload");

    //Test of no file upload
    cy.get("#submit-button").click();
  });
});
