// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks/#useeffect--uselayouteffect

import { ReactNode, createContext, useState } from "react";
import { Book } from "../components/Book";
import axios from "axios";

const BookContext = createContext<ValueToShareType>(null!);

type ValueToShareType = {
  // books and other needed functions
  books: Book[];
  fetchBooks: () => void;
  createBook: (title: string) => void;
  deleteBookById: (id: number) => void;
  editBookById: (id: number, title: string) => void;
};

interface Props {
  children?: ReactNode;
}

function Provider({ children }: Props) {
  const [books, setBooks] = useState<Book[]>([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

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

  //I need a bunch of states and functions to pass as value To share
  const valueToShare = {
    books,
    fetchBooks,
    createBook,
    editBookById,
    deleteBookById,
  };
  return (
    <BookContext.Provider value={valueToShare}>{children}</BookContext.Provider>
  );
}

export { Provider };
export default BookContext;
