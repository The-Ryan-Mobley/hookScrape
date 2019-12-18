import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Home from "./pages/home";

import api from "./utils/api/api";

function App() {
  useEffect(()=> {
    const scrapeRun = async () => {
      const result = await api.scrape("http://old.reddit.com/r/todayilearned");
    }
    scrapeRun();

  },[]);
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
