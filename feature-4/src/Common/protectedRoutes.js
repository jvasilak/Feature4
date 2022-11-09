import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
const ProtectedRoute = ({ element: Component, flag, ...rest }) => {
  console.log("rest: ", rest);

  return (
    <div>
      {flag ? (
        <Navigate to={rest.path} replace />
      ) : (
        <Navigate to={"/login"} replace/>
      )}
    </div>
  );
};

export default ProtectedRoute;
