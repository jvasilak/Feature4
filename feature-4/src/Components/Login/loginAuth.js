import React from "react";
import ProtectedRoute from "../../Common/protectedRoutes";
import Login from "./login";

const LoginAuth = (props) => {
  return (
    <div>
      <ProtectedRoute exact path="/login" element={Login} loggedIn={props.loggedIn} updateLoginStatus={props.updateLoginStatus}>
        <Login loggedIn={props.loggedIn} updateLoginStatus={props.updateLoginStatus}/>
      </ProtectedRoute>
    </div>
  );
};

export default LoginAuth;
