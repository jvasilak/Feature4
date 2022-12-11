import Parse from 'parse';
import * as Env from "./../../../environment";
import { SportInfo } from "./sportinfo";
import {BrowserRouter as Router} from 'react-router-dom';
import { getAllSports } from '../../../Services/sports';

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

const sport = {
    "Name": "Test Sport",
    "ID": 1
}

describe('<SportInfo>', () => {
  it('mounts', () => {
    cy.mount(<Router>
        <SportInfo />
    </Router>);
  })

  it('checks if data is loaded properly', () => {
    cy.mount(<Router state={sport}>
        <SportInfo />
    </Router>);
    cy.contains('[data-cy=Loader]');
    cy.contains('[data-cy=Loaded]')
  })

})