import React, {useState} from 'react';
import './nav-styles.css';
import { Link } from "react-router-dom";

// TODO: change login to logout if the user is already signed in
// Also should add icons for each page on the nav bar along with text
const Navigation = (props) => {

  return (
      <ul className="navigation">
        <li className='navigationEntry'><Link to="/">Home</Link></li>
        <li className='navigationEntry'><Link to="/sports">Sports</Link></li>
        <li className='navigationEntry'><Link to="/schedule">Schedule</Link></li>
        <li className='navigationEntry'><Link to="/login">Login</Link></li>
      </ul>
  );
};

export default Navigation;
