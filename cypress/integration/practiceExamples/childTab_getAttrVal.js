describe('Child tab get attribute value', function(){

    it('child tab with cypress get attribute value', function(){
    
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    
        cy.get('#opentab').then(function(e1){
            
            const url = e1.prop('href')
            cy.visit(url)
            cy.origin(url, () => {

                cy.get("#navbarSupportedContent a[href*='about']").click()
            })
        })
    
        
       
    })
    
    })