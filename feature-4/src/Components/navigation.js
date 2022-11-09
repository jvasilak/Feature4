import React, {useState} from 'react';
import './nav-styles.css';
import { Link } from "react-router-dom";

// TODO: change login to logout if the user is already signed in
// Also should add icons for each page on the nav bar along with text
const Navigation = (props) => {
  return (
      <ul className="navigation">
        <li className='navigationEntry'><Link to="/" className='navigationEntry'>Home</Link></li>
        <li className='navigationEntry'><Link to="/sports" className='navigationEntry'>Sports</Link></li>
        <li className='navigationEntry'><Link to="/schedule" className='navigationEntry'>Schedule</Link></li>
        {props.loggedIn ? <li className='navigationEntry'><Link to="/dashboard" className='navigationEntry'>Dashboard</Link></li>
          : <li className='navigationEntry'><Link to="/login" className='navigationEntry'>Login</Link></li>
        }
      </ul>
  );
};

export default Navigation;
