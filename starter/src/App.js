import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Shelves from "./Shelves";
import Search from "./Search";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/shelves" element={Shelves} />
        <Route path="/search" element={Search} />
      </Routes>
    </div>
  );
}

export default App;
