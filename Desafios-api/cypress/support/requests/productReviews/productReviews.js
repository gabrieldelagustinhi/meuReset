/// <reference types="cypress"/>

Cypress.Commands.add('postProductReview', function(token, product_id, review, reviewer, reviewer_email, rating) {
    cy.request({
        method: "POST",
        url: Cypress.env('productReviews'),
        headers:{
            Authorization: token
        },
        body: {
            "product_id": product_id,
            "review": review,
            "reviewer": reviewer,
            "reviewer_email": reviewer_email,
            "rating": rating
        }
    })
})

Cypress.Commands.add('putProductReview', function(token, review, rating, id) {
    cy.request({
        method: "PUT",
        url: Cypress.env('productReviews') + '/' + id,
        headers:{
            Authorization: token
        },
        body: {
            "review": review,
            "rating": rating
        }
    })
})

Cypress.Commands.add('deleteProductReview', function(token, id, force) {
    cy.request({
        method: "DELETE",
        url: Cypress.env('productReviews') + '/' + id + '?force=' + force,
        headers:{
            Authorization: token
        }
    })
})

Cypress.Commands.add('validadeSchema', function(contrato, response) {
    return contrato.validateAsync(response)
})