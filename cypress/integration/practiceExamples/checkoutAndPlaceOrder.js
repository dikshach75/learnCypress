/// <reference types="Cypress" />

describe('Test Suite',function(){

it('my first test', function(){

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('[type="search"]').type("ca")
    cy.wait(5000)
    
    cy.get('.products').find('.product').each(($e1, index, $list) => {

        const prodText = $e1.find('h4.product-name').text()
        if(prodText.includes('Carrot')){
            cy.wrap($e1).contains('ADD TO CART').click()
        }
    })

    //perform click action on cart
    cy.get('.cart-icon').click()

    //perform checkout
    //cy.get('.action-block').contains('CHECKOUT').click()
    cy.contains('PROCEED TO CHECKOUT').click()

    cy.get('.promoCode').type('ABCD')
    cy.contains('Apply').click()
    cy.wait(5000)
    cy.contains('Place Order').click()
    cy.get('select').select('India')
    cy.get('.chkAgree').click()
    cy.contains('Proceed').click()



   
    
})

})