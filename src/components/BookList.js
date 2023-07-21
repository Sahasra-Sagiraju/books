import "../component-styles/general.css";
import "../component-styles/BookList.css";
import React from "react";
import BookShow from "./BookShow";

function BookList({ booksList }) {
  const renderedBooksList = booksList.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });
  return (
    <div className="books-list">
      <h1 className="books-list__header heading-primary">Want to read</h1>
      <div className="container grid grid-2-cols">{renderedBooksList}</div>
    </div>
  );
}

export default BookList;
