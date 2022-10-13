import React from 'react';
import LoginPage from "./Login/login.js";
import Home from "./Home/home.js";
import Sports from "./Sports/sports.js";
import Schedule from "./Schedule/schedule.js";
// This component is a blanket component for any part of the page
// below the navigation bar
const Body = (props) => {
  if (props.pageState === 0) {
    return (<body class="bodyComponent">
      <Home loginStatus={props.loginStatus} />
    </body>);
  } else if (props.pageState === 1) {
    return (<body class="bodyComponent">
      <Sports />
    </body>);
  } else if (props.pageState === 2) {
    return (<body class="bodyComponent">
      <Schedule />
    </body>);
  } else if (props.pageState === 3) {
    return (<body class="bodyComponent">
      <LoginPage
        pageState={props.pageState}
        changeState={props.changeState}
        loginStatus={props.loginStatus}
        changeLoginStatus={props.changeLoginStatus}
      />
    </body>);
  } else {
    return (
    <div><h1>Error</h1>
    <p>Page not found.</p></div>);
  }
};

export default Body;
