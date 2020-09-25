/// <reference types="Cypress" />
//Test json-server API
describe("Test PUT posts with json-server", () => {
    var result;
    it("Validate status code of the PUT via /post API for record 7", () => {
        cy.request({
            method: "PUT",
            url: "http://localhost:3000/posts/7",
            body: {
                "title": "PUT post via cypress to record 7",
                "author": "WebAutoRobot"
            }
        }).then(response => {
            expect(response.status).to.eql(200);
        })
    })
})
