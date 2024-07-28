/// <reference types="Cypress" />

describe('VisibleInvisbleElementHandleSuite',function(){

    it('VisibleInvisbleElementHandle',function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //Handle radio buttons
        cy.get('input[value="radio2"]').click().should('be.checked')  //OR

        cy.get('input[value="radio3"]').check().should('be.checked')

    })
})