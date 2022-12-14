import React from "react";
import ProtectedRoute from "../../Common/protectedRoutes";
import Register from "./register";

const AuthRegister = (props) => {
    return (
        <ProtectedRoute exact path="/register" element={Register} loggedIn={props.loggedIn}>
            <Register loggedIn={props.loggedIn} updateLoginStatus={props.updateLoginStatus}/>
        </ProtectedRoute>
    );
}

export default AuthRegister;