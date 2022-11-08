import React from 'react';
import { checkUser, createUser } from "../../Services/AuthService";


const Register = () => {
    const navigate = useNavigate();

    const [newUser, setNewUser] = useState({
        firstName: "",
        lastName: "",
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
    
    return (
        <div>This will be the regsiter page</div>
    );
}

export default Register;