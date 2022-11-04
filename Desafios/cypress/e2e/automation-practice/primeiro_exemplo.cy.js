/// <reference types="cypress" />

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