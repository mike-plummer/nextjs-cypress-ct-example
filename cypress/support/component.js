import '@cypress/code-coverage/support'
import { mount } from 'cypress/react18'
import { RouterContext } from 'next/dist/shared/lib/router-context';
import Router from 'next/router'

Cypress.Commands.add('mount', mount)

Cypress.Commands.add('mountWithRouter', (component, options) => {
    const createRouter = (params) => ({
        route: '/',
        pathname: '/',
        query: {},
        asPath: '/',
        basePath: '',
        back: cy.spy().as('router:back'),
        forward: cy.spy().as('router:forward'),
        push: cy.spy().as('router:push'),
        reload: cy.spy().as('router:reload'),
        replace: cy.spy().as('router:replace'),
        isReady: true,
        ...params,
    });
    const router = createRouter(options?.router || {});

    return mount(
        <RouterContext.Provider value={router}>
            {component}
        </RouterContext.Provider>,
        options
    )
})
