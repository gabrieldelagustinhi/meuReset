/// <reference types="cypress"/>
import tokenFixture from '../../fixtures/token.json'
import statusFixture from '../../fixtures/status.json'
import productReviewsFixture from '../../fixtures/productReviews.json'
import { faker } from '@faker-js/faker/locale/pt_BR'
import { deleteProductReviewSchema, productReviewsSchema } from '../../contracts/productReviews.contract'


describe('ProductReviews ', () => {
 
  var review
  var reviewer
  var reviewer_email
  const reviewNew = 'Um otimo produto, recomendo!'
  const rating = 5

  beforeEach(() => {
    review = faker.lorem.words(3)
    reviewer = faker.name.fullName()
    reviewer_email = faker.internet.email(reviewer)
  })

  it('Criar um product review', () => {
    cy.postProductReview(
      tokenFixture.token,
      productReviewsFixture.postReview.product_id,
      review,
      reviewer,
      reviewer_email,
      productReviewsFixture.postReview.rating
    ).then((responsePost) => {
      expect(responsePost.status).to.eq(statusFixture.created)
      expect(responsePost.body.product_id).to.eq(productReviewsFixture.postReview.product_id)
      expect(responsePost.body.review).to.eq(review)
      expect(responsePost.body.reviewer).to.eq(reviewer)
      expect(responsePost.body.reviewer_email).to.eq(reviewer_email)
      expect(responsePost.body.rating).to.eq(productReviewsFixture.postReview.rating)
      var id = responsePost.body.id
      cy.deleteProductReview(
        tokenFixture.token,
        id,
        productReviewsFixture.deleteReview.force
      )
      cy.validadeSchema(productReviewsSchema, responsePost.body)
    })
  })

  it('Alterar um product review', () => {
    cy.postProductReview(
      tokenFixture.token,
      productReviewsFixture.postReview.product_id,
      review,
      reviewer,
      reviewer_email,
      productReviewsFixture.postReview.rating
    ).then((responsePost) => {
      expect(responsePost.status).to.eq(statusFixture.created)
      var id = responsePost.body.id
      cy.putProductReview(
        tokenFixture.token,
        reviewNew,
        rating,
        id
      ).then((responsePut) => {
        expect(responsePut.status).to.eq(statusFixture.ok)
        expect(responsePut.body.review).to.eq(reviewNew)
        expect(responsePut.body.rating).to.eq(rating)
        cy.deleteProductReview(
          tokenFixture.token,
          id,
          productReviewsFixture.deleteReview.force
        )
        return productReviewsSchema.validateAsync(responsePut.body)
        //cy.validadeSchema(productReviewsSchema, responsePut.body)
      })
    })
  })


  it('Deletar um product review', () => {
    cy.postProductReview(
      tokenFixture.token,
      productReviewsFixture.postReview.product_id,
      review,
      reviewer,
      reviewer_email,
      productReviewsFixture.postReview.rating
    ).then((responsePost) => {
      expect(responsePost.status).to.eq(statusFixture.created)
      var id = responsePost.body.id
      var force = true
      cy.deleteProductReview(
        tokenFixture.token,
        id,
        productReviewsFixture.deleteReview.force
      ).then((responseDel) => {
        expect(responseDel.status).to.eq(statusFixture.ok)
        expect(responseDel.body.deleted).to.eq(force)
        expect(responseDel.body.previous.id).to.eq(id)
        cy.validadeSchema(deleteProductReviewSchema, responseDel.body)
      })
    })
  })
})