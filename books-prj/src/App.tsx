import { useState } from "react";

import "./App.css";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { Book } from "./components/Book";
import axios from "axios";

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  //https://state-updates.vercel.app/#Adding%20Elements
  const createBook = async (title: string) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });

    // use the state and add a new book to the existing books
    const updatedBooks = [...books, response.data];

    //calling setbooks is mandatory to update the state
    setBooks(updatedBooks);
  };

  const deleteBookById = async (id: number) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const editBookById = async (id: number, newTitle: string) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
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
      <button onClick={fetchBooks}>Fetch the books</button>
    </>
  );
}

export default App;
