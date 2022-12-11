import Sports from './sports';
import Parse from 'parse';
import * as Env from "./../../environment";

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

describe('<Sports>', () => {
  it('mounts', () => {
    cy.mount(<Sports />);
  })

  it('renders properly', () => {
    cy.mount(<Sports />);
    cy.get('[data-cy=SportParent]');
  })

})