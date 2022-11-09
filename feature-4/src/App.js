import React, {useState} from 'react';
import Navigation from "./Components/navigation";
import Home from "./Components/Home/home.js";
import Login from "./Components/Login/login.js";
import Schedule  from './Components/Schedule/schedule';
import Sports from './Components/Sports/sports';
import * as Env from "./environment";
import Parse from "parse";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Dashboard from './Components/Dashboard/dashboard';
import Register from './Components/Register/register';
import DashboardAuth from "./Components/Dashboard/dashboardAuth";

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const updateLoginStatus = (status) => {
    setLoggedIn(status);
  };
  return (
    <Router>
    <Navigation loggedIn={loggedIn}/>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/schedule" element={<Schedule/>} />
        <Route path="/sports" element={<Sports/>} />
        <Route path="/login" element={<Login loggedIn={loggedIn} updateLoginStatus={updateLoginStatus}/>} />
        <Route path="/dashboard" element={<Dashboard loggedIn={loggedIn}/>} />
        <Route path="/dashboardAuth" element={<DashboardAuth loggedIn={loggedIn}/>}/>
        <Route path="/register" element={<Register loggedIn={loggedIn}/>} />
      </Routes>
    </Router>
  
  );
}