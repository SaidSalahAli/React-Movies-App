import React from "react";
import { Link } from "react-router-dom";

const Movies = ({ movie }) => {
  return (
    <div className="border border-border p-1 hover:scale-105 hover:shadow-indigo-500/50 transitions relative rounded-lg  overflow-hidden shadow-lg">
      <Link to={`/movies/${movie.title}`} className="w-full">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-full object-cover shadow-lg rounded-lg  shadow-indigo-500/100"
        />
      </Link>
      <div className="absolute"></div>
    </div>
  );
};

export default Movies;
