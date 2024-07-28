

describe('alert popup',function(){

   it('Alert popups',function(){

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    cy.get('#alertbtn').click() //cypress by-default handles alert popups i.e. cypress will auto accept alerts 

    cy.get("input[value='Confirm']").click()

      //click on CANCEL
      cy.on('window.confirm', () => false)

    /*manually trigger alert popup from browser - cypress have capability to handle browser events
      which gets fired on alert open so u are firing event through cypress to get access to that alert 
*/
    // cy.on('window.alert',(str) =>{

    //     expect(str).to.equal('Hello , share this practice page and share your knowledge')
    // })

    // cy.on('window.confirm', (str) => {
    //     expect(str).to.equal('Hello , Are you sure you want to confirm?')
    // })

   }) 
})