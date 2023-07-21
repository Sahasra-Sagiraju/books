import "./component-styles/App.css";
import React, { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BookEdit from "./components/BookEdit";
import getAPISearchResult from "./components/APISearchResult";
import summarise from "./components/APISummarise";

// getAPISearchResult("Harry Potter");
summarise("hasta luego");

function App() {
  const [books, setBooks] = useState([]);

  const handleBookCreateSubmit = async (title) => {
    // console.log(newBook);
    const book = await getAPISearchResult(title);
    setBooks([...books, book]);
  };

  return (
    <div>
      <BookList booksList={books} />
      <BookEdit />
      {/* <img
        src="http://books.google.com/books/content?id=Ix6AuAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        alt=""
      /> */}
      {/* <img
        src="http://books.google.com/books/content?id=7Xq7AAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        alt=""
      />
      <img
        src="http://books.google.com/books/content?id=jUEwwwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        alt=""
      /> */}
      <BookCreate onCreate={handleBookCreateSubmit} />
    </div>
  );
}

export default App;
