import Book from "./Book";
import { Link } from "react-router-dom";
import { useState } from "react";
import Search from "./Search";
import Shelf from "./Shelf";

const Shelves = ({ reading, want, read, moveBookToShelf }) => {
  console.log("Shelves.js");
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <Shelf books={reading} moveBookToShelf={moveBookToShelf} />
          </div>
        </div>
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want To Read</h2>
            <Shelf books={want} moveBookToShelf={moveBookToShelf} />
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <div>
            <Shelf books={read} moveBookToShelf={moveBookToShelf} />
          </div>
        </div>
      </div>
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
