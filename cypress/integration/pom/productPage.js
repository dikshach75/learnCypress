class productPage{

    checkoutPage(){
        //cy.get("#navbarResponsive > .navbar-nav > .nav-item > .nav-link")
        return cy.get("a.nav-link.btn.btn-primary")
    }

    proceedToCheckout(){
        return cy.get("button.btn-success")
    }

    getLocation(){
        return cy.get("#country")
    }

    purchase()
    {
    return cy.get("input[value='Purchase']")
    }

    termsAndConditions(){
        return cy.get("div.checkbox-primary label[for='checkbox2']")
    }

    calculateTotal(){
        return cy.get("tr td:nth-child(4) strong")
    }

    validateTotal(){
        return cy.get("tr td:nth-child(5) strong")
    }
}

//to access class variable/methods outside of this class scope
export default productPage;