import React, {useState} from 'react';
import './nav-styles.css';
// TODO: change login to logout if the user is already signed in
const navNames = ["Home", "Sports", "Schedule", "Login"];
// Also should add icons for each page on the nav bar along with text
const Navigation = (props) => {
  const newState = (link) => {
    if (link === "Home") {
      props.changeState(0);
    } else if (link === "Sports") {
      props.changeState(1);
    } else if (link === "Schedule") {
      props.changeState(2);
    } else if (link === "Login") {
      props.changeState(3);
    }
  };

  return (
      <ul className="navigation">
        {navNames.map((link) => {
          return (<li className="navigationEntry">
            <a
              onClick={() => {
                newState(link);
              }}
            >
              {link}
            </a>
          </li>);
        })}
      </ul>
  );
};

export default Navigation;
