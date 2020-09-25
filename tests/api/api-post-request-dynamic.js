/// <reference types="Cypress" />
//Test json-server API
describe("Test POST posts with json-server", () => {
    var titleOfPosts = new Array();
    var titleUniue = "Cypress Post " + Math.random().toString(36).substring(1) + Math.random().toString(36).substring(1);

    it("Validate status code of the POST via /post API", () => {
        cy.request({
            method: "POST",
            url: "http://localhost:3000/posts",
            body: {
                "title": titleUniue,
                "author": "WebAutoRobot"
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
            expect(latestPost).to.eq(titleUniue);
        });
    })
})
