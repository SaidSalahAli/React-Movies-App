import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import FlexMoviesItems from "../FlexMoviesItems";
// import { Movies } from "../../Data/MoviesData";
// import im1 from '../../../public/imgs/im1.png';
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import Rating from "../Stars";

const Banner = ({ movies }) => {
  
  return (
    <div className="relative w-full  mt-6   rounded-md scale-105  ">
      <Swiper
        direction="vertical"
        slidesPerView={1}
        loop={true}
        speed={1000}
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="w-full  xl:h-96 bg-dry  lg:h-80 h-96 ">
        {movies
          .map((movie, index) => (
            <SwiperSlide
              key={index}
              className="relatvie rounded overflow-hidden ">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute linear-bg xl:pl-52 sm:pl-32 pl-8 top-0 bottom-0 right-0 left-0 flex flex-col justify-center lg:ggap-8 md:gap-5 gap-4">
                <h1 className="xl:text-4xl truncate capitalize font-sans sm:text-2xl font-bold">
                  {movie.title}
                </h1>

                <div className="flex  gap-5 items-center text-dryGray">
                  <FlexMoviesItems movie={movie} />
                </div>

                <div className="flex items-stretch  text-star">
                  <Rating className="" value={movie.vote_average} />
                </div>
                <div className="flex gap-5 iteme-center">
                  <Link
                   onClick={ window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}
                    to={`/movie/${movie.id}`}
                    className="bg-subMain hover:text-main transitions text-white px-8 py-3 rounded font-medium sm:text-sm ">
                    watch
                  </Link>
                  <button className="bg-white hover:text-subMain transitions text-white  px-4 py-3 rounded text-sm bg-opacity-30">
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
