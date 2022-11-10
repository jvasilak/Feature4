import React, {useEffect} from "react";
import { Navigate } from "react-router-dom";
import { checkUser } from "../Services/AuthService";

const authPaths = [
  "/login",
  "/register"
];

const ProtectedRoute = ({ children, ...rest }) => {
  let flag;
  authPaths.includes(rest.path) ? flag = true : flag = false;
  useEffect(() => {
    if (checkUser()) {
    rest.updateLoginStatus(true);
    }
  }, [rest]);
  return (
    <div>
      {flag ? checkUser() ? (
        <Navigate to="/dashboard" replace />
      ) : (
        children
      ) : 
      checkUser() ? (
        children
      ) : (
        <Navigate to="/login" replace/>
      )}
    </div>
  );
};

export default ProtectedRoute;