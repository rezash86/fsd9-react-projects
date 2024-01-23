import React, { useState } from "react";
import useBookContext from "../hooks/use-books-context";

const BookCreate = () => {
  const [title, setTitle] = useState("");
  const { createBook } = useBookContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //changing the state of title
    setTitle(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    createBook(title);
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title of the book</label>
        <input value={title} onChange={handleChange} />
        <button>Create !</button>
      </form>
    </div>
  );
};

export default BookCreate;
