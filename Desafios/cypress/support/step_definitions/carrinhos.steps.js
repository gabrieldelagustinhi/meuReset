import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
//Se for comandos não precisa importar
//Se for pages tem que importar

import HomePage from '../../pages/magentoPages/home-page'
import ValidarPage from '../../pages/magentoPages/validate-page'
import CreateAccount from '../../pages/magentoPages/createAccount-page'
import MyAccount from '../../pages/magentoPages/myAccount-page'
import CreateAddress from '../../pages/magentoPages/address-page'
import AddressBook from '../../pages/magentoPages/addressBook-page'

const homePage = new HomePage()
const validarPage = new ValidarPage()
const createAccount = new CreateAccount()
const myAccount = new MyAccount()
const createAddress = new CreateAddress()
const addressBook = new AddressBook()

Given("eu esteja na página de cadastro", () => {
    homePage.acessar()
    validarPage.validarContemURL('magento')
    homePage.acessarCreateAnAccount()
    validarPage.validarText('.base','Create New Customer Account')
})

When("eu preencho os dados corretos e clico em cadastrar", () => {
    createAccount.FirstName()
    createAccount.LastName()
    createAccount.Email()
    createAccount.Password()
    createAccount.Create()
})

Then("eu recebo a mensagem de usuário cadastrado", () => {
    validarPage.validarText('.messages [data-bind*="(message.text)"]','Thank you for registering with Fake Online Clothing Store.')
})
