/// <reference types="Cypress" />
//Test json-server API
describe("Test DELETE posts with json-server", () => {
    var result;
    it("Validate status code of the DELETE via /post API for record 8", () => {
        cy.request({
            method: "DELETE",
            url: "http://localhost:3000/posts/8"
        }).then(response => {
            expect(response.status).to.eql(200);
        })
    })
    it("Validate status code of the DELETE via /post API for non existing record 80", () => {
        cy.request({
            method: "DELETE",
            url: "http://localhost:3000/posts/80"
        }).then(response => {
            expect(response.status).to.eql(404);
        })
    })
})
