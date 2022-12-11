import Standings from './standings';
import Parse from 'parse';
import * as Env from "./../../environment";

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

describe('<Standings>', () => {
  it('mounts', () => {
    cy.mount(<Standings />);
  })

  it('renders loader properly', () => {
    cy.mount(<Standings />);
    cy.get('[data-cy=Loader]');
  })

})