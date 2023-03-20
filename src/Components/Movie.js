import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";


  // console.log(movie)
  const Movies = ({ movie , handleFavouritesClick }) => {
//   const [movies,setMoives] = useState(
//      JSON.parse(localStorage.getItem("movies")) || "[]"
//     )

//     useEffect(() => {
//       localStorage.setItem("movies", JSON.stringify(movies))
//     },[])
//   console.log(movies)
// const  handleFav = () => {
//   let allMovies = [...movies,movie]
//   setMoives(allMovies)
//   localStorage.setItem('movies',JSON.stringify([...movies,movie]))
// }


  // const [storageItem, setStorageItem] = useState(() => JSON.parse(localStorage.getItem("favourites") || "[]"))

  // const isFavourited = storageItem.includes(movie)
  // console.log(isFavourited)
 
  // const handleToggleFavourite = () => {
  //   if (!isFavourited) {

  //     const newStorageItem = [...storageItem, movie]
  //     setStorageItem(newStorageItem);
  //     localStorage.setItem("favourites", JSON.stringify(newStorageItem))

  //   } else {

  //     const newStorageItem = storageItem.filter((savedId) => savedId !== movie.id)
  //     setStorageItem(newStorageItem);
  //     localStorage.setItem("favourites", JSON.stringify(newStorageItem))

  //   }
  // }
  return (
    <div className="border border-border p-1 hover:scale-105 hover:shadow-indigo-500/50 transitions relative rounded-lg  overflow-hidden shadow-lg">
      {movie ? (
        <div>
          <Link to={`/movie/${movie?.id}`} className="w-full" >
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
              onClick={()=> handleFavouritesClick(movie)}
              className="h-9 w-9 text-sm flex-colo transitions hover:bg-transparent border-2 border-subMain rounded-md bg-subMain text-white ">
              <FaHeart/>
            </button>
          </div>
        </div>
      ) : (
        <h1>said</h1>
      )}
    </div>
  );
};
export default Movies;
