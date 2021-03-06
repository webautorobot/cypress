/// <reference types="Cypress" />


//Test contact us form from webdriveruniversity site
describe("Test Contact Us form on WebdriverUniversity page", ()=>{
    it("Should be able to submit successfully submission via contact us form", () => {
        //cypress code
        //cy.get('');
        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#contact-us > .thumbnail').click();
    })
    it("Should NOT be able to submit successfully submission via contact-us form as all fields are required and one is missing", () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#contact-us').click({force: true});
    })
})