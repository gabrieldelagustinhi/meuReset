class AddressBook{

    btnMyAccount = '#block-collapsible-nav > ul > li:nth-child(1)'

    acessarMyAccount(){
        cy.get(this.btnMyAccount).click()
    }

}

export default AddressBook