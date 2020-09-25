/// <reference types="Cypress" />
//Test json-server API
describe("Test GET posts with json-server", () => {
    var result;
    it("Validate status code of the /post API", () => {
        result = cy.request("http://localhost:3000/posts");
        result.its("status").should("equal", 200);
    })
})
