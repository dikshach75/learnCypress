/// <reference types="Cypress" />

describe('Test Suite',function(){

it('Handle checkboxes', function(){

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    //cy.get('#checkBoxOption2').check().should('be.checked').should('have.value','option2') //https://docs.cypress.io/api/commands/check
   
    //OR
    cy.get('#checkBoxOption2').check().should('be.checked').and('have.value','option2')
    
    //uncheck
    cy.get('#checkBoxOption2').uncheck().should('not.be.checked')

    //select multiple checkboxes 
    cy.get('input[type="checkbox"]').check(["option1","option3"])
})

})