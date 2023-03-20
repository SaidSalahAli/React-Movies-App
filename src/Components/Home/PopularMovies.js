import React from "react";
import Titles from "../Titles";
import { BsCollectionFill } from "react-icons/bs";
import Movies from "../Movie";

const PopularMovies = ({movies,handleFavouritesClick}) => {
  
  return (
    <div className="my-16 mt-6">
      <Titles title={"popular Movise"} Icon={BsCollectionFill} />
      <div className="grid sm:12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {movies.map((movie,id) =>(
        <Movies handleFavouritesClick={handleFavouritesClick} key={id} movie={movie}/>
        )).splice(0, 12)}
      </div>
    </div>
  );
};

export default PopularMovies;
