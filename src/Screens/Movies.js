import React, { useState } from "react";
import { useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
// import { CgSpinner } from "react-icons/cg";
import Filters from "../Components/Filters";
import Movies from "../Components/Movie";
// import Head from "../Components/Home/Head";
import Layout from "../Layout/Layout";
import { getAllMoviess } from "../Redux/action/movieAction";

const MoviesPage = ({filterbygenre ,lengthfavourites,handleFavouritesClick}) => {

  const maxPages = 15;
  const [page, setPege] = useState(maxPages);
  const handelLodingMore = () => {
    setPege(page + maxPages);
  };

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
    <Layout lengthfavourites={lengthfavourites}>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="10"
        data-aos-offset="200"
        className="min-height-screen container mx-auto px-20 my-6">
        <Filters
          filterbygenre={filterbygenre}
        />
        <p className="text-lg front-medium my-6">
          TOTAL <span className="font-bold text-subMain">{movies?.length}</span>
        </p>
        <div className="grid sm:12 mt-6 xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 gap-8">
          {movies.slice(0, page)?.map((movie,id) => (
              <Movies handleFavouritesClick={handleFavouritesClick} key={id} movie={movie} />
          ))}
        </div>
        {/* loading More */}
        <div className="w-full flex-colo md:my-20 my-10  ">
          <button
            onClick={()=>handelLodingMore}
            className="flex gap-3 text-white  py-3 px-8 rounded-lg font-semibold border-2 hover:bg-subMain transitions border-subMain">
            More Movies...
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default MoviesPage;
