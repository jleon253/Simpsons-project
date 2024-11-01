import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import SplashScreen from "../SplashScreen/SplashScreen.jsx";
import Head from "../Dashboard/Head.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/Head" element={<Head />} />
      </Routes>
    </Router>
  );
}

export default App;
