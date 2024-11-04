import React from 'react';
import bookspic from '../../assets/books.jpg';

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 mb-36">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <div className="w-1/2">
            <img src={bookspic} className="w-full rounded-lg shadow-2xl" />
          </div>
          <div className="w-1/2">
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
