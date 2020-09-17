//Test contact us from automationstore site with variables
describe("Test with variable, cypress and jquery", ()=>{
    it.only("Navigation with variables with specific products", () => {
        cy.visit('https://automationteststore.com');
        const prodLink= 'https://automationteststore.com/index.php?rt=product/product&amp;product_id=50';
        const menuLink= 'https://automationteststore.com/index.php?rt=product/category&amp;path=36';
        const manuLink = "a[href*='product/category&path=']";
        const menuItem = ['accessories', 'Makeup', 'Skincare','Fragrance','Hair','Books'];
        
        menuItem.forEach(element => {
            cy.get(manuLink).contains(element).click();
            cy.get("h1 .maintext").then(($headerText) =>{
                let headerTxt = $headerText.text();
                cy.log(headerTxt);
            });    
            
        });
        // cy.get(manuLink).contains("Makeup").click();
        // cy.get("h1 .maintext").then(($headerText) =>{
        //     let headerTxt = $headerText.text();
        //     cy.log(headerTxt);
        // });
        

        // cy.get(manuLink).contains("Skincare").click();
        // cy.get(manuLink).contains("Fragrance").click();
        // cy.get(manuLink).contains("accessories").click();
        // cy.get(manuLink).contains("Hair").click();
        // cy.get(manuLink).contains("Books").click();

        cy.log('Test completed');
    })
})