import React, {useState, useEffect} from 'react';
import { checkUser, createUser } from "../../Services/AuthService";
import AuthForm from "./AuthForm";
import {useNavigate} from 'react-router-dom';

const Register = (props) => {
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
        props.updateLoginStatus(true);
        navigate("/dashboard");
        }
    }, [navigate, props]);

    useEffect(() => {
        // checkUser() ? history.push("/home"): null;
        if (newUser && add) {
          createUser(newUser).then((userCreated) => {
            if (userCreated) {
              alert(
                `${userCreated.get("firstName")}, you successfully registered!`
              );
              props.updateLoginStatus(true);
              navigate("/dashboard");
            }
            // TODO: redirect user to main app
            setAdd(false);
          });
        }
      }, [navigate, newUser, add, props]);
    
      const onChangeHandler = (e) => {
        e.preventDefault();
        const { name, value: newValue } = e.target;
        setNewUser({
          ...newUser,
          [name]: newValue
        });
      };
    
      const onSubmitHandler = (e) => {
        e.preventDefault();
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
