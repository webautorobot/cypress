//Test contact us from automationstore site with variables
describe("Test with variable, cypress and jquery", ()=>{
    it.only("Navigation with variables with specific products", () => {
        cy.visit('https://automationteststore.com');
        
        const manuLink = "a[href*='product/category&path=']";
        const menuItem = ['accessories', 'Makeup', 'Skincare','Fragrance','Hair','Books'];
        
        menuItem.forEach(element => {
            cy.get(manuLink).contains(element).click();
            cy.get("h1 .maintext").then(($headerText) =>{
                let headerTxt = $headerText.text();
                cy.log("Main text on subpage: " + headerTxt);
            });    
            
        });
        
        cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=58"]').click();
        cy.get("h1 .maintext").then(($headerText) =>{
            let headerTxt = $headerText.text();
            cy.log("Main text on subpage: " + headerTxt);
        });    

        cy.log('Test completed');
    })
})