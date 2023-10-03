import { useEffect, useState } from "react";
import { get } from "./BooksAPI";

const Book = ({ bookId, moveBookToShelf }) => {
  console.log("new book! " + bookId);
  const [book, setBook] = useState({
    imageLinks: { smallThumbail: "" },
    shelf: "none",
  });

  // TODO: Add a cleanup function
  useEffect(async () => {
    console.log("loading data for " + bookId);
    await load(bookId);
  }, []);

  const load = async (bookId) => {
    let res = await get(bookId);
    await onBookLoaded(res);
  };

  const onBookLoaded = async (book) => {
    setBook(book);
    console.log(
      `Book.js: ${book.title} ${book.id} is on shelf ${book.shelf} according to the service`
    );
  };

  const onMoveToShelf = (event) => {
    moveBookToShelf(bookId, event.target.value);
    let bookRef = book;
    bookRef.shelf= event.target.value;
    setBook(bookRef);
  };

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks.smallThumbnail}})`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select onChange={onMoveToShelf} defaultValue={book.shelf}>
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
