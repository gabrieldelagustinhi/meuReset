import { faker } from '@faker-js/faker/locale/pt_BR'

class CreateAccount{
    //Dados do usuário
    firstName = faker.name.firstName()
    lastName = faker.name.lastName()
    email = faker.internet.email(this.firstName, this.lastName)
    password = faker.internet.password(8, false, /\w/, '#')
    //Dados de seletores
    inputFirstName = '#firstname'
    inputLastName = '#lastname'
    inputEmail = '#email_address'
    inputPassword = '#password'
    inputPasswordConfirm = '#password-confirmation'
    btnCreateAccount = 'button.action.submit.primary'

    FirstName(fName){
        if (fName)
            cy.get(this.inputFirstName).type(fName)
        else
            cy.get(this.inputFirstName).type(this.firstName)
    }

    LastName(lName){
        if (lName)
            cy.get(this.inputLastName).type(lName)
        else
            cy.get(this.inputLastName).type(this.lastName)
    }

    Email(mail){
        if (mail)
            cy.get(this.inputEmail).type(mail)
        else
            cy.get(this.inputEmail).type(this.email)
    }

    Password(pWord){
        if (pWord){
            cy.get(this.inputPassword).type(pWord)
            cy.get(this.inputPasswordConfirm).type(pWord)
        }else{
            cy.get(this.inputPassword).type(this.password)
            cy.get(this.inputPasswordConfirm).type(this.password)
        }
    }

    Create(){
       cy.get(this.btnCreateAccount).click() 
    }
}

export default CreateAccount