import React from "react";
import { BsCollectionFill } from "react-icons/bs";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Movies from "../Movie";
import Titles from "../Titles";

const MovieSimilar = ({ movieSimilar }) => {
  return (
    <div className="my-16 h-full">
      <Titles title="Related moveis" Icon={BsCollectionFill} />

      <Swiper
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={1000}
        module={[Autoplay]}
        spaceBetween={10}
        breakpoints={{
          0: { slidesPerView: 1 },
          400: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          991: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 6 },
        }}>
        {movieSimilar?.map((movi, id) => (
          <SwiperSlide key={id}>
            <div className=" p-1 my-10 h-auto hovered   hover:scale-105  hover:shadow-indigo-500/50 shadow-lg transitions relative rounded-lg  overflow-hidden ">
              <Movies key={id} movie={movi} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieSimilar;
