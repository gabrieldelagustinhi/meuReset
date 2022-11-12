class HomePage{
    btnLogin = 'body > div.page-wrapper > header > div.panel.wrapper > div > ul > li:nth-child(3) > a' //'div.panel.wrapper > div > ul > li:nth-child(3) > a'
    url = 'https://magento.softwaretestingboard.com/'

    acessar(){
        cy.visit(this.url)
    }

    acessarCreateAnAccount(){
        cy.get(this.btnLogin).click()
    }


}

export default HomePage