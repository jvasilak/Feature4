import React from 'react';
import LoginPage from "./Login/login";
import Home from "./Home/home";
import Sports from "./Sports/sports";
import Schedule from "./Schedule/schedule";
// THIS COMPONENT NO LONGER CONNECTS TO ANYTHING
const Body = (props) => {
    if (props.pageState === 0) {
    return (<div className="bodyComponent">
      <Home loginStatus={props.loginStatus} />
    </div>);
  } else if (props.pageState === 1) {
    return (<div className="bodyComponent">
      <Sports />
    </div>);
  } else if (props.pageState === 2) {
    return (<div className="bodyComponent">
      <Schedule />
    </div>);
  } else if (props.pageState === 3) {
    return (<div className="bodyComponent">
      <LoginPage
        pageState={props.pageState}
        changeState={props.changeState}
        loginStatus={props.loginStatus}
        changeLoginStatus={props.changeLoginStatus}
      />
    </div>);
  } else {
    return (
    <div><h1>Error</h1>
    <p>Page not found.</p></div>);
  }
};

export default Body;
