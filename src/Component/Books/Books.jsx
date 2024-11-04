import React from 'react';

const Books = ({ book }) => {
  const { bookName, author, image } = book;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl p-6">
        <figure className="bg-blue-200 p-3">
          <img className="w-48" src={image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{author}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
