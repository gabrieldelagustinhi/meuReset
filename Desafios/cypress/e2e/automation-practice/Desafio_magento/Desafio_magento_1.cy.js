/// <reference types="cypress" />

import { faker } from '@faker-js/faker/locale/pt_BR'


describe('Cadastro de usuário', () =>{

    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    const email = faker.internet.email(firstName, lastName)
    const password = faker.internet.password(8, false, /\w/, '#')
    const country = 'Brazil'            // faker.address.country() não da para usar pq tem paises diferentes e ausentes na lista
    const state = faker.address.state()
    const addressStreet = faker.address.streetAddress(true)
    const city = faker.address.cityName()
    const zip = faker.address.zipCode()
    const phone = faker.phone.number()

    it('Acessar página, cadastrar e finalizar', () => {
        cy.visit('https://magento.softwaretestingboard.com/') //
        cy.url().should('include', 'magento')//
        cy.get('div.panel.wrapper > div > ul > li:nth-child(3) > a').click()//
        cy.url().should('include', 'customer/account/create')//
        cy.get('#firstname').type(firstName)//
        cy.get('#lastname').type(lastName)//
        cy.get('#email_address').type(email)//
        cy.get('#password').type(password)//
        cy.get('#password-confirmation').type(password)//
        cy.get('button.action.submit.primary').click()//
        cy.url().should('include', 'customer/account/')
        cy.get('.message-success > div').should('have.text', 'Thank you for registering with Fake Online Clothing Store.')//
        cy.get('[data-ui-id="default-billing-edit-link"]').click() //
        cy.url().should('include', 'customer/address/edit/')//
        cy.get('#country').select(country)//
        cy.get('#region_id').select(state)//
        cy.get('#street_1').type(addressStreet)
        cy.get('#city').type(city)
        cy.get('#zip').type(zip)
        cy.get('#telephone').type(phone)
        cy.get('button.action.save.primary').click() // button.action.save or [data-action="save-address"]
        cy.get('div.page.messages > div:nth-child(2) > div > div > div').should('have.text', 'You saved the address.')
        cy.get('#block-collapsible-nav > ul > li:nth-child(1)').click()
        cy.url().should('include', 'customer/account')
        cy.get('[data-ui-id="page-title-wrapper"]').should('exist')
        
        


        

    })
})