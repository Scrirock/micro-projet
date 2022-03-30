import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { AboutUs } from "./pages/AboutUs/AboutUs";
import { Contact } from "./pages/Contact/Contact";
import { Support } from "./pages/Support/Support";
import { Download } from "./pages/Download/Download";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Support" element={<Support />} />
      <Route path="/Download" element={<Download />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
