import { useState } from "react";

import "./App.css";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { Book } from "./components/Book";

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  //https://state-updates.vercel.app/#Adding%20Elements
  const createBook = (title: string) => {
    // use the state and add a new book to the existing books
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ];

    //calling setbooks is mandatory to update the state
    setBooks(updatedBooks);
  };

  const deleteBookById = (id: number) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const editBookById = (id: number, newTitle: string) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });

    setBooks(updatedBooks);
  };

  return (
    <>
      <h1>Reading List</h1>
      <BookList
        books={books}
        onDelete={deleteBookById}
        onEdit={editBookById}
      ></BookList>
      <BookCreate onCreate={createBook}></BookCreate>
    </>
  );
}

export default App;
