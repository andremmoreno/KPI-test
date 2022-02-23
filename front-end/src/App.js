import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Feedback from "./pages/Feedback";
import Results from "./pages/Results";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/feedback" element={ <Feedback /> } />
        <Route path="/results" element={ <Results /> } />
      </Routes>
    </div>
  );
}

export default App;
