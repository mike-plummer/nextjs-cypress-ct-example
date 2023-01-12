import React from 'react'
import TitleBar from './TitleBar'

describe('<TitleBar />', () => {
  it('renders', () => {
    cy.mount(<TitleBar />)
  })
})