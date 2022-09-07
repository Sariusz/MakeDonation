import React from "react";
import "./scss/main.scss";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Logout } from "./components/Logout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = ()=> {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/Logout" element={<Logout/>}/>
        </Routes>
      </Router>
    
  );
}
export default App

