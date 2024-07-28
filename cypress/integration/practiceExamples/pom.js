/// <reference types="Cypress">
import homePage from "../pom/homePage"
import productPage from "../pom/productPage"

describe("Example of POM", function(){

    before(() => {
        // run before all test cases in the block
        cy.log("Test case Execution Started")
        cy.fixture("exampleHooks").then(function(data){
            this.data = data
        })
      })

    it("POM", function(){

        const hp = new homePage()
        const prodPg = new productPage()

        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        hp.getName().type(this.data.name)

        hp.getGender().select(this.data.Gender)
    
        hp.getTwoWayDataBinding().should('have.value',this.data.name)

        hp.getEntrepreneur().should("be.disabled")

        hp.getShopTab().click()

        Cypress.config('defaultCommandTimeout',8000)

        this.data.productText.forEach(function(ele){
            cy.addProduct(ele)
        })

        prodPg.checkoutPage().click()

        var total = 0

        prodPg.calculateTotal().each(($e1, index, $list) =>{
    
            var price = $e1.text().split(" ")
            price = price[1].trim()
            total = parseInt(total) + parseInt(price)
        }).then(function(){
            cy.log(total)
        })

        prodPg.validateTotal().then(function(ele){

            var totalProdPrice = ele.text().split(" ")
            totalProdPrice = totalProdPrice[1].trim()
            cy.log(totalProdPrice)
            expect(parseInt(total)).to.equal(parseInt(totalProdPrice))
        })
        


        prodPg.proceedToCheckout().click()

        prodPg.getLocation().type(this.data.location)

        prodPg.termsAndConditions().click()

        prodPg.purchase().click()

        cy.get(".alert").then(function(ele){
            const actualTxt = ele.text()
            expect(actualTxt.includes("Success!")).to.be.true
        })

    })
})