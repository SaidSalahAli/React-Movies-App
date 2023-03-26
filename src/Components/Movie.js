import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Movies = ({ movie, handleFavouritesClick,favourites }) => {

  return (
    <div className="border h-80 border-border p-1 hover:scale-110 hover:shadow-indigo-500/50 transitions relative rounded-lg  overflow-hidden shadow-lg">
      {movie ? (
        <div>
          <Link to={`/movie/${movie?.id}`} className="w-full">
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                alt={movie.title}
                className="w-full h-96 object-cover shadow-lg rounded-lg  shadow-indigo-500/100"
              />
            ) : (
              <img
                src="/imgs/im1.png"
                alt={movie.title}
                className="w-full h-96 object-cover shadow-lg rounded-lg  shadow-indigo-500/100"
              />
            )}
          </Link>
          <div className="absolute flex-btn gap-2 bottom-0 right-0 left-0 bg-main bg-opacity-60 text-white px-5 py-5">
            <h3 className="font-semibold truncate">{movie?.title}</h3>
            <button
              onClick={() => handleFavouritesClick(movie)}
              className={" h-9 w-9 text-sm flex-colo transitions hover:bg-transparent border-2 border-subMain bg-subMain rounded-md  text-white  "}>
              <FaHeart />
            </button>
          </div>
        </div>
      ) : (
        <h1>No </h1>
      )}
    </div>
  );
};
export default Movies;
