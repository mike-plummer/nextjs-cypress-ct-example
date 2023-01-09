import '@cypress/code-coverage/support'
import './component-next-image-handler.js'

import { mount } from 'cypress/react18'

Cypress.Commands.add('mount', mount)
