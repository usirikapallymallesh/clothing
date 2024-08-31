import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ShopContextProvider from "./context/ShopContext";

createRoot(document.getElementById("root")).render(
  <ShopContextProvider>
    <Router>
      <App />
    </Router>
  </ShopContextProvider>
);
