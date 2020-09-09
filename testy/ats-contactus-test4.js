/// <reference types="Cypress" />

//Test  from automationteststore site
describe("Test Contact Us form on Automationsite page", () => {
  it("Should be able to submit successfully submission via contact us form", () => {
    //cypress code
    //cy.get('');
    //cy.visit('https://automationteststore.com/index.php?rt=content/contact');
    cy.visit("https://automationteststore.com");
    cy.xpath("//a[contains(@href, 'contact')]")
      .click()
      .then(function (linkText) {
        cy.log("Click on text: " + linkText.text());
      });
    //cy.get('#contact-us > .thumbnail').click();
    cy.get("#ContactUsFrm_first_name").type("Tom");
    cy.get("#ContactUsFrm_email").type("tom.baggins@shire.com");
    cy.get("#ContactUsFrm_enquiry").type("I am looking for Bilbo");
    cy.get('button[title="Submit"]').click();
    cy.get(".mb40 > .btn").click();
    //contact_reply h1 Thank You for your Message!
  });
  it.only("Should NOT be able to submit successfully submission via contact-us form as all fields are required and one is missing", () => {
    cy.visit("https://automationteststore.com/index.php?rt=content/contact");
    //Uses cypress commands and chaining
    cy.visit("https://automationteststore.com/index.php?rt=content/contact");

    cy.contains("#ContactUsFrm", "Contact Us Form")
      .find("#field_11")
      .should("contain", "First name");

    cy.log("Test completed");

    //JQuery Approach

    const menuItem = ["Contact Us Form", "First name:", "Email:", "Enquiry:"];

    menuItem.forEach((element) => {
      cy.get("#ContactUsFrm")
        .contains(element)
        .then(($labelText) => {
          let labelTxt = $labelText.text();
          cy.log("Form item: " + labelTxt);
        });
    });

    cy.contains("#ContactUsFrm", "Contact Us Form").then((labelText) => {
      const firstNameText = labelText.find("#field_11").text();
      expect(firstNameText).to.contain("First name");
    });

    //Embedded commands
    cy.get('#field_11').then(fnText =>{
        cy.log(fnText.text());
        cy.log(fnText);
    })

  });
});
