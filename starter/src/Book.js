const Book = ({ bookData, moveBookToShelf }) => {
  const onMoveToShelf = (event) => {
    moveBookToShelf(bookData, event.target.value);
  };

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${bookData.imageLinks.smallThumbnail}")`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select onChange={onMoveToShelf} defaultValue={bookData.shelf}>
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
      <div className="book-title">{bookData.title}</div>
      <div className="book-authors">{bookData.author}</div>
    </div>
  );
};
export default Book;
