import { Given } from 'cypress-cucumber-preprocessor/steps'

Given('I log something', () => {
  cy.log('What a fancy example ;)')
})
