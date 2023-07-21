import "../component-styles/BookShow.css";
import "../component-styles/general.css";
import React from "react";
import { BsPencil } from "react-icons/bs";
import BookEdit from "./BookEdit";

const findThirdDotIndex = (inputString) => {
  let dotCount = 0;
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === ".") {
      dotCount++;
      if (dotCount === 3) {
        return i;
      }
    }
  }
  return inputString.length;
};

function BookShow({ book }) {
  const newDescription = book.description.replace(/\.{2,}/g, ".");
  const index = findThirdDotIndex(newDescription);
  const finalDescription = newDescription.slice(0, index + 1);
  console.log(finalDescription);
  return (
    <div className="card zero-col-gutter">
      <div className="card__img-box">
        <img
          className="card__img"
          src={book.coverURL}
          alt={`${book.title} book cover`}
        />
      </div>
      <div className="card__content">
        <h2 className="card__content-title">{book.title}</h2>
        <span className="card__content-publisher">{book.publisher}</span>
        <p className="card__content-description">{finalDescription}</p>
      </div>
      {/* <BookEdit /> */}
    </div>
  );
}

export default BookShow;
