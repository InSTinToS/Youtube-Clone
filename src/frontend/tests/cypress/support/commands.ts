Cypress.Commands.add('dataCy', value => {
  return cy.get(`[data-cy=${value}]`)
})

Cypress.Commands.add('toggleSidebar', (before: number, after: number) => {
  cy.get('[data-testid=sidebar]').as('Sidebar')
  cy.get('[data-testid=hamburger]').as('Hamburger')

  cy.get('@Sidebar')
    .should('have.css', 'width')
    .and('match', RegExp(`${before}px`))

  cy.get('@Hamburger').click()

  cy.get('@Sidebar')
    .should('have.css', 'width')
    .and('match', RegExp(`${after}px`))
})

export {}
