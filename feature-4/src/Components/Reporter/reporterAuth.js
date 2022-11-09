import React, { useEffect, useState } from "react";
import ProtectedRoute from "../../Common/protectedRoutes";
import ScoreReporter from "./scoreReporter";
import GameReporter from "./gameReporter";

const ReporterAuth = (props) => {

  return (
    <div>
        {props.path === "/reportscores" ? 
            <ProtectedRoute exact path={props.path} element={ScoreReporter} loggedIn={props.loggedIn} >
                <ScoreReporter loggedIn={props.loggedIn}/>
            </ProtectedRoute> :
            <ProtectedRoute exact path={props.path} element={GameReporter} loggedIn={props.loggedIn} >
                <GameReporter loggedIn={props.loggedIn}/>
            </ProtectedRoute>}
    </div>
  );
};

export default ReporterAuth;
