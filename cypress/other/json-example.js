//Test contact us from automationstore site with variables
describe("Test JSON Object examples for API testing", () => {
    it.only("JSON Object examples", () => {
        const exampleObject = { "key1": "James", "key2": "Bond" }
        cy.log(exampleObject["key1"]);
        cy.log(exampleObject["key2"]);
    })
})