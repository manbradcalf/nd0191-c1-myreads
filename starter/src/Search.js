import { Link } from "react-router-dom";
import { search } from "./BooksAPI";
import { useState } from "react";
import Book from "./Book";

const Search = ({ moveBookToShelf }) => {
  const [results, setResults] = useState([]);

  const handleTextChange = async (event) => {
    console.log(event.target.value);
    if (event.target.value) {
      let res = await search(event.target.value);
      if (res.error) {
        setResults([]);
      } else {
        setResults(res);
      }
    } else {
      setResults([]);
    }
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        {
          <Link to="/shelves" className="close-search">
            Close
          </Link>
        }
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={handleTextChange}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {results.map((book) => {

            return (
              <li key={book.id}>
                <Book
                  bookId={book.id}
                  currentShelf={book.shelf}
                  moveBookToShelf={moveBookToShelf}
                />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};
export default Search;
