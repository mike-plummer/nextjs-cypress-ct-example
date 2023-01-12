import React from 'react'
import StateScript from './StateScript'

describe('<StateScript />', () => {
  afterEach(() => {
    cy.window().should((win) => {
      delete win.__State__
    })
  })

  it('loads internal script', () => {
    cy.mount(<StateScript />)

    cy.window().should((win) => {
      expect(win.__State__).to.equal(1)
    })
  })

  it('mocks internal script', () => {
    cy.intercept('**/state-script.js', {
      statusCode: 200,
      body: '',
    })
    cy.mount(<StateScript />)

    cy.window().should((win) => {
      expect(win.__State__).to.be.undefined
    })
  })
})