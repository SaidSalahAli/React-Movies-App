import React from "react";
import Titles from "../Titles";
import { BsCollectionFill } from "react-icons/bs";
import Movies from "../Movie";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllMoviess } from "../../Redux/action/movieAction";

const PopularMovies = ({handleFavouritesClick}) => {
  const [movies, setMovies] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMoviess());
  }, []);

  const dataMovies = useSelector((state) => state.movies);

  useEffect(() => {
    setMovies(dataMovies);
  }, [dataMovies]);

  return (
    <div className="my-16 mt-6 pl-20 pr-20">
      <Titles title={"All  Movise"} Icon={BsCollectionFill} />
      <div className="grid sm:12 mt-6 xl:grid-cols-4 lg:grid-cols-3  sm:grid-cols-2 xs:grid-cols-2 gap-8">
        {movies.map((movie,id) =>(
        <Movies handleFavouritesClick={handleFavouritesClick} key={id} movie={movie}/>
        )).splice(0, 15)}
      </div>
    </div>
  );
};

export default PopularMovies;
