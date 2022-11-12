class ValidarPage{


    validarText(endereco, text){
        cy.get(endereco).should('have.text', text)
    }

    validarLength(endereco, length){
        cy.get(endereco).should('have.length', length)
    } 
    
    validarURL(url){
        cy.url().should('be.equal', url)
    }
    
    validarContemURL(text){
        cy.url().should('include', text)
    }

    velidarSeletorExiste(text){
        cy.get(text).should('exist')
    }

}

export default ValidarPage