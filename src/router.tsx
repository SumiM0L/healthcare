import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./pages/Landingpage";

function router() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
      </Routes>
    </Router>
  );
}

export default router;
