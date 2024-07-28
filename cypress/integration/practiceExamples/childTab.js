describe('Child tab', function(){

it('child tab with cypress', function(){

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    //jquery to remove "target" attribute at run-time so child window
    // will open on same page instead of opening in new tab
    cy.get('#opentab').invoke('removeAttr','target').click() 

    cy.origin("https://www.qaclickacademy.com/", () =>{

        cy.get("#navbarSupportedContent a[href*='about']").click(
            cy.get(".mt-50 h2").should("contain", "Welcome to QAClick Academy ")
        )
    })
})

})