import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Photos } from "./containers";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Photos />} />
      </Routes>
    </Router>
  );
}

export default App;
