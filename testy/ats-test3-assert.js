/// <reference types="Cypress" />


//Test contact us form from webdriveruniversity site
describe("Test Contact Us form on WebdriverUniversity page", ()=>{
    it("Should be able to submit successfully submission via contact us form", () => {
        //cypress code
        //cy.get('');
        //cy.visit('https://automationteststore.com/index.php?rt=content/contact');
        cy.visit('https://automationteststore.com');
        cy.xpath("//a[contains(@href, 'contact')]").click();
        //cy.get('#contact-us > .thumbnail').click();
        cy.get('#ContactUsFrm_first_name').type("Tom");
        cy.get('#ContactUsFrm_email').type("tom.baggins@shire.com");
    
        cy.get('#ContactUsFrm_enquiry').type("I am looking for Bilbo");
        cy.get('button[title="Submit"]').click();
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!'); //assersion
        //cy.get('.mb40 > .btn').click();
        
        //contact_reply h1 Thank You for your Message!
    })
    // it("Should NOT be able to submit successfully submission via contact-us form as all fields are required and one is missing", () => {
    //     //cy.visit('https://automationteststore.com/index.php?rt=content/contact');
    //     cy.visit('https://automationteststore.com');
    //     cy.get("a[href$='contact']").click();
    //     cy.get('#ContactUsFrm_first_name').type("Tom");
    //     //cy.get('#ContactUsFrm_email').type("tom.baggins@shire.com"); //exclude
    //     cy.get('#ContactUsFrm_enquiry').type("I am looking for Bilbo");
    //     cy.get('button[title="Submit"]').click();
    //     cy.get('.mb40 > .btn').click();
        //cy.get('h1') Error: all fields are required
//    })
})