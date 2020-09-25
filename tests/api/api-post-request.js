/// <reference types="Cypress" />
//Test json-server API
describe("Test POST posts with json-server", () => {
    var titleOfPosts = new Array();

    it("Validate status code of the POST via /post API", () => {
        cy.request({
            method: "POST",
            url: "http://localhost:3000/posts",
            body: {
                "title": "one post via cypress 3",
                "author": "WAR"
            }
        }).then(response => {
            expect(response.status).to.eql(201);
        })
    })
    it("Validate title of latest request of the POST via /post API", () => {
        cy.request({
            method: "GET",
            url: "http://localhost:3000/posts",
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            let body = JSON.parse(JSON.stringify(response.body));
            body.forEach(element => {
                titleOfPosts.push(element["title"]);
            })
        }).then(() => {
            var latestPost = titleOfPosts[titleOfPosts.length - 1];
            cy.log(latestPost);
            expect(latestPost).to.contain("one post via cypress 3");
        });
    })
})
