describe('My First Test', () => {
  it('Does not do much!', () => {
    cy.visit('/') // baseUrl inside cypress.json
    cy.get('[data-testid=hello]').contains('Hello miguel') // custom typed command
  })
})

export {}
