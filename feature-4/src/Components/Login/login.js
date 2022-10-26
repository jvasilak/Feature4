import React, {
    useState,
    useEffect
  } from "react";  
import { getAllUsers } from "../../Services/users";
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
    const attemptLogin = (submitEvent) => {
      for (let i = 0; i < users.length; i++) {
        if (users[i]["username"] === username) {
          if (users[i]["password"] === password) {
            props.changeState(0);
            props.changeLoginStatus(true);
            break;
          }
        }
      }
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
            onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="loginInput">
            <label>Password</label>
            <input type="password"
            onChange={(event) => setPassword(event.target.value)}
            />
            <br />
          </div>
          <div className="loginInput">
            <input className="loginSubmit" type="submit"/>
          </div>
        </form>
      </div>
      );
    } else {
      return (<div >Loading</div>);
    }
  };
  
  export default LoginPage;