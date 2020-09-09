/// <reference types="Cypress" />


//Test contact us form from webdriveruniversity site
describe("Test Contact Us form on WebdriverUniversity page", ()=>{
    it.only("Cypress web security test to go to 2 superdomains ", () => {
        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click({force:true});
    })
    it(" Error when visiting 2 different domains", () => {
        cy.visit('http://www.webdriveruniversity.com');
        cy.visit('https://automationteststore.com');
        
    })
})
