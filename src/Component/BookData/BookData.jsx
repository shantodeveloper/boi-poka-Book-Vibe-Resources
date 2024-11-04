import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';

const BookData = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('./booksData.json')
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold underline text-center">Books</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-36">
        {books.map(book => (
          <Books key={book.id} book={book}></Books>
        ))}
      </div>
    </div>
  );
};

export default BookData;
