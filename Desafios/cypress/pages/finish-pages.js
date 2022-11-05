class FinishPage{
    btnFinish = '[data-test="finish"]'


    continuar(){
        cy.get(this.btnFinish).click()
    }

}

export default FinishPage