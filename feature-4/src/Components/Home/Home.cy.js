import Home from "./home";

describe('<Home>', () => {
    it('mounts', () => {
      cy.mount(<Home />);
    })

    it('prompts user to login if they are not', () => {
        cy.mount(<Home loggedIn={false}/>);
        cy.get('[data-cy=LoginPrompt]');
    })

    it('does not prompt user to login if they are', () => {
        cy.mount(<Home loggedIn={true}/>);
        cy.get('[data-cy=LoginPrompt]').should('not.exist');
    })
  })