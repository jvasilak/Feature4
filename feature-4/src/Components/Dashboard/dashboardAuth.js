import React, { useEffect, useState } from "react";
import ProtectedRoute from "../../Common/protectedRoutes";
import Dashboard from "./dashboard.js";

const DashboardAuth = () => {
  const [flag, setFlag] = useState(false);

  //var check = document.getElementById("flagBox");

  /*useEffect(() => {
    if (check && check.checked) {
      console.log("authorized!");
      setFlag(true);
    } else {
      console.log("unauthorized!");
      setFlag(false);
    }
  }, [check]);*/

  // In this case the flag is acquired through a check box, but it could also be received through another method
  // check the parse api docs for Parse.User() methods (authorized)

  return (
    <div>
      <ProtectedRoute exact path="/dashboard" flag={flag} element={Dashboard} />
    </div>
  );
};

export default DashboardAuth;
