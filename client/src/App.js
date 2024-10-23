import React from 'react';
// import Button from 'react-bootstrap/Button';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';



import SignUp from "./screen/SignUp.jsx";
import SignIn from "./screen/SignIn.jsx" ;
import Home from "./screen/Home.jsx";
import ChatbootUI from "./screen/ChatbootUI.jsx";

import './App.css';

function App() {
  return (
    <Router>
    <div>
    <Routes>
    <Route exact path="/" element={<Home />} /> 
    <Route exact path="/SignUp" element={<SignUp/>} />
    <Route exact path="/SignIn" element={<SignIn/>} />
    <Route exact path="/ChatbootUI" element={<ChatbootUI />} />
    </Routes>
    </div> 
    </Router>
    
  );
}



export default App;
