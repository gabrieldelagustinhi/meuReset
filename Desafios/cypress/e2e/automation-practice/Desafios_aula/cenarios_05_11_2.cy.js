/// <reference types="cypress" />

import LoginPage from '../../../pages/login-pages'
import ProductsPage from '../../../pages/product-pages'
import CartPage from '../../../pages/cart-pages'
import CheckOutPage from '../../../pages/checkout-pages'
import FinishPage from '../../../pages/finish-pages'
import ValidarPage from '../../../pages/validar-pages'

describe('swag Labs', () =>{

    const loginPage = new LoginPage()
    const productPage = new ProductsPage()
    const cartPage = new CartPage()
    const checkOutPage = new CheckOutPage()
    const finishPage = new FinishPage()
    const validarPage = new ValidarPage()

    const username = 'standard_user'
    const password = 'secret_sauce'
    const product = 'sauce-labs-fleece-jacket'

    beforeEach(() =>{
        loginPage.acessar()             //Acessa a uma url
    })

    it('Deve acessar o swaglabs com sucesso', () =>{
        validarPage.validarContemURL('saucedemo')           //Verifica se deu certo
    })

    it('Verificar se bloqueia login sem dados de usuário e senha', () => {
        loginPage.login('', '')                                            //Acha o id e clicla no botton
        validarPage.validarText('h3', 'Epic sadface: Username is required')     //Verifica se aparece a mensagem de erro 
            // 'h3[data-test="error"]' ou 'form h3' ou '.error-message-container' também funciona no lugar de 'h3'
    })

    it('Prencheer somente usuário e tentar logar', () => {
        loginPage.login(username, '')       //Podia usar '{enter}' ou '{backspace}' e daí nào precisa os if lá no login-pages
        validarPage.validarText('h3', 'Epic sadface: Password is required')  //Verifica se aparece a mensagem de erro 
            // 'h3[data-test="error"]' ou 'form h3' ou '.error-message-container' também funciona no lugar de 'h3'
    })
    
    it('Login com sucesso', () => {
        loginPage.login(username, password)
        validarPage.validarURL('https://www.saucedemo.com/inventory.html')
        validarPage.validarText('.title', 'Products')                            //Verifica se tem o texto no title
    })

    it('Adicionar um produto no carrinho', () => {
        //validar se foi para o carrinho e verifica se tem 1 quantidade
        loginPage.login(username, password)
        productPage.addProduct(product)
        productPage.acessarCart()                                           //Entra no carrinho
        validarPage.validarLength('.cart_item', 1)                          //Verifica se tem somente um tipo de produto no carrinho 
        validarPage.validarText('.cart_quantity', '1')                                   //Verifica se tem 1 unidade do item 
        validarPage.validarText('.inventory_item_name', 'Sauce Labs Fleece Jacket')      //Verifica se tem o item Sauce Labs Fleece Jacket ao carrinho
        })

    it('Remover um produto na pagina inicial', () => {
        loginPage.login(username, password)
        productPage.addProduct(product)
        productPage.remProduct(product)
        productPage.acessarCart()                                           //Entra no carrinho
        validarPage.validarLength('.cart_item', 0)                                   //Verifica se tem somente um tipo de produto no carrinho
        
    })

    it('Remover um produto no carrinho', () => {
        loginPage.login(username, password)
        productPage.addProduct(product)
        productPage.acessarCart()                                            //Entra no carrinho
        productPage.remProduct(product)   
        validarPage.validarLength('.cart_item', 0)                                        
    })

    it('Finalizar compra', () => {
        loginPage.login(username, password)
        productPage.addProduct(product)
        productPage.acessarCart()                                            //Entra no carrinho
        cartPage.clickCheckout()
        checkOutPage.prencheerFirst('Gabriel')
        checkOutPage.prencheerLast('Delagustinhi')
        checkOutPage.prencheerDados('95760-000')
        checkOutPage.continuar()
        finishPage.continuar()
        validarPage.validarText('.complete-header', 'THANK YOU FOR YOUR ORDER')

    })

})
