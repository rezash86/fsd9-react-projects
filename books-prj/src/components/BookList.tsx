import React from "react";
import { Book } from "./Book";
import BookShow from "./BookShow";

interface Props {
  books: Book[];
  onDelete: (id: number) => void;
  onEdit: (id: number, title: string) => void;
}

const BookList = ({ books, onDelete, onEdit }: Props) => {
  const renderedBooks = books.map((book) => {
    //we will create dynamic components for each book
    return (
      <div>
        <BookShow
          key={book.id}
          book={book}
          onDelete={onDelete}
          onEdit={onEdit}
        ></BookShow>
      </div>
    );
  });

  return <div className="book-list">{renderedBooks}</div>;
};

export default BookList;
