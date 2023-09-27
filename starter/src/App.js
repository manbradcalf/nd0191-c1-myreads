import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getAll } from "./BooksAPI";
import Shelves from "./Shelves";
import Search from "./Search";

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getAll()
      .then((res) => {
        setBooks(res);
      })
      .catch((e) => console.log(`an error occurred fetching books: ${e}`));
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Shelves books={books} />} />
          <Route path="/Search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
