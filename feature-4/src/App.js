import React, {useState} from 'react';
import Navigation from "./Components/navigation";
import * as Env from "./environment";
import Parse from "parse";
import Body from "./Components/body";

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

export default function App() {
  const [pageState, setPageState] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);

  const updateLoginStatus = (newStatus) => {
    setLoggedIn(newStatus);
  };
  const updatePageState = (newState) => {
    setPageState(newState);
  };
  return (
    <div>
      <Navigation
        pageState={pageState}
        changeState={updatePageState}
        loginStatus={loggedIn}
        changeLoginStatus={updateLoginStatus}
      />
    </div>
  );
}

/*<Body
        pageState={pageState}
        changeState={updatePageState}
        loginStatus={loggedIn}
        changeLoginStatus={updateLoginStatus}
      />*/

//render(html` <${App} /> `, document.getElementById("app"));