import '@cypress/code-coverage/support'

import { mount } from 'cypress/react18'

Cypress.Commands.add('mount', mount)
