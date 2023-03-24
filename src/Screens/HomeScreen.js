import React from "react";
import Banner from "../Components/Home/Banner";
import PopularMovies from "../Components/Home/PopularMovies";
// import Promos from '../Components/Home/Promos'
import TopRated from "../Components/Home/TopRated";
import Layout from "../Layout/Layout";

const HomeScreen = ({
  getAllMovieSarsh,
  lengthfavourites,
  handleFavouritesClick,
}) => {
  return (
    <Layout
      lengthfavourites={lengthfavourites}
      getAllMovieSarsh={getAllMovieSarsh}>
      <Banner handleFavouritesClick={handleFavouritesClick} />
      <TopRated  handleFavouritesClick={handleFavouritesClick} />
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="10"
        data-aos-offset="200"
        className="container mx-auto min-h-screen px-20 mb-6">
        <PopularMovies handleFavouritesClick={handleFavouritesClick} />
      </div>
    </Layout>
  );
};

export default HomeScreen;
