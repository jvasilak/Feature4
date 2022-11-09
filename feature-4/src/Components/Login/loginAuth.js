import React, { useEffect, useState } from "react";
import ProtectedRoute from "../../Common/protectedRoutes";
import Login from "./login";

const LoginAuth = (props) => {
  return (
    <div>
      <ProtectedRoute exact path="/login" element={Login} loggedIn={props.loggedIn} >
        <Login loggedIn={props.loggedIn}/>
      </ProtectedRoute>
    </div>
  );
};

export default LoginAuth;
