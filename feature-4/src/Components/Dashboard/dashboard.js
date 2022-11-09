import React, {useState} from 'react';
import './dashboard.css';
import { Navigate, useNavigate } from "react-router-dom";

const Dashboard = (props) => {
    const [flag, setFlag] = useState(false);
    if(flag) {
        return (<div>
            <h1 className='pageHeader'>Welcome <i>{"username"}</i></h1>
            <h2>Teams:</h2>
            <h2>Games:</h2>
        </div>);
    } else {
        return (
            <div><Navigate to={"/login"} replace /></div>
        );
    }
}

export default Dashboard;