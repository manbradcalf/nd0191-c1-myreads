import { useEffect, useState } from "react";
import { get } from "./BooksAPI";

const Book = ({ book, moveBookToShelf }) => {
  // console.log(`Book.js: book.shelf for ${book.title} is ${book.shelf}`);
  const [shelf, setShelf] = useState(book.shelf);

  const onMoveToShelf = (event) => {
    moveBookToShelf(book.id, book.shelf, event.target.value);
    setShelf(event.target.value);
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
      <div className="book-authors">{book.author}</div>
    </div>
  );
};
export default Book;
