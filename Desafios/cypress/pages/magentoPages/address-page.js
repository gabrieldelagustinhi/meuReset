import { faker } from '@faker-js/faker/locale/pt_BR'

class CreateAddress{
    //Dados do usuário
    country = 'Brazil' // faker.address.country() não da para usar pq tem paises diferentes e ausentes na lista
    state = faker.address.state()
    addressStreet = faker.address.streetAddress(true)
    city = faker.address.cityName()
    zip = faker.address.zipCode()
    phone = faker.phone.number()
    //Dados de seletores
    inputCountry = '#country'
    inputState = '#region_id'
    inputAddressStreet = '#street_1'
    inputCity = '#city'
    inputZip = '#zip'
    inputPhone = '#telephone'
    btnSaveAddress = 'button.action.save.primary'

    Country(pais){
        if (pais)
            cy.get(this.inputCountry).select(pais)
        else
            cy.get(this.inputCountry).select(this.country)
    }

    State(estado){
        if (estado)
            cy.get(this.inputState).select(estado)
        else
            cy.get(this.inputState).select(this.state)
    }

    AddressStreet(endereco){
        if (endereco)
            cy.get(this.inputAddressStreet).type(endereco)
        else
            cy.get(this.inputAddressStreet).type(this.addressStreet)
    }

    City(cidade){
        if (cidade)
            cy.get(this.inputCity).type(cidade)
        else
            cy.get(this.inputCity).type(this.city)
    }

    Zip(codigo){
        if (codigo)
            cy.get(this.inputZip).type(codigo)
        else
            cy.get(this.inputZip).type(this.zip)
    }

    Phone(numero){
        if (numero)
            cy.get(this.inputPhone).type(numero)
        else
            cy.get(this.inputPhone).type(this.phone)
    }

    SavaAddress(){
       cy.get(this.btnSaveAddress).click() 
    }
}

export default CreateAddress