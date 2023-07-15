import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./scripts/App";
import FormulaireCagnotte from "./components/FormulaireCagnotte";
import ResumeCagnotte from "./components/ResumeCagnotte";
import ListeCagnottes from "./components/ListeCagnottes";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      <Routes>
        <Route path="/" element={<FormulaireCagnotte />} />{" "}
        {/* Page principale */}
        <Route path="/ResumeCagnotte" element={<ResumeCagnotte />} />
        <Route path="/ListeCagnottes" element={<ListeCagnottes />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
