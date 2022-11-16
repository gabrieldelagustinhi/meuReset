import tokenFixture from '../../fixtures/token.json'
import couponsFixture from '../../fixtures/coupons.json'
import { faker } from '@faker-js/faker'
import statusFixture from '../../fixtures/status.json'
import couponWooCommerceSchema from '../../contracts/coupon.contract'

describe('Coupons', () => {

  it('Listar todos os coupons', () => {
    cy.getCouponsWooCommerce(tokenFixture.token).then((response) => {
      expect(response).to.exist
      expect(response.status).to.eq(statusFixture.ok)
      for (var i=0; i <response.body.length; i++) {
        return couponWooCommerceSchema.validateAsync(response.body[i])
      }
    })
  })

  it('Criar coupon', () => {
    var code = faker.datatype.uuid()
    cy.postCouponsWooCommerce(
      tokenFixture.token,
      code,
      couponsFixture.couponValido.discount_type,
      couponsFixture.couponValido.amount,
      couponsFixture.couponValido.individual_use,
      couponsFixture.couponValido.exclude_sale_items,
      couponsFixture.couponValido.minimum_amount
    ).then((response) => {
      expect(response.status).to.eq(statusFixture.created)
      expect(response.body.code).to.eq(code)
      expect(response.body.discount_type).to.eq(couponsFixture.couponValido.discount_type)
      expect(response.body.amount).to.eq(couponsFixture.couponValido.amount)
      expect(response.body.individual_use).to.eq(couponsFixture.couponValido.individual_use)
      expect(response.body.exclude_sale_items).to.eq(couponsFixture.couponValido.exclude_sale_items)
      expect(response.body.minimum_amount).to.eq(couponsFixture.couponValido.minimum_amount)
      return couponWooCommerceSchema.validateAsync(response.body)
    })
  })

  it('Editar coupon', () => {
    var code = faker.datatype.uuid()
    cy.postCouponsWooCommerce(
      tokenFixture.token,
      code,
      couponsFixture.couponValido.discount_type,
      couponsFixture.couponValido.amount,
      couponsFixture.couponValido.individual_use,
      couponsFixture.couponValido.exclude_sale_items,
      couponsFixture.couponValido.minimum_amount
    ).then((response) => {
      var codeEditar = faker.datatype.uuid()
      var id = response.body.id
      cy.putCouponsWooCommerce(
        tokenFixture.token,
        codeEditar,
        couponsFixture.couponEditar.discount_type,
        couponsFixture.couponEditar.amount,
        couponsFixture.couponEditar.individual_use,
        couponsFixture.couponEditar.exclude_sale_items,
        couponsFixture.couponEditar.minimum_amount,
        id
      ).then((response) => {
        expect(response.status).to.eq(statusFixture.ok)
        return couponWooCommerceSchema.validateAsync(response.body)
      })
    })
  })

  it('Deletar coupon', () => {
    var code = faker.datatype.uuid()
    cy.postCouponsWooCommerce(
      tokenFixture.token,
      code,
      couponsFixture.couponValido.discount_type,
      couponsFixture.couponValido.amount,
      couponsFixture.couponValido.individual_use,
      couponsFixture.couponValido.exclude_sale_items,
      couponsFixture.couponValido.minimum_amount
    ).then((response) => {
      var id = response.body.id
      cy.deleteCouponsWooCommerce(
        tokenFixture.token,
        id,
        couponsFixture.couponDeletar.force
      ).then((response) => {
        expect(response.status).to.eq(statusFixture.ok)
        expect(response.body.code).to.eq(code)
        expect(response.body.discount_type).to.eq(couponsFixture.couponValido.discount_type)
        expect(response.body.amount).to.eq(couponsFixture.couponValido.amount)
        expect(response.body.individual_use).to.eq(couponsFixture.couponValido.individual_use)
        expect(response.body.exclude_sale_items).to.eq(couponsFixture.couponValido.exclude_sale_items)
        expect(response.body.minimum_amount).to.eq(couponsFixture.couponValido.minimum_amount)
        return couponWooCommerceSchema.validateAsync(response.body)
      })
    })
  })
})