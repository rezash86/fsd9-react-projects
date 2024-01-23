import { useContext, useEffect, useState } from "react";

import "./App.css";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { Book } from "./components/Book";
import axios from "axios";
import useBookContext from "./hooks/use-books-context";
// import BooksContext from "./context/Books";

function App() {
  // const { fetchBooks } = useContext(BooksContext);
  const { fetchBooks } = useBookContext();

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      <h1>Reading List</h1>
      <BookList></BookList>
      <BookCreate></BookCreate>
    </>
  );
}

export default App;
