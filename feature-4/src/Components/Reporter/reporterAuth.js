import React from "react";
import ProtectedRoute from "../../Common/protectedRoutes";
import ScoreReporter from "./scoreReporter";
import GameReporter from "./gameReporter";

const ReporterAuth = (props) => {

  return (
    <div>
        {props.path === "/reportscores" ? 
            <ProtectedRoute exact path={props.path} element={ScoreReporter} loggedIn={props.loggedIn} updateLoginStatus={props.updateLoginStatus}>
                <ScoreReporter loggedIn={props.loggedIn}/>
            </ProtectedRoute> :
            <ProtectedRoute exact path={props.path} element={GameReporter} loggedIn={props.loggedIn} updateLoginStatus={props.updateLoginStatus}>
                <GameReporter loggedIn={props.loggedIn}/>
            </ProtectedRoute>}
    </div>
  );
};

export default ReporterAuth;
