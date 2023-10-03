import Book from "./Book";

const Shelf = ({ bookIds, moveBookToShelf }) => {
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {bookIds.map((bookId) => {
          return (
            <li key={bookId}>
              <Book bookId={bookId} moveBookToShelf={moveBookToShelf} />
            </li>
          );
        })}
      </ol>
    </div>
  );
};
export default Shelf;
