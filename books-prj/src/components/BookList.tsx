import React, { useContext } from "react";
import { Book } from "./Book";
import BookShow from "./BookShow";
import useBookContext from "../hooks/use-books-context";

const BookList = () => {
  const { books } = useBookContext();

  const renderedBooks = books.map((book) => {
    //we will create dynamic components for each book
    return (
      <div>
        <BookShow key={book.id} book={book}></BookShow>
      </div>
    );
  });

  return <div className="book-list">{renderedBooks}</div>;
};

export default BookList;
