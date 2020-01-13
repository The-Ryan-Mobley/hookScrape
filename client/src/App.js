import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Home from "./pages/home";
import Comments from "./pages/commentThread";
import NotFound from "./pages/404";

import api from "./utils/api/api";

function App() {
  useEffect(()=> {
    

  },[]);
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/comments/:commentId" component={Comments}/>
          <Route exact path="*" component={NotFound}/>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
