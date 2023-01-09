import React from 'react'
import Logo from './Logo'

describe('<Logo />', () => {
  it('renders', () => {
    cy.mount(<Logo />)
  })
})