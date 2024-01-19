import React, { useState } from "react";
import { Book } from "./Book";
import BookEdit from "./BookEdit";

interface Props {
  book: Book;
  onDelete: (id: number) => void;
  onEdit: (id: number, title: string) => void;
}

const BookShow = ({ book, onDelete, onEdit }: Props) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = (
      <BookEdit onSubmit={handleSubmit} onEdit={onEdit} book={book}></BookEdit>
    );
  }
  return (
    <div className="book-show">
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
