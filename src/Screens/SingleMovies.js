import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieSimilar from "../Components/single/MovieSimilar";
import MovieInfo from "../Components/single/MovieInfo";
import MovieRates from "../Components/single/MovieRates";
import Layout from "../Layout/Layout";
import ShareModel from "../Components/Model/ShareModel";
import WatchPage from "./WatchPage";
import Watchs from "./watch";

const SingleMovies = ({lengthfavourites,handleFavouritesClick}) => {
  const param = useParams();
  let movieId = param.id ;
  const [movie, setMovie] = useState({});

  // 

  const getMovieDetails = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${param.id}?api_key=42289f94dc9eeeca0b3bac1a2bb4102d&language=en-US`
    );
    setMovie(res.data);
  };

  const [movieSimilar, setMovieSimilar] = useState([]);
  
  const MovieSimilarr = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${param.id}/similar?api_key=42289f94dc9eeeca0b3bac1a2bb4102d&language=en-US&page=1`
    );
    setMovieSimilar(res.data.results);
  };

  useEffect(() => {
    MovieSimilarr();
    getMovieDetails();

  }, [movieId]);

  // console.log(movie)
  const [modelOpen,setModelLopen ] =useState(false)

  return (
    <Layout lengthfavourites={lengthfavourites}>
      <ShareModel modelOpen={modelOpen} setModelLopen={setModelLopen} 
      movie={movie}
      />
      <MovieInfo movie={movie} setModelLopen={setModelLopen}  />
      <Watchs handleFavouritesClick={handleFavouritesClick} />
      <div className="container mx-auto min-h-screen px-2 my-6 ">
        {/* <MoviesCasts movie={movie} /> */}
        {/* Rates */}
        <MovieRates movie={movie} />
        {/* Movie Similar */}
        <MovieSimilar movieSimilar={movieSimilar} />
      </div>
    </Layout>
  );
};

export default SingleMovies;

// <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
// {movieSimilar
//   .map((movie) => <Movies key={movie.id} movie={movie} />)
//   .slice(0, 10)}
// </div>
