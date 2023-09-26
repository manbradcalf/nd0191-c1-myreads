import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Shelves from "./Shelves";
import Search from "./Search";
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="" element={<Shelves />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
