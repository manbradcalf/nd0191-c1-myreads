import Book from "./Book";
import { Link } from "react-router-dom";
import { useState } from "react";
import Search from "./Search";
import Shelf from "./Shelf";

const Shelves = ({ reading, want, read, moveBookToShelf }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
        </div>
        <Shelf
          books={reading}
          shelfName={"Currently Reading"}
          moveBookToShelf={moveBookToShelf}
        />
        <Shelf
          books={want}
          shelfName={"Want To Read"}
          moveBookToShelf={moveBookToShelf}
        />
        <Shelf
          books={read}
          shelfName={"Read"}
          moveBookToShelf={moveBookToShelf}
        />
      <div className="open-search">
        <Link
          to="/search"
          element={<Search moveBookToShelf={moveBookToShelf} />}
        >
          Add a book
        </Link>
      </div>
    </div>
  );
};
export default Shelves;
