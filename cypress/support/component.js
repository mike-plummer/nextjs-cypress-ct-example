import '@cypress/code-coverage/support'
import { mount } from 'cypress/react18'
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { HeadManagerContext } from 'next/dist/shared/lib/head-manager-context'
import Router from 'next/router'

Cypress.Commands.add('mount', mount)

Cypress.Commands.add('nextMount', (component, options) => {
    const createRouter = (params) => ({
        route: '/',
        pathname: '/',
        query: {},
        asPath: '/',
        basePath: '',
        back: cy.stub().as('router:back'),
        forward: cy.stub().as('router:forward'),
        push: cy.stub().as('router:push'),
        reload: cy.stub().as('router:reload'),
        replace: cy.stub().as('router:replace'),
        isReady: true,
        ...params,
    });
    const router = createRouter(options?.router || {});

    const createHeadManager = (params) => ({
        updateHead: cy.stub().as('head:updateHead'),
        mountedInstances: new Set(),
        updateScripts: cy.stub().as('head:updateScripts'),
        scripts: new Set(),
        getIsSsr: () => false,
        appDir: false,
        nonce: '_',
        ...params
    })

    const headManager = createHeadManager(options?.head || {})

    return mount(
        <HeadManagerContext.Provider value={headManager}>
            <RouterContext.Provider value={router}>
                {component}
            </RouterContext.Provider>
        </HeadManagerContext.Provider>,
        options
    )
})
