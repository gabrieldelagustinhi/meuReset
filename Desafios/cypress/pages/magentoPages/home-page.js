class HomePage{
    btnLogin = '.panel.header [href*="/account/create"]'
    url = 'https://magento.softwaretestingboard.com/'

    acessar(){
        cy.visit(this.url)
    }

    acessarCreateAnAccount(){
        cy.get(this.btnLogin).click()
    }


}

export default HomePage