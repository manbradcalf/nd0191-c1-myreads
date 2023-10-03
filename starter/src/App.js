import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getAll, update } from "./BooksAPI";
import Shelves from "./Shelves";
import Search from "./Search";

function App() {
  const [wantToRead, setWantToRead] = useState([]);
  const [reading, setReading] = useState([]);
  const [read, setRead] = useState([]);

  useEffect(async () => {
    getBooks();
  }, []);

  const getBooks = async () => {
    let books = await getAll();
    mapBooksToShelves(books);
  };

  const mapBooksToShelves = (res) => {
    var currentlyReading = res
      .filter((x) => x.shelf === "currentlyReading")
      .map((x) => x.id);
    var wantToRead = res
      .filter((x) => x.shelf === "wantToRead")
      .map((x) => x.id);
    var read = res.filter((x) => x.shelf === "read").map((x) => x.id);

    setRead(read);
    setWantToRead(wantToRead);
    setReading(currentlyReading);
  };

  const onBookMoved = async (bookId, newShelf) => {
    let shelvesRes = await update(bookId, newShelf);
    getBooks();
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/*"
            element={
              <Shelves
                reading={reading}
                want={wantToRead}
                read={read}
                moveBookToShelf={onBookMoved}
              />
            }
          />
          <Route
            path="/search"
            element={<Search moveBookToShelf={onBookMoved} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
