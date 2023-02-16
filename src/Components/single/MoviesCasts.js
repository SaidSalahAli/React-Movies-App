
import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Titles from "../Titles";

const MoviesCasts = ({ movie }) => {
  return (
    <div className="my-12">
      <Titles title="Producing companies" Icon={FaUserFriends} />
      <div className="mt-10">
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
          {movie.production_companies?.map((imes, id) => (
            <SwiperSlide key={id}>
              <div className="w-full p-3 italic text-xs text-text rounded flex-colo bg-dry border border-gray-800  ">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${imes?.logo_path}`}
                  className="w-full h-64 object-cover rounded mb-4"
                  alt=""
                />
                <p>{imes?.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MoviesCasts;
