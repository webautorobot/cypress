/// <reference types="Cypress" />

//Test json-server API
describe("Test POST-VALIDATE-DELETE with json-server with comments", () => {
    var bodyOfPosts = new Array();
    var idOfPosts = new Array();
    var bodyUnique = "Cypress Body " + Math.random().toString(36).substring(1) + Math.random().toString(36).substring(1);
    var randomID = Math.round(Math.random() * 1000000);

    it("Validate status code of the comment POST via /post API twice POST", () => {
        cy.request({
            method: "POST",
            url: "http://localhost:3000/comments",
            body: {
                "body": "WebAtoRobot",
                "postId": randomID
            }
        }).then(response => {
            expect(response.status).to.eql(201);
        })
        cy.request({
            method: "POST",
            url: "http://localhost:3000/comments",
            body: {
                "body": bodyUnique,
                "postId": randomID
            }
        }).then(response => {
            expect(response.status).to.eql(201);
        })
    })

    it("Validate title of latest request of the POST via /post API", () => {
        cy.request({
            method: "GET",
            url: "http://localhost:3000/comments",
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            let body = JSON.parse(JSON.stringify(response.body));

            body.forEach(element => {
                bodyOfPosts.push(element["body"]);
                idOfPosts.push(element["id"]);
            })

        }).then(() => {
            var positionLatest = bodyOfPosts.length - 1;
            var latestPost = bodyOfPosts[positionLatest];
            cy.log(latestPost);
            expect(latestPost).to.eq(bodyUnique);
        }).then(() => {
            var positionLatest = idOfPosts.length - 1;
            var latestID = idOfPosts[positionLatest];
            var positionLatestHTTP = "http://localhost:3000/comments/" + latestID;
            var httpAddr = `"` + positionLatestHTTP + `"`;
            cy.log(httpAddr);
            cy.request({
                method: "DELETE",
                url: positionLatestHTTP,
            })
        })

    })
})
