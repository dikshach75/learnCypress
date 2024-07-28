describe('Web table', function(){

it('Cypress- webTable', function(){

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    //get hold of 2nd column and then iterate through column where it includes text = python using for each loop
    //now we got index(i.e.courses) of column whose price we want to fetch but first we need to fetch next sibling
    //i.e.price so will use next()
    cy.get("tr td:nth-child(2)").each(($e1, index, $list) => {

        const text = $e1.text()
        if(text.includes("Master Selenium Automation in simple Python Language")){
            cy.get('tr td:nth-child(2)').eq(index).next().then(function(priceText){
                const prText = priceText.text()
                expect(prText).to.equal("25")
            })
        }
    })
})

})