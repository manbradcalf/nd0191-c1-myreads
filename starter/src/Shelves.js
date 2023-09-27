import Book from "./Book";
import { Link } from "react-router-dom";
import { useState } from "react";
import Search from "./Search";
const Shelves = ({ books }) => {
  const reading = books.filter((x) => x.shelf === "currentlyReading");
  const want = books.filter((x) => x.shelf === "wantToRead");
  const read = books.filter((x) => x.shelf === "read");
  console.log(`reading ${reading}`);
  console.log(`want ${want}`);
  console.log(`read ${read}`);

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
                    <li>
                      <Book bookData={book} />
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
                    <li>
                      <Book bookData={book} />
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
                    <li>
                      <Book bookData={book} />
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="open-search">
        <Link path="/search" element={<Search />}>
          Add a book
        </Link>
      </div>
    </div>
  );
};
export default Shelves;
