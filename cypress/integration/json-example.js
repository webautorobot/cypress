

//Test contact us from automationstore site with variables
describe("Test JSON Object examples for API testing", () => {
    it.only("JSON Object examples", () => {
        const exampleObject = { "key1": "James", "key2": "Bond" }
        const exampleArrayofValues = [1, 3, 5, 7, 11];
        const exampleArrayofNames = ["Ann", "Lisa", "Eli", "Emma"];
        const exampleOfArrayOfObject = [{ "key": "Luke" }, { "key": "Skywalker" }, { "key": "22" }];
        const users = {
            "firstName": "Bilbo",
            "lastname": "Baggins",
            "Age": 333,
            "Students": [
                {
                    "firstName": "Elsa",
                    "lastname": "Snow"
                },
                {
                    "firstName": "Sam",
                    "lastname": "Smith"
                },
                {
                    "firstName": "Ginnie",
                    "lastname": "Willie"
                }
            ]
        }

        cy.log(exampleObject["key1"]);
        cy.log(exampleObject["key2"]);
        cy.log(exampleObject.key1);
        cy.log(exampleObject.key2)
        cy.log(exampleArrayofNames[1]);
        cy.log(users.Students[1]);
        cy.log(users.Students[1].lastname);

        for (let i = 0; i < users.Students.length; i++) {
            cy.log(users.Students[i].lastname);
        }
        for (let i = 0; i < exampleOfArrayOfObject.length; i++) {
            cy.log(exampleOfArrayOfObject[i].key);
        }

    })
})