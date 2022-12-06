import "./adminDashboard.css";
import { Link } from "react-router-dom";

export default function AdminDashboard() {

    return (
        <>
        <div className="page-header">
            <h1>Admin Dashboard</h1>
        </div>
        <div>
            <ul className="menu">
                <Link to="/dashboard/changescore" className="menu-title"><li className="menu-item">Change Score</li></Link>
                <Link to="/dashboard/addleague" className="menu-title"><li className="menu-item">Add League</li></Link>
                <Link to="/dashboard/addscore" className="menu-title"><li className="menu-item">Add Team</li></Link>
            </ul>
        </div>
        </>
    );
}