import axios from "axios";

const cmp = function (a, b) {
  if (a[0] === b[0]) {
    return a[1] === b[1] ? a[2] - b[2] : b[1] - a[1];
  }
  return b[0] - a[0];
};

const APISearchResult = async (rawTitle) => {
  const refinedTitle = rawTitle.toLowerCase();
  const uriEncodedTitle = encodeURIComponent(refinedTitle);
  const response = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${uriEncodedTitle}`
  );
  console.log(response);

  const responseBooksList = response.data.items;
  const bookDataAvailable = responseBooksList.map(function (book, index) {
    const info = book.volumeInfo;
    if (!info.title.toLowerCase().includes(refinedTitle)) {
      return [0, info.averageRating ?? 0, index];
    }
    let count = 0;
    if (info.authors) count++;
    if (info.averageRating) count++;
    if (info.description) count++;
    if (info.maturityRating) count++;
    if (info.publisher) count++;
    return [count, info.averageRating ?? 0, index];
  });

  bookDataAvailable.sort(cmp);

  // console.log(`Book Index: ${bookDataAvailable[0][2]}`);
  // console.log(bookDataAvailable);

  const bookObjIndex = bookDataAvailable[0][2];
  const bookObj = responseBooksList[bookObjIndex];
  const bookTitle = bookObj.volumeInfo.title;
  const bookDescription = bookObj.volumeInfo.description ?? "N/A";
  const bookAuthors = bookObj.volumeInfo.authors;
  const bookMaturityRating = bookObj.volumeInfo.maturityRating ?? "N/A";
  const bookAverageRAting = bookObj.volumeInfo.averageRating ?? "N/A";
  const bookPublisher = bookObj.volumeInfo.publisher ?? "N/A";
  const bookCoverURL = bookObj.volumeInfo.imageLinks.thumbnail;
  const bookRatingsCount = bookObj.volumeInfo.ratingsCount ?? "";
  const bookId = bookObj.id;

  // console.log(`
  // index: ${bookObjIndex}
  // bookObj: ${bookObj}
  // title: ${bookTitle}
  // description: ${bookDescription}
  // authors: ${bookAuthors}
  // maturity: ${bookMaturityRating}
  // average rating: ${bookAverageRAting}
  // publisher: ${bookPublisher}
  // coverURL: ${bookCoverURL}
  // ratings count: ${bookRatingsCount}
  // `);

  const book = {
    title: bookTitle,
    description: bookDescription,
    authors: bookAuthors,
    maturityRating: bookMaturityRating,
    averageRating: bookAverageRAting,
    publisher: bookPublisher,
    coverURL: bookCoverURL,
    ratingsCount: bookRatingsCount,
    id: bookId,
  };

  return book;
};

export default APISearchResult;

/*
  Title, Author, Maturity rating, publisher
*/
