import React from "react";
import Titles from "../Titles";
import { BsCollectionFill } from "react-icons/bs";
import Movies from "../Movies";

const PopularMovies = ({movies}) => {
  return (
    <div className="my-16">
      <Titles title={"popular Movise"} Icon={BsCollectionFill} />
      <div className="grid sm:12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {movies.map((movie,index) =>(
          <Movies key={index} movie={movie}/>
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;
