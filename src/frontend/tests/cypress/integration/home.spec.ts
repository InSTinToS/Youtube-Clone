describe('Sidebar', () => {
  context('< 800', () => {
    beforeEach(() => {
      cy.viewport(799, 720)
    })

    it('Toggle sidebar', () => {
      cy.visit('/')
      cy.toggleSidebar(0, 240)
    })
  })

  context('>= 800', () => {
    beforeEach(() => {
      cy.viewport(1280, 720)
    })

    it('Toggle sidebar', () => {
      cy.visit('/')
      cy.toggleSidebar(240, 72)
    })
  })
})

export {}
