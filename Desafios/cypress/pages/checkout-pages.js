class CheckOutPage{
    inputFirstName = '[data-test="firstName"]'
    inputLastName = '[data-test="lastName"]'
    inputPostalCode = '[data-test="postalCode"]'
    btnContinuar = '[data-test="continue"]'

    prencheerFirst(firstName){
        cy.get(this.inputFirstName).type(firstName)
    }

    prencheerLast(lastName){
        cy.get(this.inputLastName).type(lastName)
    }

    prencheerDados(postalCode){
        cy.get(this.inputPostalCode).type(postalCode)
    }

    continuar(){
        cy.get(this.btnContinuar).click()
    }

}

export default CheckOutPage