import React, {useState, useEffect} from 'react';
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
import { checkUser } from './Services/AuthService';
import { SportInfo } from './Components/Sports/SportInfo/sportinfo';
import ChangeScore from "./Components/Dashboard/ChangeScore/ChangeScore";
import AddLeague from "./Components/Dashboard/AddLeague/AddLeague";
import AddTeam from "./Components/Dashboard/AddTeam/AddTeam";

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;
// currently protected components: Dashboard, Login, Register, ScoreReporter, GameReporter
export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const updateLoginStatus = (status) => {
    setLoggedIn(status);
  };
  useEffect(() => {
    if (checkUser()) {
      setLoggedIn(true);
    }
  }, []);
  return (
    <Router>
    <Navigation loggedIn={loggedIn}/>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/schedule" element={<Schedule/>} />
        <Route path="/sports" element={<Sports/>} />
        <Route path="/sportinfo" element={<SportInfo/>} />
        <Route path="/login" element={<LoginAuth loggedIn={loggedIn} updateLoginStatus={updateLoginStatus}/>} />
        <Route path="/dashboard" element={<DashboardAuth loggedIn={loggedIn} updateLoginStatus={updateLoginStatus}/>}/>
        <Route path="/dashboard/changescore" element={<ChangeScore loggedIn={loggedIn} updateLoginStatus={updateLoginStatus}/>}/>
        <Route path="/dashboard/addleague" element={<AddLeague loggedIn={loggedIn} updateLoginStatus={updateLoginStatus}/>}/>
        <Route path="/dashboard/addteam" element={<AddTeam loggedIn={loggedIn} updateLoginStatus={updateLoginStatus}/>}/>
        <Route path="/register" element={<AuthRegister loggedIn={loggedIn} updateLoginStatus={updateLoginStatus}/>} />
        <Route path="/reportscores" element={<ReporterAuth path="/reportscores" loggedIn={loggedIn} updateLoginStatus={updateLoginStatus}/>} />
        <Route path="/addgames" element={<ReporterAuth path="/addgames" loggedIn={loggedIn} updateLoginStatus={updateLoginStatus}/>} />
      </Routes>
    </Router>
  
  );
}