import React from 'react'
import StateScript from './StateScript'

describe('<StateScript />', () => {
  it('renders', () => {
    cy.readFile('public/state-script.js').then((script) => {
      cy.intercept('**/state-script.js', {
        statusCode: 200,
        body: script,
      })
      cy.mount(<StateScript />)
  
      cy.window().should((win) => {
        expect(win.__State__).to.equal(1)
      })
    })
  })
})