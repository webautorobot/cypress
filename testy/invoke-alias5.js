/// <reference types="Cypress" />
//<a class="prdocutname" href="https://automationteststore.com/index.php?rt=product/product&amp;path=52&amp;product_id=70" title="Eau Parfumee au The Vert Shampoo">Eau Parfumee au The Vert Shampoo</a>

//Test  from automationteststore site
describe("Test Automationsite page Invoke & Alias", () => {
  it("Iterate list of products and count number of products on main page", () => {
    cy.visit("https://automationteststore.com");
    
    cy.get('#maincontainer .thumbnail').each(($el, index, $list) => {
      cy.log('Index: ' + index + ' : ' + $el.text());
    });
    
    cy.get('#maincontainer .thumbnail').as('productThumbnail');
    cy.get('@productThumbnail').should('have.length', 16);
    cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart');

    cy.log('Test 1 completed!');
  });
  it.only("Total all regular prices of products on main page ", () => {
    cy.visit("https://automationteststore.com");
        
    cy.get('.thumbnail').as('productThumbnail');
    // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
    //   cy.log('Index: ' + index + ' : ' + $el.text());
    // });
    var totalPrice=0;

    cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice');
    cy.get('@itemPrice').then($linkText => {
      let itemPrice = $linkText.split('$');
      let itemsPriceTotal=0;
      cy.log(itemPrice);
      cy.log($linkText);
      let i;
      for(i = 0; i<itemPrice.length; i++){
        cy.log(itemPrice[i]);
        itemsPriceTotal += Number(itemPrice[i]);
        
      }
      cy.log('Total non-sell price: ' + itemsPriceTotal);
      totalPrice += itemsPriceTotal;
      cy.log('Total Price is ' + totalPrice);
    })
    cy.log('Total Price after loop 1 is ' + totalPrice);

    cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice');
    cy.get('@saleItemPrice').then($linkText => {
      let saleItemPrice = $linkText.split('$');
      let itemsPriceTotal=0;
      cy.log(saleItemPrice);
      cy.log($linkText);
      let i;
      for(i = 0; i<saleItemPrice.length; i++){
        cy.log(saleItemPrice[i]);
        itemsPriceTotal += Number(saleItemPrice[i]);
        
      }
      cy.log('Total sale price: ' + itemsPriceTotal);
      totalPrice += itemsPriceTotal;
      cy.log('Total Price is ' + totalPrice);
    })
    .then(() => {
      cy.log('Total Price is ' + totalPrice);
      expect(totalPrice).to.equal(572.45);
    })
    
    cy.log('Test 2 completed!');
  });
});
