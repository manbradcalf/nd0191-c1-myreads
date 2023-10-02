import Book from "./Book";

const Shelf = ({ books, shelfName, moveBookToShelf }) => {
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map((book) => {
          return (
            <li key={book.title}>
              <Book bookData={book} moveBookToShelf={moveBookToShelf} />
            </li>
          );
        })}
      </ol>
    </div>
  );
};
export default Shelf;
