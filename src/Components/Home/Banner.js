import SwiperCodre ,{ Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Movies } from "../../Data/MoviesData";
// import im1 from '../../../public/imgs/im1.png';



const Banner = () => {

  return (
    <div className="relative w-full">
      <Swiper
        direction="vertical"
        slidesPerView={1}
        loop={true}
        speed={1000}
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="w-full xl:h-96 bg-dry lg:h-64 h-48 "

      >
        {Movies.map((movie, index) => (
          <SwiperSlide key={index} className=" ">
            <img
              src={`/imgs/${movie.titleImege}`}
              alt={movie.name}
              className="w-full h-full object-cover"
            />
                  {console.log(movie.titleImege
                    )}

            <div className="absolute linear-bg xl:pl-52 sm:pl-32 pl-8 top-0 bottom-0 right-0 left-0 flex flex-col justify-center lg:ggap-8 md:gap-5 gap-4">
                  <h1 className="xl:text-4xl truncate capitalize font-sans sm:text-xl font-bold">
                  {movie.name}
                    </h1>  

            </div>
          </SwiperSlide>
        )).splice(0 , 6)
        }
    
      </Swiper>
    </div>
  );
};

export default Banner;
