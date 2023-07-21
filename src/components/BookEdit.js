import React from "react";
import { BsPencil, BsTrash } from "react-icons/bs";

function BookEdit() {
  return (
    <div className="book__edit">
      <div className="book__edit-container">
        {BsPencil}
        {BsTrash}
      </div>
    </div>
  );
}

export default BookEdit;
