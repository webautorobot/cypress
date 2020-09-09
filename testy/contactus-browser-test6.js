/// <reference types="Cypress" />
//Test contact us form from webdriveruniversity site
describe("Test of validation of homepage links WebdriverUniversity page", ()=>{
    it("Test of links redirection to contuct us and back", () => {
        //cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true});
        cy.url().should('include', 'contactus');
        cy.go('back');
        cy.reload(true); //reload without using cash
        cy.go('forward');
        cy.url().should('include', 'contactus');
        cy.go('back');
        cy.get('#login-portal').invoke('removeAttr', 'target').click({force:true});
        cy.url().should('include', 'Login-Portal');
        cy.log('End of test')
        cy.go('back');
        cy.get('#to-do-list').invoke('removeAttr', 'target').click({force:true});
        cy.url().should('include', 'To-Do-List');
        cy.go('back');
    })
})
