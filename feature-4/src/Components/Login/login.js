import React, {
    useState,
    useEffect
  } from "react";
  
  import { getAllUsers } from "../../Services/users";
  
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
      <h1 class="pageHeader">Login</h1>
      <form method="GET" onsubmit={(event) => {
        attemptLogin(event);
      }}>
      <div class="loginInput">
        <label>Username</label>
        <input type="text"
        onchange={(event) => setUsername(event.target.value)}>Username</input>
      </div>
      <div class="loginInput">
        <label>Password</label>
        <input type="password"
        onchange={(event) => setPassword(event.target.value)}>Password</input>
        <br />
      </div>
      <div class="loginInput">
        <input class="loginSubmit" type="submit">Login</input>
      </div>
      </form>
    </div>
      );
    } else {
      return (<div class="loader"></div>);
    }
  };
  
  export default LoginPage;