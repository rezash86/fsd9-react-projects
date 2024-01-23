import React, { useState } from "react";
import { Book } from "./Book";
import useBookContext from "../hooks/use-books-context";

interface Props {
  book: Book;
  onSubmit: () => void;
}

const BookEdit = ({ book, onSubmit }: Props) => {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useBookContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    editBookById(book.id, title);
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange} />
    </form>
  );
};

export default BookEdit;
