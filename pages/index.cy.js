import HomePage from './index'
import * as Head from 'next/head'
import Router from 'next/router'

describe('<HomePage />', () => {
    beforeEach(() => {
        cy.stub(Router, 'useRouter').returns({
            back: cy.stub().as('routerBack'),
            push: cy.stub().as('routerPush')
        })
    })

    it('renders', () => {
        cy.mount(<HomePage />)
    })

    it('sends expected content to `head`', () => {
        cy.spy(Head, 'default').as('head')
        cy.mount(<HomePage />)

        cy.get('@head').should('have.been.calledOnce')
        cy.get('@head').should((spy) => {
            const headChildContent = spy.getCalls()[0].args[0].children
            expect(headChildContent.type).to.equal('title')
        })
    })
})