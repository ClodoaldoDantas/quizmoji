describe('quiz page', () => {
  beforeEach(() => {
    cy.visit('/quiz/futebol')
  })

  it('should be able to answer and move on to the next question', () => {
    cy.get("[data-cy='current-question']").should(
      'contain.text',
      'Pergunta 1 de 5',
    )

    cy.answerQuestions(['Fortaleza'])

    cy.get("[data-cy='current-question']").should(
      'contain.text',
      'Pergunta 2 de 5',
    )
  })

  it('should be able to see the result after answering all questions', () => {
    cy.answerQuestions([
      'Fortaleza',
      'Santos',
      'Atlético Mineiro',
      'Coritiba',
      'Criciúma',
    ])

    cy.get("[data-cy='result']").should('contain.text', 'Você acertou 5 de 5!')
  })

  it('should be able to restart the quiz', () => {
    cy.answerQuestions([
      'Bahia',
      'Santos',
      'Atlético Mineiro',
      'Paraná',
      'Criciúma',
    ])

    cy.get("[data-cy='result']").should('contain.text', 'Você acertou 3 de 5!')

    cy.get('button').contains('Tentar novamente').click()

    cy.get("[data-cy='current-question']").should(
      'contain.text',
      'Pergunta 1 de 5',
    )
  })

  it('should be able to go back to the home page', () => {
    cy.answerQuestions([
      'Fortaleza',
      'Santos',
      'Atlético Mineiro',
      'Coritiba',
      'Criciúma',
    ])

    cy.get("[data-cy='result']").should('contain.text', 'Você acertou 5 de 5!')

    cy.get('a').contains('Voltar para a página inicial').click()
    cy.url().should('include', '/')
  })
})
