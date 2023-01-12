import React from 'react'
import BackButton from './BackButton'
import Router from 'next/router'

describe('<BackButton />', () => {
  context('stubbing out `useRouter` hook', () => {
    let router
    
    beforeEach(() => {
      router = {
        back: cy.stub().as('routerBack')
      }

      cy.stub(Router, 'useRouter').returns(router)
    })

    it('delegates back call to router on click', () => {
      cy.mount(<BackButton />)

      cy.get('button').click()

      cy.get('@routerBack').should((mock) => {
        expect(mock).to.have.been.calledOnce
      })
    })
  })

  context('use mock router implementation', () => {
    it('utilizes mock router on click', () => {
      cy.mountWithRouter(<BackButton />)

      cy.get('button').click()

      cy.get('@router:back').should((mock) => {
        expect(mock).to.have.been.calledOnce
      })
    })
  })
})