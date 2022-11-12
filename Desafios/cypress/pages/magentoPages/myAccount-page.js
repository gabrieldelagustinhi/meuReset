class MyAccount{

    btnEditAddress = '[data-ui-id="default-billing-edit-link"]'

    acessarEditAddress(){
        cy.get(this.btnEditAddress).click()
    }

}

export default MyAccount