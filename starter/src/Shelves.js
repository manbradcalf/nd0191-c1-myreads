import Book from "./Book";
import { Link } from "react-router-dom";
import { useState } from "react";
import Search from "./Search";

const Shelves = ({ reading, want, read, moveBookToShelf }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {reading.map((book) => {
                  return (
                    <li key={book.title}>
                      <Book bookData={book} moveBookToShelf={moveBookToShelf} />
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {want.map((book) => {
                  return (
                    <li key={book.title}>
                      <Book bookData={book} moveBookToShelf={moveBookToShelf} />
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {read.map((book) => {
                  return (
                    <li key={book.title}>
                      <Book bookData={book} moveBookToShelf={moveBookToShelf} />
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="open-search">
        <Link to="/search" element={<Search />}>
          Add a book
        </Link>
      </div>
    </div>
  );
};
export default Shelves;
