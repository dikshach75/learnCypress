/// <reference types="Cypress" />

describe('VisibleInvisbleElementHandleSuite',function(){

    it('VisibleInvisbleElementHandle',function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //Handle visble-invisible elements
        cy.get('#displayed-text').should('be.visible')

        cy.get('#hide-textbox').click()

        cy.get('#displayed-text').should('not.be.visible')

        cy.get('#show-textbox').click()

        cy.get('#displayed-text').should('be.enabled')



    })
})