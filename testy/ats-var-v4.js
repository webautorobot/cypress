//Test contact us from automationstore site with variables
describe("Test with variable, cypress and jquery", ()=>{
    it.only("Navigation with variables with specific products", () => {
        cy.visit('https://automationteststore.com');
        
        const manuLink = "a[href*='product/category&path=']";
        const menuItem = [68,36,43,49,58,52,65];
        
        menuItem.forEach(element => {
            let linkPath= '[href="https://automationteststore.com/index.php?rt=product/category&path='+element+'"]'; 
            cy.get(linkPath).click();
            cy.get("h1 .maintext").then(($headerText) =>{
                let headerTxt = $headerText.text();
                cy.log("Main text on subpage: " + headerTxt);
            });    
        });

        cy.log('Test completed');
    })
})