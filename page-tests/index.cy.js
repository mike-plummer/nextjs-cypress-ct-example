import HomePage from '../pages/index'
import * as Head from 'next/head'
import Router from 'next/router'

describe('<HomePage />', () => {
    it('renders', () => {
        cy.nextMount(<HomePage />)
    })

    context('with custom HeadManager in mount', () => {
        it('sends expected content to `head`', () => {
            cy.nextMount(<HomePage />)


            cy.get('@head:updateHead').should('have.been.calledOnce')
            .and((stub) => {
                const firstCall = stub.getCall(0)
                const args = firstCall.args

                const titleElement = args[0].find((el) => el.type === 'title')
                expect(titleElement).not.to.be.undefined
                expect(titleElement.props.children).to.equal('Movies')
            })
        })
    })

    context('mocking out Head component', () => {
        it('sends expected content to `head`', () => {
            cy.spy(Head, 'default').as('head')
            cy.nextMount(<HomePage />)

            cy.get('@head').should('have.been.calledOnce')
            cy.get('@head').should((spy) => {
                const headChildContent = spy.getCalls()[0].args[0].children
                expect(headChildContent.type).to.equal('title')
            })
        })
    })
})