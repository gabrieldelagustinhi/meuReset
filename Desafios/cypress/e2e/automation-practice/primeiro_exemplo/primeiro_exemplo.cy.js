/// <reference types="cypress" />
/*  cenário Acessar com email válido
    dado: que tento enviar uma mensagem ao customer service
    quando: preencho o campo Email com um email válido "NOME@DOMINIO.COM"This is a demo store. No orders will be fulfilled.


    Então: Retorna a mensagem: "Your message has been successfully sent our team"

    cenário Acessar com email inválido
    dado: que tento enviar uma mensagem ao customer service
    quando: preencho o campo Email com um email inválido "NOME@DOMINIO.COM"
    Então: Retorna a mensagem: "Invalid email address"

    cenário Testar campo do email valido
    dado: que tento enviar uma mensagem ao customer service
    quando: preencho o campo Email com um email inválido "NOME@DOMINIO.COM"
    Então: A campo email informa que o email é inválido

*/
describe('Tela Contact Us', () => {
    beforeEach(() =>{
        cy.visit('http://automationpractice.com/index.php?controller=contact')
    })
    it('Acessar com email válido', () => {
        cy.get('#id_contact').select('Webmaster')
        cy.get('#email').type('edersonlangner@gmail.com')
        cy.get('#id_order').type('1515')
        cy.get('#message').type('Uma mensagem qualquer')
        cy.get('#submitMessage').click();
        cy.get('.alert.alert-success').should('have.text', 'Your message has been successfully sent to our team.')

    })

    it('Acessar com email inválido', () => {
        cy.get('#id_contact').select('Webmaster')
        cy.get('#email').type('^y@gmailcom')
        cy.get('#id_order').type('1616')
        cy.get('#message').type('Uma mensagem qualquer')
        cy.get('#submitMessage').click();
        cy.get('.alert-danger li').should('have.text', 'Invalid email address.')

     })
     
     it('Testar campo do email valido', () => {
        cy.get('#id_contact').select('Webmaster')
        cy.get('#email').type('^y@gmailcom')
        cy.get('#id_order').click()
        cy.get('.form-group.form-error').should('exist')

     })

 })