import React, {useState} from 'react';
import Navigation from "./Components/navigation";
//import Body from "./Components/body";

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
/*
<Body
      pageState={pageState}
      changeState={updatePageState}
      loginStatus={loggedIn}
      changeLoginStatus={updateLoginStatus}
    />
*/


//render(html` <${App} /> `, document.getElementById("app"));