import tokenFixture from '../../fixtures/token.json'

describe('Coupons', () => {
  //Open Cypress | set ".only"

  it('Listar todos os coupons', () => {
    cy.getCouponWooCommerce(tokenFixture.token).then((response) => {
      
    })
  })
})