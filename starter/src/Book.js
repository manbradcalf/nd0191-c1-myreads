import { useState } from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, moveBookToShelf }) => {
  const [shelf, setShelf] = useState(book.shelf);

  const onMoveToShelf = (event) => {
    setShelf(event.target.value);
    moveBookToShelf(book, book.shelf, event.target.value);
  };

  const shelves = [
    {
      id: '1',
      shelfName: 'currentlyReading',
      shelfDisplayName: 'Currently Reading',
    },
    {
      id: '2',
      shelfName: 'wantToRead',
      shelfDisplayName: 'Want To Read',
    },
    {
      id: '3',
      shelfName: 'read',
      shelfDisplayName: 'Read',
    },
    {
      id: '4',
      shelfName: 'none',
      shelfDisplayName: 'None',
    },
  ];
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks?.smallThumbnail ?? ''}})`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select onChange={onMoveToShelf} defaultValue={shelf}>
            <option disabled>Move to...</option>
            {shelves.map((s) => {
              return (
                <option value={s.shelfName} key={s.id}>
                  {s.shelfDisplayName}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors?.toString()}</div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  moveBookToShelf: PropTypes.func.isRequired,
};
export default Book;
