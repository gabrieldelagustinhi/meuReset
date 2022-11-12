/// <reference types="cypress" />
//Importanto as pages
import HomePage from '../../../pages/magentoPages/home-page'
import ValidarPage from '../../../pages/magentoPages/validate-page'
import CreateAccount from '../../../pages/magentoPages/createAccount-page'
import MyAccount from '../../../pages/magentoPages/myAccount-page'
import CreateAddress from '../../../pages/magentoPages/address-page'
import AddressBook from '../../../pages/magentoPages/addressBook-page'

describe('Cadastro de Usuário', () =>{
    //Declarando as pages
    const homePage = new HomePage()
    const validarPage = new ValidarPage()
    const createAccount = new CreateAccount()
    const myAccount = new MyAccount()
    const createAddress = new CreateAddress()
    const addressBook = new AddressBook()

    it('Acessar página, cadastrar usuário, enderço e finalizar', () => {
        homePage.acessar()
        validarPage.validarContemURL('magento')
        homePage.acessarCreateAnAccount()
        validarPage.validarText('.base','Create New Customer Account')
        createAccount.FirstName() //Caso queira testar com nome específico, só colocar o mesmo dentro dos () entre ''
        createAccount.LastName()  //Caso queira testar com nome específico, só colocar o mesmo dentro dos () entre ''
        createAccount.Email()     //Caso queira testar com email específico, só colocar o mesmo dentro dos () entre ''
        createAccount.Password()  //Caso queira testar com senha específico, só colocar o mesmo dentro dos () entre ''
        createAccount.Create()
        validarPage.validarText('.message-success > div','Thank you for registering with Fake Online Clothing Store.')
        myAccount.acessarEditAddress()
        validarPage.validarText('.base','Add New Address')
        createAddress.Country()       //Caso queira testar com pais específico, só colocar o mesmo dentro dos () entre '', padrão 'Brazil'
        createAddress.State()         //Caso queira testar com estado específico existente no pais add, só colocar o mesmo dentro dos () entre ''
        createAddress.AddressStreet() //Caso queira testar com endereço específico, só colocar o mesmo dentro dos () entre ''
        createAddress.City()          //Caso queira testar com cidade específico, só colocar o mesmo dentro dos () entre ''
        createAddress.Zip()           //Caso queira testar com código postal específico, só colocar o mesmo dentro dos () entre ''
        createAddress.Phone()         //Caso queira testar com telefone específico, só colocar o mesmo dentro dos () entre ''
        createAddress.SavaAddress()
        validarPage.validarText('div.page.messages > div:nth-child(2) > div > div > div', 'You saved the address.')
        addressBook.acessarMyAccount()
        validarPage.validarContemURL('customer/account')
        validarPage.validarText('.base','My Account')
    })

    it('Teste de quebra de página', () => {
        homePage.acessar()
        validarPage.validarContemURL('magento')
        homePage.acessarCreateAnAccount()
        validarPage.validarText('.base','Create New Customer Account')
    })
})