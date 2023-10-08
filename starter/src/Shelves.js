import { Link } from 'react-router-dom';
import Search from './Search';
import Shelf from './Shelf';
import PropTypes from 'prop-types';

const Shelves = ({ reading, want, read, moveBookToShelf }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <Shelf
        books={reading}
        shelfName={'Currently Reading'}
        moveBookToShelf={moveBookToShelf}
      />
      <Shelf
        books={want}
        shelfName={'Want To Read'}
        moveBookToShelf={moveBookToShelf}
      />
      <Shelf
        books={read}
        shelfName={'Read'}
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

Search.propTypes = {
  reading: PropTypes.arrayOf(PropTypes.object),
  want: PropTypes.arrayOf(PropTypes.object),
  read: PropTypes.arrayOf(PropTypes.object),
  moveBookToShelf: PropTypes.func.isRequired,
};

export default Shelves;
