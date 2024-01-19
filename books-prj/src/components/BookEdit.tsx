import React, { useState } from "react";
import { Book } from "./Book";

interface Props {
  book: Book;
  onEdit: (id: number, title: string) => void;

  onSubmit: () => void;
}

const BookEdit = ({ book, onEdit, onSubmit }: Props) => {
  const [title, setTitle] = useState(book.title);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    onEdit(book.id, title);
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
