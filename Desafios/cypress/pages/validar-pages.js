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

}

export default ValidarPage