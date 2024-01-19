import React, { useState } from "react";

interface Props {
  onCreate: (title: string) => void;
}

const BookCreate = ({ onCreate }: Props) => {
  const [title, setTitle] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //changing the state of title
    setTitle(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onCreate(title);
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
