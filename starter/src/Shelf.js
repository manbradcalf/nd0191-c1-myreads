import Book from "./Book";

const Shelf = ({ books, moveBookToShelf }) => {
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books?.map((book) => {
          return (
            <li key={book.id}>
              <Book book={book} moveBookToShelf={moveBookToShelf} />
            </li>
          );
        })}
      </ol>
    </div>
  );
};
export default Shelf;
