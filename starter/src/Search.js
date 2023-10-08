import { Link } from "react-router-dom";
import { search } from "./BooksAPI";
import { useRef, useState } from "react";
import Book from "./Book";
import PropTypes from "prop-types";
import throttle from "lodash.throttle";
import debounce from "lodash.debounce";

const Search = ({ reading, want, read, moveBookToShelf }) => {
  const [results, setResults] = useState([]);

  const handleTextChange = (event) => debouncedSearch(event.target.value);

  const debouncedSearch = useRef(
    debounce((nextQuery) => handleQueryUpdate(nextQuery), 100)
  ).current;

  const handleQueryUpdate = async (query) => {
    if (!query) {
      setResults([]);
    } else {
      let res = await search(query);
      if (res.error) {
        setResults([]);
      } else {
        setResults(res);
      }
    }
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        {
          <Link to="/" className="close-search">
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
        {results.length == 0 && (
          <div className="empty-results-header">
            <h2>
              No results for the chosen query, please try a different search.
            </h2>
          </div>
        )}
        <ol className="books-grid">
          {results.map((book) => {
            // The books returned in search results don't have a shelf property.
            // Set it ourselves via the shelf props passed by app.js
            book.shelf = "none";

            if (reading.find((x) => book.id === x.id)) {
              book.shelf = "currentlyReading";
            }

            if (read.find((x) => book.id === x.id)) {
              book.shelf = "read";
            }

            if (want.find((x) => book.id === x.id)) {
              book.shelf = "wantToRead";
            }

            return (
              <li key={book.id}>
                <Book book={book} moveBookToShelf={moveBookToShelf} />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

Search.propTypes = {
  reading: PropTypes.arrayOf(PropTypes.object),
  want: PropTypes.arrayOf(PropTypes.object),
  read: PropTypes.arrayOf(PropTypes.object),
  moveBookToShelf: PropTypes.func.isRequired,
};

export default Search;
