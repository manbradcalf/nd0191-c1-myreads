import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getAll, update, get } from "./BooksAPI";
import Shelves from "./Shelves";
import Search from "./Search";

function App() {
  const [wantToRead, setWantToRead] = useState([]);
  const [reading, setReading] = useState([]);
  const [read, setRead] = useState([]);

  // called on initial startup
  useEffect(async () => {
    console.log("useEffect: getting all books");
    let books = await getAll();
    setRead(books.filter((x) => x.shelf === "read"));
    setWantToRead(books.filter((x) => x.shelf === "wantToRead"));
    setReading(books.filter((x) => x.shelf === "currentlyReading"));
  }, []);

  const onBookMoved = async (book, oldShelf, newShelf) => {
    // switch (oldShelf) {
    //   case "currentlyReading":
    //     setReading(reading.filter((x) => x.id !== book.id));
    //   case "wantToRead":
    //     setWantToRead(wantToRead.filter((x) => x.id !== book.id));
    //   case "read":
    //     setRead(read.filter((x) => x.id !== book.id));
    // }
    await refresh(await update(book, newShelf));
  };

  const refresh = async (shelves) => {
    console.log(shelves);
    setReading([]);
    setWantToRead([]);
    setRead([]);

    let readingBooks = [];
    for (let id of shelves["currentlyReading"]) {
      let res = await get(id);
      readingBooks.push(res);
    }
    setReading(readingBooks);

    let wantToReadBooks = [];
    for (let id of shelves["wantToRead"]) {
      let res = await get(id);
      wantToReadBooks.push(res);
    }
    setWantToRead(wantToReadBooks);

    let readBooks = [];
    for (let id of shelves["read"]) {
      let res = await get(id);
      readBooks.push(res);
    }
    setRead(readBooks);
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
