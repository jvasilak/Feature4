import React from 'react';
import './dashboard.css';
import Parse from "parse";
import AdminDashboard from "./adminDashboard.js";

const Dashboard = (props) => {

    function handleLogout() {
        localStorage.clear();
        window.location.reload(false);
    }

    const user = Parse.User.current();
    if (user.get("admin")) {
        return (<AdminDashboard />);
    } else {
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
            <div className='logoutContainer'>
                <button className='logout' onClick={handleLogout}>Logout</button>
            </div>
        </div>);
    }
}

export default Dashboard;