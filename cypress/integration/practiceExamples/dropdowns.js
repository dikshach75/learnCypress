/// <reference types="Cypress" />

describe('Test Suite',function(){

it('Handle checkboxes', function(){

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    //static dropdown
    cy.get('#dropdown-class-example').select('Option2').should('have.value','option2')
   
    //dynamic dropdown - automcomplete
    cy.get('#autocomplete').type('ind')

    cy.get('.ui-menu-item div').each(($e1, index, $list) => {

        if($e1.text()=='India'){
            cy.wrap($e1).click()
            //$e1.click()
        }
    })
    cy.get('#autocomplete').should('have.value','India')
   
})

})