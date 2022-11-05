/// <reference types="cypress" />

describe('swag Labs', () =>{
    beforeEach(() =>{
        cy.visit('https://www.saucedemo.com')             //Acessa a uma url
    })

    it('Deve acessar o swaglabs com sucesso', () =>{
        cy.url().should('include', 'saucedemo')           //Verifica se deu certo
    })

    it('Verificar se bloqueia login sem dados de usuário e senha', () => {
        cy.get('#login-button').click()                                            //Acha o id e clicla no botton
        cy.get('h3').should('have.text', 'Epic sadface: Username is required')     //Verifica se aparece a mensagem de erro 
            // 'h3[data-test="error"]' ou 'form h3' ou '.error-message-container' também funciona no lugar de 'h3'
    })

    it('Prencheer somente usuário e tentar logar', () => {
        cy.get('[name="user-name"]').type('standard_user')                         //Entra no campo do usuário e digita o usuário
                //'#user-name' ou '[data-test="username"]' funcionam também
        cy.get('[data-test="login-button"]').click()                               //Acha o id e clicla no botton
                //'#login-button' ou '[name="login-button"]' funcionam também
        cy.get('h3').should('have.text', 'Epic sadface: Password is required')     //Verifica se aparece a mensagem de erro 
                // 'h3[data-test="error"]' ou 'form h3' ou '.error-message-container' também funciona no lugar de 'h3'
    })
    
    it('Login com sucesso', () => {
        cy.get('[name="user-name"]').type('standard_user')                         //Entra no campo do usuário e digita o usuário
                //'#user-name' ou '[data-test="username"]' funcionam também
        cy.get('[data-test="password"]').type('secret_sauce')
                //Outros também dão certo confome testo anterior  
        cy.get('#login-button').click()                                             //Acha o id e clicla no botton
                //'[data-test="login-button"]' ou '[name="login-button"]' funcionam também
        cy.url().should('be.equal', 'https://www.saucedemo.com/inventory.html')     //Verifica se a url direcionada é igual
                //cy.url().should('include', 'inventory')  Verifica se contem inventory na url
                //Pode usar tmbm todo o texto https://www.saucedemo.com/inventory.html
                //cy.url().should('eq', 'https://www.saucedemo.com/inventory.html') também funciona e equal no lugar de eq também
        cy.get('.title').should('have.text', 'Products')                            //Verifica se tem o testo no title
    })

    it('Adicionar um produto no carrinho', () => {
        //validar se foi para o carrinho e verifica se tem 1 quantidade
        cy.get('[name="user-name"]').type('standard_user')                               //Entra no campo do usuário e digita o usuário
        cy.get('[data-test="password"]').type('secret_sauce')                            //Entra no campo do senha e digita a senha
        cy.get('#login-button').click()                                                  //Acha o id e clicla no botton
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()             //Adiciona o item Sauce Labs Fleece Jacket ao carrinho
        //cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()                //Caso fosse adicionar mais um item
        cy.get('.shopping_cart_link').click()                                            //Entra no carrinho
        cy.get('.cart_item').should('have.length', 1)                                    //Verifica se tem somente um tipo de produto no carrinho
        cy.get('.cart_quantity').should('have.text', '1')                                //Verifica se tem 1 unidade do item
        cy.get('.inventory_item_name').should('have.text', 'Sauce Labs Fleece Jacket')   // Verifica se o item tem o nome Sauce Labs Fleece Jacket
    })
})
