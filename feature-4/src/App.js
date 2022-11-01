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
  Switch,
  Redirect
} from "react-router-dom";

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

export default function App() {
  return (
    
    <Router>
    <Navigation />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/schedule" exact component={Schedule} />
        <Route path="/sports" exact component={Sports} />
        <Route path="/login" exact component={Login} />
        <Redirect to="/" />
      </Routes>
    </Router>
  
  );
}