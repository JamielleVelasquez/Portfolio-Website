import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import LandingPage from "./LandingPage";
import About from "./About";
import Contact from "./Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="About" element={<About />} />
      <Route path="Contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);
