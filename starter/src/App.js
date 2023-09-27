import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shelves from "./Shelves";
import Search from "./Search";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Shelves />} />
          <Route path="/Search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
