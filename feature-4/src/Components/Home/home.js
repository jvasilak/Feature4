import React from 'react';
import './homestyles.css';
import { Link } from "react-router-dom";

const Home = (props) => {
  // Todo: add a bit of text that lets the user know if they are logged in
  // if they are logged in say a greeting to them
  return (
    <div>
      <h1 className="pageHeader">Home</h1>
      <p className="bodyText">
        Welcome to our reworked RecSports website for Notre Dame. We hope to fix
        many of the issues students experience when using the existing one,
        including excessive ads and slow load times. Please log in if you have an
        account or feel free a list of supported sports or a game schedule.
      </p>
    </div>);
};

export default Home;