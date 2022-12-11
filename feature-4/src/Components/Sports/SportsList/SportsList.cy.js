import Parse from 'parse';
import * as Env from "./../../../environment";
import SportsList from './sportslist';
import {BrowserRouter as Router} from 'react-router-dom';


Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

describe('<SportsList>', () => {
  it('mounts', () => {
    cy.mount(<Router>
        <SportsList />
    </Router>);
  })

  it('renders contents properly', () => {
    cy.mount(<Router>
        <SportsList />
    </Router>);
    cy.get('[data-cy=Loader]');
    cy.get('[data-cy=Loaded]');
    cy.get('[data-cy=SportItem]');
  })

})