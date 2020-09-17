/// <reference types="Cypress" />

//Test webdriveruniversity site
describe("Handling data from tables on WebdriverUniversity page", () => {
  beforeEach(() => {
    cy.visit("http://www.webdriveruniversity.com");
    // Go to subpage and verify url
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    cy.url().should("include", "Data-Table");
  });
  it("Test data and tables - data extraction and validation - calculate and assert total age of all users", () => {
    const userDetails = [];
    cy.get("#thumbnail-1>table>tbody>tr>td")
      .each(($el, index, $list) => {
        userDetails[index] = $el.text();
      })
      .then(() => {
        let i;
        let total = 0;
        for (i = 2; i < userDetails.length; i += 3) {
          //cy.log(userDetails[i]);
          total += Number(userDetails[i]);
        }
        cy.log("Total Age: ", total);
        expect(total).to.eq(322);
      });
  });
  it.only("Test data and tables - data extraction and validation - calculate and assert total age of all users with one column only", () => {
    const userDetails = [];
    cy.get("#thumbnail-1>table>tbody>tr>td:nth-child(3)")
      .each(($el, index, $list) => {
        userDetails[index] = $el.text();
      })
      .then(() => {
        let i;
        let total = 0;
        for (i = 0; i < userDetails.length; i++) {
          total += Number(userDetails[i]);
        }
        cy.log("Average Age: ", total / userDetails.length);
        expect(total).to.eq(322);
      });
  });
  it("Test data and tables - data extraction and validation - verify age based on last name", () => {
    const userDetails = [];
    cy.get("#thumbnail-1>table>tbody>tr>td")
      .each(($el, index, $list) => {
        userDetails[index] = $el.text();
      })
      .then(() => {
        let i;
        let age = 0;
        for (i = 1; i < userDetails.length; i++) {
          //cy.log(userDetails[i]);
          if (userDetails[i] === "Woods") age = userDetails[i + 1];
        }
        cy.log("Woods Age: ", age);
        expect(age).to.eq("80");
      });
  });
});
