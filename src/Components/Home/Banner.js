import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import FlexMoviesItems from "../FlexMoviesItems";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import Rating from "../Stars";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllMoviess } from "../../Redux/action/movieAction";

const Banner = ({handleFavouritesClick}) => {
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
    <div className="relative absou w-full max-h-screen object-cover  rounded-md  ">
      <Swiper
        slidesPerView={1}
        loop={true}
        speed={1000}
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className=" w-full  max-h-screen  object-cover  bg-dry   ">
        {movies
          .map((movie, index) => (
            <SwiperSlide
              key={index}
              className="relatvie rounded overflow-hidden ">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                alt={movie.title}
                className="w-full  xl:inline-block h-full object-cover"
              />
              <div className="absolute  xl:pl-52 sm:pl-32 pl-8 text-xs top-0 bottom-0  lg:bottom-80 right-0 left-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4">
                <h1 className="xl:text-4xl text-4xl truncate capitalize font-sans font-bold">
                  {movie.title}
                </h1>

                <div className="flex  gap-5 items-center text-dryGray">
                  <FlexMoviesItems movie={movie} />
                </div>

                <div className="flex items-stretch  text-star">
                  <Rating className="" value={movie.vote_average} />
                </div>
                <div className="flex gap-5 z-10 iteme-center">
                  <Link
                    onClick={window.scrollTo({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    })}
                    to={`/movie/${movie.id}`}
                    className="bg-subMain text-xs  hover:text-main transitions text-white px-8 py-3 rounded font-medium sm:text-sm ">
                    watch
                  </Link>
                  <button 
                   onClick={() => handleFavouritesClick(movie)}
                   className="bg-white hover:text-subMain transitions text-white  px-4 py-3 rounded text-sm bg-opacity-30">
                    <FaHeart />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))
          .splice(0, 6)}
      </Swiper>
    </div>
  );
};

export default Banner;
