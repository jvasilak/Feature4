import React from 'react';
import './homestyles.css';
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div data-cy="body">
      <h1 className="pageHeader">Home</h1>
      <p className="bodyText">
        Welcome to our reworked RecSports website for Notre Dame. We hope to fix
        many of the issues students experience when using the existing one,
        including excessive ads and slow load times. Please log in if you have an
        account or feel free a list of supported sports or a game schedule.
      </p>
      { props.loggedIn ? <></> :
        <p className='bodyText' data-cy="LoginPrompt">
          We recommend you login or create an account if you do not already have one. Simply click
          the login tab to be taken there.
        </p>
      }
      <p className='bodyText'>
        In order to view past or upcoming games, go to the schedule tab. In order to view a list of sports
        or league standings, go to the sports tab and click the sport you wish to see. Note that not all sports
        results or leagues added.
      </p>
    </div>);
};

export default Home;