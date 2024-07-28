class homePage{

getName(){
    return cy.get("input[name='name']:nth-child(2)")
}

getGender(){
    return cy.get("#exampleFormControlSelect1")
}

getTwoWayDataBinding(){
    return cy.get(":nth-child(4) > .ng-untouched")
}

getEntrepreneur(){
    return cy.get("#inlineRadio3")
}

getShopTab(){
    return cy.get('li.nav-item a[href*="shop"]')
}

}

//to access class variable/methods outside of this class scope
export default homePage;
