import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getAll, update } from "./BooksAPI";
import Shelves from "./Shelves";
import Search from "./Search";

function App() {
  const [books, setBooks] = useState([]);
  const [shelves, setShelves] = useState([]);

  useEffect(() => {
    console.log(`App.js: useEffect`);

    // get initial books
    getAll()
      .then((res) => {
        setBooks(res);
      })
      .catch((e) => console.log(`an error occurred fetching books: ${e}`));
  }, []);

  const onBookMoved = (book, newShelf) => {
    update(book, newShelf).then((shelvesRes) => {
      console.log(JSON.stringify(shelvesRes, undefined, 4));
      refresh(shelvesRes);
    });
  };

  const refresh = (shelves) => {
    setShelves(shelves);
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/*"
            element={
              <Shelves
                reading={books.filter((x) => x.shelf === "currentlyReading")}
                want={books.filter((x) => x.shelf === "wantToRead")}
                read={books.filter((x) => x.shelf === "read")}
                moveBookToShelf={onBookMoved}
              />
            }
          />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const logBooks = (books) => {
  console.log(
    `books is ${JSON.stringify(
      books.map((x) => {
        return {
          title: x.title,
          shelf: x.shelf,
        };
      }),
      undefined,
      4
    )}`
  );
};
export default App;
