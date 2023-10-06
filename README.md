# MyReads Project

MyReads is a React application used to search for and organize a collection of books. It uses a server hosted by Udacity to save shelf changes that persist as long as you use the same token generated and save in local storage.

## TL;DR

To run the app:

- install all project dependencies with `npm install`
- start the development server with `npm start`

To reset the app:

- clear the `token` in local storage. You can find this in Chrome Dev Tools by navigating to

  Application > Storage > Local Storage > http:localhost:3000

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

## Components

- [`App`](#appjs)
- [`Shelves`](#shelvesjs)
- [`Search`](#searchjs)
- [`Shelf`](#shelfjs)
- [`Book`](#bookjs)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Components

### `App.js`

This component is the root component of the application is is responsible for the state of the shelves. When the state is updated by callbacks, it updates the server and passes the updated state to the `Search` and `Shelves` components as props

### `Search.js`

This component takes in the 3 different bookshelves as props and handles the state of the `searchResults`. When `searchResults` are updated, it maps the `book.shelf` property according to the shelves provided as props by the caller (App.js in this case)

### `Shelves.js`

This component takes in the 3 different bookshelves as props and uses them to populate a list of `<Shelf/>` components. It also contains a button used to navigate to the `<Search/>` componenet

### `Shelf.js`

This component takes in a list of Books who share a common `shelf`. The displayable name of that shelf is passed in via the `shelfName` prop. The `books` passed in should all share the same `book.shelf` property, mapped upstream by the caller (App.js in this case). It then populates a list of Book componenets using the `books` prop.

### Book.js

This component takes in all of the book data, including title, author, and shelf, and renders a Book that can be displayed in either Search results or the home page. It tracks the `shelf` state, and when that state is updated, calls back the `onBookMoved` function so the App component can update the shelves accordingly.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
