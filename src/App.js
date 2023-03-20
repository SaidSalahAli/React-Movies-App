import Aos from "aos";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import AboutUs from "./Screens/AboutUs";
import ContactUs from "./Screens/ContactUs";
import Categories from "./Screens/Dashboard/Admin/Categories";
import DashBoard from "./Screens/Dashboard/Admin/DashBoard";
import Movieslist from "./Screens/Dashboard/Admin/MoviesList";
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
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  // console.log(favourites.length)
  const lengthfavourites = favourites?.length;

  console.log(lengthfavourites);
  // cost [sarchMovies , sarchMovies] = useState([])/
  // const moviesByYear = movies.filter((movie) => movie.release_date )
  // const allData = [...new Set(movies.map(data =>data.genre_ids))]
  // console.log(allData)

  // console.log(favourites)
  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
  };
  //get all movies from API
  const getAllMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=42289f94dc9eeeca0b3bac1a2bb4102d&language=en-US"
    );
    setMovies(res.data.results);
  };
  let newMovie = movies.filter(
    (ele) =>
      !["ja", "ko", "tl", "cn", "fr", "zh"].includes(ele.original_language) &&
      !ele.genre_ids.includes(10749)
  );

  const getAllMovieSarsh = async (word) => {
    if (word === "") {
      getAllMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=42289f94dc9eeeca0b3bac1a2bb4102d&query=${word}&language=en-US`
      );
      setMovies(res.data.results);
    }
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  const filterbygenre = async (genre) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=42289f94dc9eeeca0b3bac1a2bb4102d&with_genres=${genre}&language=en-US`
    );

    setMovies(res.data.results);
  };
  return (
    <ScrollToped>
      <Routes>
        <Route
          path="/"
          element={
            <HomeScreen
              movies={newMovie}
              handleFavouritesClick={addFavouriteMovie}
              lengthfavourites={lengthfavourites}
              getAllMovieSarsh={getAllMovieSarsh}
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
              filterbygenre={filterbygenre}
              movies={newMovie}
            />
          }
        />
        <Route
          path="/research"
          element={
            <Research
              lengthfavourites={lengthfavourites}
              getAllMovieSarsh={getAllMovieSarsh}
              movies={newMovie}
            />
          }
        />
        <Route
          path="/movie/:id"
          element={
            <SingleMovies
              movies={newMovie}
              lengthfavourites={lengthfavourites}
            />
          }
        />
        <Route
          path="/watch/:id"
          element={
            <WatchPage movies={newMovie} lengthfavourites={lengthfavourites} />
          }
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
          element={
            <DashBoard movies={newMovie} lengthfavourites={lengthfavourites} />
          }
        />

        <Route
          path="/favorites"
          element={
            <FavoritesMovies
              favourites={favourites}
              lengthfavourites={lengthfavourites}
            />
          }
        />
        <Route
          path="/movieslist"
          element={
            <Movieslist movies={newMovie} lengthfavourites={lengthfavourites} />
          }
        />
        <Route
          path="/categories"
          element={
            <Categories movies={newMovie} lengthfavourites={lengthfavourites} />
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </ScrollToped>
  );
};

export default App;
