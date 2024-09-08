import React from 'react';
import Button from 'react-bootstrap/Button';
import {BrowserRouter as Router, Route,Switch, Routes} from 'react-router-dom';

import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from './components/Navbar.jsx';
import Login from "./screen/login.jsx";
import Home from "./screen/Home.jsx";
import './App.css';

function App() {
  return (
    <Router>
    <div>
    <Routes>
    <Route exact path="/" element={<Home />} /> 
    <Route exact path="/Login" element={<Login/>} />
    </Routes>
    </div> 
    </Router>
    
  );
}



export default App;
