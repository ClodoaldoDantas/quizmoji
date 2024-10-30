describe('homepage', () => {
  it('should navigate to selected quiz', () => {
    cy.visit('/')
    cy.get('a').contains('Futebol').click()

    cy.url().should('include', '/quiz/futebol')
    cy.get('h3').should('contain', 'Futebol')
  })
})
