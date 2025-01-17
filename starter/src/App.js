import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getAll, update } from './BooksAPI';
import Shelves from './Shelves';
import Search from './Search';

function App() {
  const [wantToRead, setWantToRead] = useState([]);
  const [reading, setReading] = useState([]);
  const [read, setRead] = useState([]);

  // called on initial startup
  useEffect(() => {
    async function fetchData() {
      let books = await getAll();
      setRead(books.filter((x) => x.shelf === 'read'));
      setWantToRead(books.filter((x) => x.shelf === 'wantToRead'));
      setReading(books.filter((x) => x.shelf === 'currentlyReading'));
    }
    fetchData();
  }, []);

  const onBookMoved = async (book, oldShelf, newShelf) => {
    let updateRes = await update(book, newShelf);
    if (
      (updateRes[oldShelf] && updateRes[newShelf]) ||
      oldShelf === 'none' ||
      newShelf === 'none'
    ) {
      updateUI(book, oldShelf, newShelf);
    } else {
      alert('update failed. try again.');
    }
  };

  const updateUI = (book, oldShelf, newShelf) => {
    switch (oldShelf) {
      case 'currentlyReading':
        let newReading = reading.filter((x) => x.id !== book.id);
        setReading(newReading);
        break;
      case 'wantToRead':
        let newWantToRead = wantToRead.filter((x) => x.id !== book.id);
        setWantToRead(newWantToRead);
        break;
      case 'read':
        let newRead = read.filter((x) => x.id !== book.id);
        setRead(newRead);
        break;
      case 'none':
        // "none" is a valid shelf type but we do not track it
        break;
      default:
        console.error(
          `Tried to move ${book.title} from unrecognized shelf: ${oldShelf}`
        );
    }

    book.shelf = newShelf;
    switch (newShelf) {
      case 'currentlyReading':
        setReading([...reading, book]);
        break;
      case 'wantToRead':
        setWantToRead([...wantToRead, book]);
        break;
      case 'read':
        setRead([...read, book]);
        break;
      case 'none':
        // "none" is a valid shelf type but we do not track it
        break;
      default:
        console.error(
          `Tried to move ${book.title} to unrecognized shelf: ${newShelf}`
        );
    }
  };
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/*"
            element={
              <Shelves
                reading={reading}
                want={wantToRead}
                read={read}
                moveBookToShelf={onBookMoved}
              />
            }
          />
          <Route
            path="/search"
            element={
              <Search
                reading={reading}
                want={wantToRead}
                read={read}
                moveBookToShelf={onBookMoved}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
