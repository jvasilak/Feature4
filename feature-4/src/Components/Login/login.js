import React, {
    useState,
    useEffect
  } from "react";  
import { Link, useNavigate } from "react-router-dom";
import { getAllUsers } from "../../Services/users";
import './login.css';
import { loginUser } from "../../Services/AuthService";

  const LoginPage = (props) => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [add, setAdd] = useState(false);
    const [loginUserInfo, setLoginUser] = useState({
      username: "",
      password: ""
  });
    useEffect(() => {
      getAllUsers().then((users) => {
        setUsers(users);
      });
    }, []);
    // We currently do not have many users created, in order to see the effects of a successful login try "admin" for both the username and password
    useEffect(() => {
      // checkUser() ? history.push("/home"): null;
      if (loginUserInfo && add) {
        loginUser(loginUser).then((userLoggedIn) => {
          if (userLoggedIn) {
            alert(
              `${userLoggedIn.get("firstName")}, you successfully logged in!`
            );
            props.updateLoginStatus(true);
            navigate("/dashboard");
          }
          // TODO: redirect user to main app
          setAdd(false);
        });
      }
    }, [navigate, loginUserInfo, add]);

    const onSubmitHandler = (e) => {
      e.preventDefault();
      console.log("submitted: ", e.target);
      setAdd(true);
    };

    const onChangeHandler = (e) => {
      e.preventDefault();
      console.log(e.target);
      const { name, value: newValue } = e.target;
      console.log(newValue);
  
      setLoginUser({
        ...loginUserInfo,
        [name]: newValue
      });
    };
  
    if (users.length > 0) {
      return (<div>
        <h1 className="pageHeader">Login</h1>
        <form method="GET" onSubmit={(event) => {
          onSubmitHandler(event);

        }}>
          <div className="loginInput">

            <label>Username</label>
            <input type="text"
              name="username"
              value={loginUserInfo.username}
              placeholder="Username"
              required
              onChange={(event) => onChangeHandler(event)} />
          </div>
          <div className="loginInput">
            <label>Password</label>
            <input type="password"
              value={loginUserInfo.password}
              name="password"
              placeholder="Password"
              required
              onChange={(event) => onChangeHandler(event)} />
            <br />
          </div>
          <div className="loginInput">
            <input className="loginSubmit" type="submit" />
          </div>
        </form>
        <p className="registerLink">Don't have an account? <Link to="/register">Click Here to Register</Link></p>
      </div>
      );
    } else {
      return (<div className="loader"></div>); 
    }
  };
  
  export default LoginPage;