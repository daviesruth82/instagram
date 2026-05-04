import React from "react";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Create from "./Pages/Create";
import "./App.css";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<LandingPage />} />
      <Route path="/create" element={<Create />} /> 
    </Routes>
  );
};

export default App;
