import Book from "./Book";

const Shelf = ({ books, shelfName, moveBookToShelf }) => {
  return (
    <div className="list-books-content">
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{shelfName}</h2>
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
        </div>
      </div>
    </div>
  );
};
export default Shelf;
