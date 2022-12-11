import Schedule from './schedule';
import Parse from 'parse';
import * as Env from "./../../environment";
import { getDate } from '../../Services/date';

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

describe('<Schedule>', () => {
  it('mounts', () => {
    cy.mount(<Schedule />);
  })

  it('renders loader properly', () => {
    cy.mount(<Schedule />);
    cy.get('[data-cy=Loader]');
    cy.get('[data-cy=Loaded]');
  })

  it('displays correct date', () => {
    const date = getDate();
    cy.mount(<Schedule />);
    cy.get('[data-cy=DateDisplay]').should('have.text', date);
  })

  it('updates date when increment/decrement arrow is clicked', () => {
    cy.mount(<Schedule />);
    cy.get('[data-cy=IncrementDay]').click();
    let date = getDate(1);
    cy.get('[data-cy=DateDisplay]').should('have.text', date);
    cy.get('[data-cy=DecrementDay]').click();
    date = getDate(0);
    cy.get('[data-cy=DateDisplay]').should('have.text', date);
  })
})