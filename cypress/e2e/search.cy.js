/*
This test validates the Search capability, including its use of `getServerSideProps`
This has to be an E2E test since the data hook does not execute in component tests

Next.js concepts tested here:
* Page
* getServerSideProps

*/

describe('search', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-cy="search-field"]').as('searchField')
  })

  it('handles no matches', () => {
    cy.get('@searchField').type('Fake Value')
    cy.get('button').click()

    cy.get('[data-cy^="movie-list-item"]').should('not.exist')
  })
  
  it('finds single match', () => {
    cy.get('@searchField').type('Top Gun')
    cy.get('button').click()

    cy.get('[data-cy^="movie-list-item"]').should('have.length', 1)
  })

  it('finds multiple matches', () => {
    cy.get('@searchField').type('back')
    cy.get('button').click()

    cy.get('[data-cy^="movie-list-item"]').should('have.length', 4)
  })

  it('handles no search input', () => {
    cy.get('button').click()

    cy.get('[data-cy^="movie-list-item"]').should('not.exist')
  })
})