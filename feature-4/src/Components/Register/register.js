import React, {useState, useEffect} from 'react';
import { checkUser, createUser } from "../../Services/AuthService";
import AuthRegister from './AuthRegister';
import AuthForm from "./AuthForm";
import {Link, useNavigate} from 'react-router-dom';

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
          console.log('Here')
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
      <AuthForm
        user={newUser}
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
      />
    </div>
    );
}

export default Register;
