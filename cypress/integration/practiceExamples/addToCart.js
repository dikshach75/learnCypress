/// <reference types="Cypress" />

describe('Test Suite',function(){

it('my first test', function(){

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('[type="search"]').type("ca")
    cy.wait(5000)
    //Handle invisible elements
    cy.get('.product:visible').should('have.length',4)
    //Parent-child chaining
    cy.get('.products').find('.product').should('have.length',4)
    //cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
    
    cy.get('.products').find('.product').each(($e1, index, $list) => {

        const prodText = $e1.find('h4.product-name').text()
        if(prodText.includes('Carrot')){
            cy.wrap($e1).contains('ADD TO CART').click()
        }
    })
   
    
})

})
