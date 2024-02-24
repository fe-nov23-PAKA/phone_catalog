import React from "react";
import { Link } from "react-router-dom";

export const NotFoundPage: React.FC = () => {
  return (
    <div
      className="flex min-h-screen flex-grow items-center 
    justify-center bg-lightness bg-cover"
    >
      <div
        className="mx-4 rounded-xl p-8 text-center 
        shadow-2xl shadow-zinc-950 backdrop-invert sm:mx-6 sm:max-w-xl xl:mx-8 xl:max-w-2xl"
      >
        <h1 className="mb-6 text-6xl font-bold text-404color sm:text-7xl">
          404
        </h1>
        <p className="text-3xl font-semibold text-gray-300">
          Oops! The page you are looking for could not be found.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block rounded bg-accent 
    px-6 py-4 font-bold text-white 
     transition-all hover:bg-404color hover:text-black hover:shadow-sh1"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
};
