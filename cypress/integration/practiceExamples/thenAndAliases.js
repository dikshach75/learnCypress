/// <reference types="Cypress" />

describe('Test Suite',function(){

it('test', function(){

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
   //then
    cy.get('.brand').then(function(logoEle){
        cy.log(logoEle.text()) //these logs will be printed on cypress
    })

    //assert the text we get from above steps with expected
    cy.get('.brand').should('have.text','GREENKART')
   
    cy.get('[type="search"]').type("ca")
    cy.wait(5000)
    
    //aliases
    cy.get('.products').as('prodLocator')

    cy.get('@prodLocator').find('.product').should('have.length',4).then((function(){
        console.log('4 products are present') //to view console logs -> check console on dev tools
    }))

    
    
})

})