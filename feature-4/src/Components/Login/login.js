import React, {
    useState,
    useEffect
  } from "react";  
import { Link, useNavigate } from "react-router-dom";
import { getAllUsers } from "../../Services/users";
import './login.css';
import { loginUser} from "../../Services/AuthService";
import Alert from '@mui/material/Alert';
import CircularProgress from "@mui/material/CircularProgress";


  const LoginPage = (props) => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [add, setAdd] = useState(false);
    const [loginUserInfo, setLoginUserInfo] = useState({
      username: "",
      password: ""
  });
  const [failedLogin, setFailedLogin] = useState(false);
    useEffect(() => {
      getAllUsers().then((users) => {
        setUsers(users);
      });
    }, []);
    // We currently do not have many users created, in order to see the effects of a successful login try "admin" for both the username and password
    useEffect(() => {
      if (loginUserInfo && add) {
        loginUser(loginUserInfo).then((userLoggedIn) => {
          if (userLoggedIn) {
            alert(
              `${userLoggedIn.attributes.firstname}, you successfully logged in!`
            );
            props.updateLoginStatus(true);
            navigate("/dashboard");
          } else {
            setFailedLogin(true);
          }
          // TODO: redirect user to main app
          setAdd(false);
        });
      }
    }, [navigate, loginUserInfo, add, props]);

    const onSubmitHandler = (e) => {
      e.preventDefault();
      setAdd(true);
    };

    const onChangeHandler = (e) => {
      e.preventDefault();
      const { name, value: newValue } = e.target;
      setLoginUserInfo({
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
        {failedLogin ? <Alert variant="outlined" severity="error" onClose={() => {setFailedLogin(false)}}>Login Failed: Invalid username/password.</Alert> : <></>}
        <p className="registerLink">Don't have an account? <Link className="registerLink" to="/register">Click Here to Register</Link></p>
      </div>
      );
    } else {
      return (<CircularProgress />); 
    }
  };
  
  export default LoginPage;