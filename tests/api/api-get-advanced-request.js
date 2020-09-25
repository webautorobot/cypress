/// <reference types="Cypress" />
//Test json-server API
describe("Test GET posts with json-server", () => {
    var result;
    it("Validate status code of the /post API", () => {
        result = cy.request("http://localhost:3000/posts");
        result.its("status").should("equal", 200);
    })
    it("Validate /post API containst correct keys and values", () => {
        result = cy.request("http://localhost:3000/posts");
        result.its("status").should("equal", 200);
        cy.request({
            method: "GET",
            url: "http://localhost:3000/posts",
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            let body = JSON.parse(JSON.stringify(response.body));
            cy.log(body);
            expect(body[0]).has.property("title", "json-server");
            expect(body[1]).has.property("title", "post-example");

            body.forEach(element => {
                expect(element).to.have.all.keys("id", "title", "author")
                cy.log("Author: " + element["author"] + " & Title: " + element["title"])
            });
        });
    })
})
