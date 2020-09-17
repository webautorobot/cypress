//Test contact us from automationstore site with variables
describe("Test with variable, cypress and jquery", ()=>{
    it.only("Navigation with variables with specific products", () => {
        cy.visit('https://automationteststore.com');
        const prodLink= 'https://automationteststore.com/index.php?rt=product/product&amp;product_id=50';
        const menuLink= 'https://automationteststore.com/index.php?rt=product/category&amp;path=36';
        const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup");
        

        
        makeupLink.click();
        cy.visit('https://automationteststore.com');
        const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare");
        skincareLink.click();
        
        cy.log('Test completed');
    })
})