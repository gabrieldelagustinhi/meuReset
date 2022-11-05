class CartPage{
    btnCkeckout = '[data-test="checkout"]'

    clickCheckout(){
        cy.get(this.btnCkeckout).click()
    }

}

export default CartPage