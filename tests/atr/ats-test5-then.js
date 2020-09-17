/// <reference types="Cypress" />


//Test contact us form from webdriveruniversity site
describe("Inspect Auitomation test store", ()=>{
    it("click on first item using deafault selector", () => {
        
        cy.visit('https://automationteststore.com');
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click();
        
    })
    it.only("Click on item using item's text", () => {
        cy.visit('https://automationteststore.com/');
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function(itemHeaderText){
            console.log('Selected following item: '+ itemHeaderText.text());
        });
        
    })
    it.only("Click on item using item's text using index", () => {
        cy.visit('https://automationteststore.com/');
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click();
        
    })
})