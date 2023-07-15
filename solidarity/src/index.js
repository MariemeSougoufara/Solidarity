import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./scripts/App";
import FormulaireCagnotte from "./components/FormulaireCagnotte";
import ResumeCagnotte from "./components/ResumeCagnotte";
import CagnotteSuccess from "./components/CagnotteSuccess";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      <Routes>
        <Route path="/" element={<FormulaireCagnotte />} />{" "}
        {/* Page principale */}
        <Route path="/ResumeCagnotte" element={<ResumeCagnotte />} />
        <Route path="/CagnotteSuccess" element={<CagnotteSuccess />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
