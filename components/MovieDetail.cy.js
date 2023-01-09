import React from 'react'
import MovieDetail from './MovieDetail'

const MockMovie = {
  id: 123,
  Title: 'My Mock Movie',
  Year: 2023,
  Plot: 'Cypress does some pretty neat component testing!'
}

describe('<MovieDetail />', () => {
  it('renders expected data', () => {
    cy.mount(<MovieDetail movie={MockMovie} />)

    cy.get('[data-cy="movie-title"]').should('have.text', MockMovie.Title)
    cy.get('[data-cy="movie-year"]').should('have.text', MockMovie.Year)
    cy.get('[data-cy="movie-plot"]').should('have.text', MockMovie.Plot)
  })
})