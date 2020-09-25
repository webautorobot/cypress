/// <reference types="Cypress" />
//Test json-server API
describe("Test DELETE posts with json-server", () => {
    var result;
    it("Validate status code of the DELETE via /post API for record 8", () => {
        cy.request({
            method: "DELETE",
            url: "http://localhost:3000/comments/2"
        }).then(response => {
            expect(response.status).to.eql(200);
        })
    })
})
