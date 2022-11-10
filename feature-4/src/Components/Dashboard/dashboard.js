import React from 'react';
import './dashboard.css';
import Parse from "parse";


const Dashboard = (props) => {
    const user = Parse.User.current();
    return (<div>
        <h1 className='pageHeader'>Welcome <i>{user.get("username")}</i></h1>
        <div className='sectionHeader'>
            <h2>Teams</h2>
            <ul>
                <li>
                    Your teams will go here
                </li>
            </ul>
        </div>
        <div className='sectionHeader'>
            <h2>Games</h2>
            <ul>
                <li>
                    Your upcoming games will go here
                </li>
            </ul>
        </div>
    </div>);
    
}

export default Dashboard;