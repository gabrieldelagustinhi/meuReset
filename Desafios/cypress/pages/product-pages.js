class ProductsPage{
    addDate = '[data-test="add-to-cart-'
    remDate = '[data-test="remove-'
    linkCart = '.shopping_cart_link'
    findDate = '"]'

    addProduct(product){
        cy.get(this.addDate + product + this.findDate).click()
    }

    remProduct(product){
        cy.get(this.remDate + product + this.findDate).click()
    }

    acessarCart(){
        cy.get(this.linkCart).click()
    }

}

export default ProductsPage