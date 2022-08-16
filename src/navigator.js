import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { App } from "./components";

function Navigator() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  );
}

export default Navigator;
