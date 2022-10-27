import React, {
    useState,
    useEffect
  } from "react";  
import { getAllUsers } from "../../Services/users";
import Navigation from "../navigation";
import './login.css';

  const LoginPage = (props) => {
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    useEffect(() => {
      getAllUsers().then((users) => {
        setUsers(users);
      });
    }, []);
    // We currently do not have many users created, in order to see the effects of a successful login try "admin" for both the username and password
    const attemptLogin = (submitEvent) => {
      users.map((user) => {
        if(user.get("Username") === username) {
          if(user.get("Password") === password) {
            props.changeState(0);
            props.changeLoginStatus(true);
            alert("success");
            return;
          }
        }
      });
      
      submitEvent.preventDefault();
    };
  
    if (users.length > 0) {
      return (<div>
        <h1 className="pageHeader">Login</h1>
        <form method="GET" onSubmit={(event) => {
          attemptLogin(event);

        }}>
          <div className="loginInput">

            <label>Username</label>
            <input type="text"
              onChange={(event) => setUsername(event.target.value)} />
          </div>
          <div className="loginInput">
            <label>Password</label>
            <input type="password"
              onChange={(event) => setPassword(event.target.value)} />
            <br />
          </div>
          <div className="loginInput">
            <input className="loginSubmit" type="submit" />
          </div>
        </form>
      </div>
      );
    } else {
      return (<div class="loader"></div>); 
    }
  };
  
  export default LoginPage;