/// <reference types="Cypress" />


//Test contact us form from webdriveruniversity site
describe("Test Contact Us form on WebdriverUniversity page", ()=>{
    it("Should be able to submit successfully submission via contact us form", () => {
        //cypress code
        //cy.get('');
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
        //cy.get('#contact-us > .thumbnail').click();
        cy.get('[name="first_name"]').type("Tom");
        cy.get('[name="last_name"]').type("Baggins");
        cy.get('[name="email"]').type("tom.baggins@shire.com");
        cy.get('textarea.feedback-input').type("I am looking for Bilbo");
        cy.get('[type="submit"]').click();
        //contact_reply h1 Thank You for your Message!
    })
    it.only("Should NOT be able to submit successfully submission via contact-us form as all fields are required and one is missing", () => {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
        //cy.get('#contact-us').click({force: true});
        cy.get('[name="first_name"]').type("Bilbo");
        cy.get('[name="last_name"]').type("Baggins");
        cy.get('[type="submit"]').click();
        //cy.get('h1') Error: all fields are required
        
    })
})