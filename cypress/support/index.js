import { Before } from 'cypress-cucumber-preprocessor/steps'

import './commands'

Before(() => {
  cy.log('Cucumber hook!')
})

before(() => {
  cy.log('Mocha Hook!')
})
