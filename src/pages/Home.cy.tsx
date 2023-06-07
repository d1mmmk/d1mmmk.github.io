import React from 'react'
import HomePage from './Home'
import { mount } from 'cypress/react18';

describe('<HomePage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    mount(<HomePage />)
    cy.get('h1').should('have.text', 'Hello there')
  })
})