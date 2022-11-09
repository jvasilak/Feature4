import React, { useEffect, useState } from "react";
import ProtectedRoute from "../../Common/protectedRoutes";
import Dashboard from "./dashboard.js";

const DashboardAuth = (props) => {
  return (
    <div>
      <ProtectedRoute exact path="/dashboard" element={Dashboard} loggedIn={props.loggedIn}>
        <Dashboard loggedIn={props.loggedIn}/>
      </ProtectedRoute>
    </div>
  );
};

export default DashboardAuth;
