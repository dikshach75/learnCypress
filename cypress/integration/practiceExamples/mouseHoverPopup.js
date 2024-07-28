/// <reference types="Cypress" />

describe("mouse hover pop-up",function(){

    it("Handle Mouse Hover pop-up", function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //cy.get("#mousehover").invoke('show') we cannot use id=mousehover as it is not immediate parent of elements which we r going to show

        cy.get(".mouse-hover-content").invoke('show')
        cy.contains('Top').click() //after clicking on top url gates changed 
        cy.url().should('include','top')

    })
})