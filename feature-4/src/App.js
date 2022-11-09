import React, {useState} from 'react';
import Navigation from "./Components/navigation";
import Home from "./Components/Home/home.js";
import Schedule  from './Components/Schedule/schedule';
import Sports from './Components/Sports/sports';
import * as Env from "./environment";
import Parse from "parse";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoginAuth from './Components/Login/loginAuth';
import DashboardAuth from "./Components/Dashboard/dashboardAuth";
import AuthRegister from './Components/Register/AuthRegister';
import ReporterAuth from './Components/Reporter/reporterAuth';

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
        <Route path="/login" element={<LoginAuth loggedIn={loggedIn} updateLoginStatus={updateLoginStatus}/>} />
        <Route path="/dashboard" element={<DashboardAuth loggedIn={loggedIn}/>}/>
        <Route path="/register" element={<AuthRegister loggedIn={loggedIn}/>} />
        <Route path="/reportscores" element={<ReporterAuth path="/reportscores" loggedIn={loggedIn}/>} />
        <Route path="/addgames" element={<ReporterAuth path="/addgames" loggedIn={loggedIn}/>} />
      </Routes>
    </Router>
  
  );
}