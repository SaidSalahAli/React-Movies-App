import React from "react";
import { FaPlay, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import FlexMoviesItems from "../FlexMoviesItems";
import Rating from "../Stars";
const MovieInfo = ({ movie,setModelLopen }) => {

  // const movieProductionCompanies= movie && movie.production_companies?.map((company) =>{
  //   return company.name.toString();
  // // })
  // console.log(movieProductionCompanies)
  return (
    <div className="w-full xl:h-full relative text-white">
      {movie?.backdrop_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
          alt={movie?.title}
          className="w-full hidden xl:inline-block h-full object-cover"
        />
      ) : (
        <img
          src="/imgs/bg2.jpg"
          alt={movie?.title}
          className="w-full hidden xl:inline-block h- object-cover"
        />
      )}

      <div className="xl:bg-main bg-dry flex-colo xl:bg-opacity-90 p-20 xl:absolute top-0 left-0 right-0 bottom-0 ">
        <div className="cotainer px-3 mx-auto 2xl:px-32 xl:grid grid-cols-3 flex-colo py-10 lg:py-20 gap-8">
          <div className="xl:col-span-1 w-full xl:order-none h-header bg-dry bprder border-gray-800  rounded-lg overflow-hidden">
            {movie?.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                alt={movie?.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src="/imgs/im1.png"
                alt={movie?.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="col-span-2 md:grid grid-cols-5 gap-4 items-center">
            <div className="col-span-3 flex flex-col gap-10">
              {/* Title movie */}
          
              <h1 className="xl:text-4x1 capitalize font-sans text-2xl font-bold">
                {movie?.title}
              </h1>
              <div className="flex items-center gap-4 font-medium text-dryGray">
                <div className="flex-colo bg-subMain text-xs px-2 py-1">
                  {movie?.vote_count} K
                </div>
                <FlexMoviesItems movie={movie} />
              </div>
              <div className="inline-flex items-baseline text-star">
                          <Rating value={movie.vote_average} />
                        </div>
              {/* descrepthion*/}
              <p className="text-text text-sm leading-7 ">{movie?.overview}</p>
              {/* <h1 className="xl:text-4x1 capitalize font-sans text-2xl font-bold">
                {movieProductionCompanies}
              </h1> */}
              <div className="grid sm:grid-cols-5 grid-cols-3 gap-4 p-6 bg-main border-gray-800 rounded-lg">
                {/* share */}
                <div className=" col-span-1 flex-colo border-r border-border">
                  <button 
                  onClick={()=> setModelLopen(true)}
                  className=" w-10 h-10 flex-colo rounded-lg bg-white bg-opacity-20">
                    <FaShareAlt />
                  </button>
                </div>
                {/* Language */}
                <div className="col-span-2 flex-colo font-medium text-sm">
                  <p>
                    Language :{" "}
                    <span className="ml-2  truncate uppercase">
                      {movie && movie.spoken_languages?.[0]  ? movie.spoken_languages?.[0].english_name : null}
                    </span>
                    <span className="ml-6 mt-2 flex justify-start truncate uppercase">
                     type : {" "} {movie && movie.genres?.[0] ? movie.genres?.[0].name : null} 
                    </span>
                  </p>
                </div>
                {/* watch button  */}
                <div className="sm:col-span-2 col-span-3 flex  font-medium text-sm ">
                  <Link
                    to={`/watch/${movie?.id}`}
                    className="bg-dry py-4 hover:bg-subMain transitions border-2 border-subMain rounded-full flex justify-center  gap-4 w-full sm:py-3">
                    {/* <div className="flex justify-between"> */}
                    Watch <FaPlay className=" h-auto w-3  " />
                    {/* </div> */}
                  </Link>
                </div>
              </div>
              <div>
                
              </div>
            
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
