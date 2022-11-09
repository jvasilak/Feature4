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
        < AuthRegister />
    );
}

export default Register;