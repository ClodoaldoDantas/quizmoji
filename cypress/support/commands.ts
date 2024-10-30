/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    answerQuestions(answers: string[]): Chainable<void>
  }
}

Cypress.Commands.add('answerQuestions', (answers) => {
  for (const answer of answers) {
    cy.get('label').contains(answer).click()
    cy.get("[data-cy='reply-btn']").click()
  }
})
