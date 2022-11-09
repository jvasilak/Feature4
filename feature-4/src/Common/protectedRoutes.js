import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const authPaths = [
  "/login",
  "/register"
];

const ProtectedRoute = ({ children, ...rest }) => {
  console.log("rest: ", rest);
  let flag;
  authPaths.includes(rest.path) ? flag = true : flag = false;
  console.log("contains path: ", flag);
  return (
    <div>
      {flag ? rest.loggedIn ? (
        <Navigate to={"/dashboard"} replace />
      ) : (
        children
      ) : 
      rest.loggedIn ? (
        children
      ) : (
        <Navigate to={"/login"} replace/>
      )}
    </div>
  );
};

export default ProtectedRoute;