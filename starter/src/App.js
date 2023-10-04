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
    // TODO: consider just fetching each book by id and store the ids as state
    // that way we dont get all books every time
    // and we can build the shelves from the ids we know were explicitly added
    // by the user in the app via Book.js callback
    getBooks();
  }, []);

  const getBooks = async () => {
    let books = await getAll();
    mapBooksToShelves(books);
  };

  const mapBooksToShelves = (res) => {
    setRead(res.filter((x) => x.shelf === "read"));
    setWantToRead(res.filter((x) => x.shelf === "wantToRead"));
    setReading(res.filter((x) => x.shelf === "currentlyReading"));
  };

  const onBookMoved = async (bookId, newShelf) => {
    let shelvesRes = await update(bookId, newShelf);
    // todo: seems inefficient to getAllBooks here on each reload.
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
            element={
              <Search
                reading={reading}
                want={wantToRead}
                read={read}
                moveBookToShelf={onBookMoved}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
