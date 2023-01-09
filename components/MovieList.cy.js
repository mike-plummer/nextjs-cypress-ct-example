import React from 'react'
import MovieList from './MovieList'

describe('<MovieList />', () => {
  it('renders list items', () => {
    const movies = [
      { id: 1, Title: 'A' },
      { id: 2, Title: 'B' },
      { id: 3, Title: 'C' },
    ]
    cy.mount(<MovieList movies={movies} />)

    cy.get('[data-cy^="movie-list-item"]').should('have.length', 3)
  })

  it('handles empty list', () => {
    cy.mount(<MovieList movies={[]} />)

    cy.get('[data-cy^="movie-list-item"]').should('not.exist')
  })
})