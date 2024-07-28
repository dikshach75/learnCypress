// <reference types="Cypress" />

describe("automate calenders", function(){

    it("automate calenders", function(){

        const date = "15"
        //const monthText = "June"
        const monthCode = "6"
        const year = "2027"
        const expectedList = [monthCode, date, year]

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers")

        cy.get(".react-date-picker__inputGroup").click()

        cy.get(".react-calendar__navigation__label__labelText").click()
        cy.get(".react-calendar__navigation__label__labelText").click()
        cy.contains("button",year).click()
        //cy.contains("button",monthText).click()
        cy.get(".react-calendar__year-view__months__month").eq(monthCode-1).click()
        cy.contains("button",date).click()

        cy.get(".react-date-picker__inputGroup__input").each(($e1, index) =>{

            cy.wrap($e1).invoke('val').should('eq', expectedList[index])
    
            })
        })

    

    })
