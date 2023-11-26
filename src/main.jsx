import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
	<App />
  </Router>
);
