import React from 'react';
import './dashboard.css';

const Dashboard = (props) => {
    return (<div>
        <h1 className='pageHeader'>Welcome <i>{"username"}</i></h1>
        <h2>Teams:</h2>
        <h2>Games:</h2>
    </div>);
    
}

export default Dashboard;