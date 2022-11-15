import React from "react";
import ProtectedRoute from "../../Common/protectedRoutes";
import Dashboard from "./dashboard.js";

const DashboardAuth = (props) => {
  return (
    <div>
      <ProtectedRoute exact path="/dashboard" element={Dashboard} loggedIn={props.loggedIn} updateLoginStatus={props.updateLoginStatus}>
        <Dashboard loggedIn={props.loggedIn} updateLoginStatus={props.updateLoginStatus}/>
      </ProtectedRoute>
    </div>
  );
};

export default DashboardAuth;
