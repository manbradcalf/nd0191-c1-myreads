import { useEffect, useState } from "react";
import { get } from "./BooksAPI";

const Book = ({ book, moveBookToShelf }) => {
  const [shelf, setShelf] = useState(book.shelf);

  const onMoveToShelf = (event) => {
    setShelf(event.target.value);
    moveBookToShelf(book, book.shelf, event.target.value);
  };

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks?.smallThumbnail ?? ""}})`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select onChange={onMoveToShelf} defaultValue={shelf}>
            <option value="none" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors?.toString()}</div>
    </div>
  );
};
export default Book;
