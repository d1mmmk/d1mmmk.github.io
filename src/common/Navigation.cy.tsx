import React from 'react'
import Navigation from './Navigation'
import { mount } from 'cypress/react18';
import { MemoryRouter } from 'react-router-dom';
import { navigationItems } from 'App';

describe('<Navigation />', () => {
  it('renders', () => {
    mount(<MemoryRouter>
      <Navigation items={navigationItems} />
    </MemoryRouter>,)
    const testingIndex = 1;
    const testingInItem = navigationItems[testingIndex];
    const testingInNav = cy.get('nav > a').eq(testingIndex);
    testingInNav.should('have.text', testingInItem.title )
    testingInNav.should('have.attr', 'href').and('include', testingInItem.path )
  })
})