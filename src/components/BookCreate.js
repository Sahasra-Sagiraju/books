import "../component-styles/BookCreate.css";
import React, { useState } from "react";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="title" className="form__label">
        Title:
      </label>
      <input
        type="text"
        name="title"
        id="title"
        className="form__input"
        onChange={handleChange}
        value={title}
      />
      <button className="btn btn__submit">Create book</button>
    </form>
  );
}

export default BookCreate;
