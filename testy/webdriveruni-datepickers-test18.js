/// <reference types="Cypress" />

//Test webdriveruniversity site
describe("Handling date-picker on WebdriverUniversity page", () => {
  it("Test selection of date-picker", () => {
    cy.visit("http://www.webdriveruniversity.com");
    // Go to subpage and verify url
    cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });
    cy.url().should("include", "Datepicker");

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + "/" + dd + "/" + yyyy;
    cy.log("Today: ", today);

    var date = new Date();
    date.setDate(date.getDate() + 365);

    var futureYear = date.getFullYear();
    var futureMonth = date.toLocaleString("en-US", { month: "long" }); // en or default
    var futureDay = date.getDate();

    cy.log(
      "Year " + futureYear + " Month " + futureMonth + " Day " + futureDay
    );

    function selectMonthAndYear() {
      cy.get(".datepicker-dropdown")
        .find(".datepicker-switch")
        .first()
        .then((currentDate) => {
          if (!currentDate.text().includes(futureYear)) {
            cy.get(".next").first().click();
            selectMonthAndYear();
          }
        })
        .then(() => {
          cy.get(".datepicker-dropdown")
            .find(".datepicker-switch")
            .first()
            .then((currentDate) => {
              if (!currentDate.text().includes(futureMonth)) {
                cy.get(".next").first().click();
                selectMonthAndYear();
              }
            });
        });
    }
    function selectFutureDay() {
      cy.get("[class=day]").contains(futureDay).click();
    }

    cy.get(".input-group-addon").click();
    selectMonthAndYear();
    selectFutureDay();
  });
});
