import React from 'react'
import BackButton from './BackButton'
import Router from 'next/router'

describe('<BackButton />', () => {
  let router
  
  beforeEach(() => {
    router = {
      back: cy.stub().as('routerBack')
    }

    cy.stub(Router, 'useRouter').returns(router)
  })

  it('renders', () => {
    cy.mount(<BackButton />)

    cy.get('button').should('be.visible')
  })

  it('delegates back call to router on click', () => {
    cy.mount(<BackButton />)

    cy.get('button').click()

    cy.get('@routerBack').should((mock) => {
      expect(mock).to.have.been.calledOnce
    })
  })
})