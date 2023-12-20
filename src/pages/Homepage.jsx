import React from 'react';
import Plus from '../components/Plus';
import react from '../assets/react.svg';

function Homepage() {
  return (
    <div className="min-h-screen flex items-center px-4">
      <section className="max-w-screen-xl mx-auto flex flex-col justify-center w-full">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-8">
            <img
              className="w-16 h-16 rounded-full ring-2 ring-gray "
              src="/rafiq.jpg"
              alt="Rounded avatar"
            />
            <img
              className="w-16 h-16 rounded-full animate-spin"
              src={react}
              alt="Rounded avatar"
            />
          </div>
          <div className="font-incon text-center text-xs uppercase">
            <p>
              Welcome to my portfolio website
              {' '}
              <br />
              {' '}
              [use dekstop for better
              experience]
            </p>
          </div>
        </div>
        <div className="flex lg:justify-between justify-center items-center">
          <div className="hidden lg:block">
            <Plus size="50" />
          </div>
          <div className="text-center uppercase">
            <h2 className="font-dharma font-semibold lg:text-[25rem]  text-[10rem] leading-none cursor-default">
              hello !
            </h2>
          </div>
          <div className="hidden lg:block">
            <Plus size="50" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
