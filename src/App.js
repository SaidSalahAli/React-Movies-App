import Aos from "aos";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import AboutUs from "./Screens/AboutUs";
import ContactUs from "./Screens/ContactUs";
import Categories from "./Screens/Dashboard/Admin/Categories";
import DashBoard from "./Screens/Dashboard/Admin/DashBoard";
import FavoritesMovies from "./Screens/Dashboard/favoritesMovies";
import Passwoed from "./Screens/Dashboard/Passwoed";
import Portfile from "./Screens/Dashboard/Portfile";
import HomeScreen from "./Screens/HomeScreen";
import Login from "./Screens/Login";
import MoviesPage from "./Screens/Movies";
import NotFound from "./Screens/NotFound";
import Register from "./Screens/Register";
import SingleMovies from "./Screens/SingleMovies";
import WatchPage from "./Screens/WatchPage";
import ScrollToped from "./ScrollToped";
import Research from "./Screens/Research";

const App = () => {
  Aos.init();

  const [favourites, setFavourites] = useState(
    () => JSON.parse(localStorage.getItem("favourites")) || "[]"
  );
  const lengthfavourites = favourites?.length;

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
  };
  const removeFavouriteMovie = (movie) =>{
    console.log(movie)
    const newFavouriteList = favourites.filter (
      (favourite) => favourite?.id !== movie?.id
    );

    setFavourites(newFavouriteList);
  };
  console.log(favourites)

  //   let newMovie = movies.filter(
  //     (ele) =>
  //       !["ja", "ko", "tl", "cn", "fr", "zh"].includes(ele.original_language) &&
  //       !ele.genre_ids.includes(10749)
  // );

  const removeAllMovies = (i) => setFavourites([]);

  return (
    <ScrollToped>
      <Routes>
        <Route
          path="/"
          element={
            <HomeScreen
              handleFavouritesClick={addFavouriteMovie}
              lengthfavourites={lengthfavourites}
            />
          }
        />
        <Route
          path="/about-us"
          element={<AboutUs lengthfavourites={lengthfavourites} />}
        />
        <Route
          path="/contact-us"
          element={<ContactUs lengthfavourites={lengthfavourites} />}
        />
        <Route
          path="/movies"
          element={
            <MoviesPage
              lengthfavourites={lengthfavourites}
              handleFavouritesClick={addFavouriteMovie}
            />
          }
        />
        <Route
          path="/research"
          element={<Research lengthfavourites={lengthfavourites} />}
        />
        <Route
          path="/movie/:id"
          element={<SingleMovies  handleFavouritesClick={addFavouriteMovie} lengthfavourites={lengthfavourites} />}
        />
        <Route
          path="/watch/:id"
          element={<WatchPage  lengthfavourites={lengthfavourites} />}
        />
        <Route
          path="/login"
          element={<Login lengthfavourites={lengthfavourites} />}
        />
        <Route
          path="/register"
          element={<Register lengthfavourites={lengthfavourites} />}
        />
        <Route
          path="/portfile"
          element={<Portfile lengthfavourites={lengthfavourites} />}
        />
        <Route
          path="/passwoed"
          element={<Passwoed lengthfavourites={lengthfavourites} />}
        />
        <Route
          path="/dashBoard"
          element={<DashBoard lengthfavourites={lengthfavourites} />}
        />

        <Route
          path="/favorites"
          element={
            <FavoritesMovies
              removeAllMovies={removeAllMovies}
              removeFavouriteMovie={removeFavouriteMovie}
              favourites={favourites}
              lengthfavourites={lengthfavourites}
            />
          }
        />
        <Route
          path="/categories"
          element={<Categories lengthfavourites={lengthfavourites} />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </ScrollToped>
  );
};

export default App;
