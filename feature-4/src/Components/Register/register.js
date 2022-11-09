import React, {useState} from 'react';
import { Link } from "react-router-dom";

const Register = () => {
    const createAccount = () => {
        console.log("Account Created");
    }
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    return (
        <div>
            <h1 className="pageHeader">Sign Up</h1>
            <form method="GET" onSubmit={(event) => {
                createAccount();
            }}>
                <div className="loginInput">
                <label>Username</label>
                <input type="text"
                    onChange={(event) => setUsername(event.target.value)} />
                </div>
                <div className="loginInput">
                <label>Email</label>
                <input type="email"
                    onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div className="loginInput">
                <label>First Name</label>
                <input type="text"
                    onChange={(event) => setFirstName(event.target.value)} />
                </div>
                <div className="loginInput">
                <label>Last Name</label>
                <input type="text"
                    onChange={(event) => setLastName(event.target.value)} />
                </div>
                <div className="loginInput">
                <label>Password</label>
                <input type="password"
                    onChange={(event) => setPassword(event.target.value)} />
                <br />
                </div>
                <div className="loginInput">
                <input className="loginSubmit" type="submit" value="Create Account" />
                </div>
            </form>
            <p className="registerLink">Already have an account? <Link to="/login">Click Here to Login</Link></p>
        </div>
    );
}

export default Register;