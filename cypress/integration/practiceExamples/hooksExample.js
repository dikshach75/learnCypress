/// <reference types="Cypress" />

describe("hooks example", function(){

    before(() => {
        // run before all test cases in the block
        cy.log("Test case Execution Started")
        cy.fixture("exampleHooks").then(function(data){
            this.data = data
        })
      })

    
  it("first test case", function(){

    cy.visit("https://rahulshettyacademy.com/angularpractice/")
    
    cy.get('div.form-group>input[name="name"]').type(this.data.name)

    cy.get("#exampleFormControlSelect1").select(this.data.Gender)

    cy.get("h4 input[name='name']").should('have.value',this.data.name)

    cy.get('div.form-group>input[name="name"]').should('have.attr','minlength',2)

    cy.get("#inlineRadio3").should("be.disabled")

    //cy.get(':nth-child(2) > .nav-link').click() OR cy.get("li.nav-item:nth-child(2)").click() OR
    cy.get('li.nav-item a[href*="shop"]').click()

    //this addProduct method is written/added in commands.js under support
    
    this.data.productText.forEach(function(ele){
        cy.addProduct(ele)
    })

  })
    
})