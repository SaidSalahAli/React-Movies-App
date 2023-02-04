import React, { useState } from "react";
import Titles from "../Titles";
import { BsBookmarkStarFill,  BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Rating from "../Stars";

const TopRated = ({ movies }) => {
  const [nextEl, setNextEl] = useState(null);
  const [prevEl, setPrevEl] = useState(null);
  const classNames = "hover:bg-dry transitions text-sm rounded w-8 h-8 flex-colo bg-subMain text-white" ;

  return (
    <div className="my-16 static  ">
      <Titles title="Top Rated" Icon={BsBookmarkStarFill} />
      <div className="relative mt-10 my-16 ">
        <Swiper
          navigation={{ nextEl, prevEl }}
          slidesPerView={4}
          spaceBetween={40}
          autoplay={true}
          speed={1000}
          loop={true}
          modules={[Navigation, Autoplay]}>
          {movies
            .map((movie, index) =>
              movie.vote_average > 7 ? (
                <SwiperSlide key={index}>
                  {console.log(movie.vote_average)}
                  <div className="py-8">
                    <div className=" p-1 h-rate hovered border  border-border hover:scale-105 hover:shadow-indigo-500/50 shadow-lg transitions relative rounded-lg  overflow-hidden ">
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt=""
                        className="w-full h-full object-cover  shadow-lg rounded-lg shadow-indigo-500/100"
                      />
                      <div className="px-4 transitions hoveres gap-6  text-center absolute bg-black bg-opacity-70 top-0  left-0 right-0 bottom-0">
                        <button className="w-12 h-12 flex-colo transitions hover:bg-subMain rounded-full bg-white bg-opacity-30 text-white">
                          <FaHeart />
                        </button>
                        <Link
                          to={`/movie/${movie.title}`}
                          className="font-semibold text-xl trancuted line-clamp-2">
                          {movie.title}
                        </Link>
                        {/* create stars */}
                        <div className="inline-flex items-baseline text-star">
                          <Rating value={movie.vote_average} />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ) : (
                ""
              )
            )
            .splice(0, 10)}
        </Swiper>
        {/* {flex justify-between} */}
        <div className="flex justify-between   ">
          <button className={classNames} ref={(node) => setPrevEl(node)}>
            <BsCaretLeftFill />
          </button>
          <button className={classNames} ref={(node) => setNextEl(node)}>
            <BsCaretRightFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopRated;
