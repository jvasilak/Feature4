import React from 'react';
import { checkUser, createUser } from "../../Services/AuthService";
import AuthRegister from './AuthRegister';

const Register = () => {
    const navigate = useNavigate();

    const [newUser, setNewUser] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: ""
    });

    // flags in the state to watch for add/remove updates
    const [add, setAdd] = useState(false);

    // redirect already authenticated users back to home
    useEffect(() => {
        if (checkUser()) {
        alert("You are already logged in");
        navigate("/");
        }
    }, [navigate]);

    useEffect(() => {
        // checkUser() ? history.push("/home"): null;
        if (newUser && add) {
          createUser(newUser).then((userCreated) => {
            if (userCreated) {
              alert(
                `${userCreated.get("firstName")}, you successfully registered!`
              );
              navigate("/");
            }
            // TODO: redirect user to main app
            setAdd(false);
          });
        }
      }, [navigate, newUser, add]);
    
      const onChangeHandler = (e) => {
        e.preventDefault();
        console.log(e.target);
        const { name, value: newValue } = e.target;
        console.log(newValue);
    
        setNewUser({
          ...newUser,
          [name]: newValue
        });
      };
    
      const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log("submitted: ", e.target);
        setAdd(true);
      };

    return (
        <div>
            <h1 className="pageHeader">Sign Up</h1>
            <form method="GET" onSubmit={(event) => {
                createAccount();
            }}>
                <div className="loginInput">
                <label>Username</label>
                <input type="text"
                    onChange={(event) => setNewUser(event.target.value)} />
                </div>
                <div className="loginInput">
                <label>Email</label>
                <input type="email"
                    onChange={(event) => setNewUser(event.target.value)} />
                </div>
                <div className="loginInput">
                <label>First Name</label>
                <input type="text"
                    onChange={(event) => setNewUser(event.target.value)} />
                </div>
                <div className="loginInput">
                <label>Last Name</label>
                <input type="text"
                    onChange={(event) => setNewUser(event.target.value)} />
                </div>
                <div className="loginInput">
                <label>Password</label>
                <input type="password"
                    onChange={(event) => setNewUser(event.target.value)} />
                <br />
                </div>
                <div className="loginInput">
                <input className="loginSubmit" type="submit" value="Create Account" />
                </div>
            </form>
            <p className="registerLink">Already have an account? <Link to="/login">Click Here to Login</Link></p>
            < AuthRegister />
        </div>
    );
}

export default Register;
