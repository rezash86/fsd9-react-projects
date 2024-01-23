import React, { useState } from "react";
import { Book } from "./Book";
import BookEdit from "./BookEdit";
import useBookContext from "../hooks/use-books-context";

interface Props {
  book: Book;
}

const BookShow = ({ book }: Props) => {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById } = useBookContext();

  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book}></BookEdit>;
  }
  return (
    <div className="book-show">
      <img alt="book" src={`http://picsum.photos/seed/${book.id}/300/200`} />
      <h3>{content}</h3>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
