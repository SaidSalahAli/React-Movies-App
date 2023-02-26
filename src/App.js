import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import AboutUs from "./Screens/AboutUs";
import ContactUs from "./Screens/ContactUs";
import HomeScreen from "./Screens/HomeScreen";
import MoviesPage from "./Screens/Movies";
import NotFound from "./Screens/NotFound";
import SingleMovies from "./Screens/SingleMovies";
import WatchPage from "./Screens/WatchPage";

const App = () => {
  const [movies, setMovies] = useState([]);

  // const [sarchMovies , sarchMovies] = useState([])/
  // const moviesByYear = movies.filter((movie) => movie.release_date )
  // const allData = [...new Set(movies.map(data =>data.genre_ids))]
    // console.log(allData)
  //get all movies from API
  const gitAllMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=42289f94dc9eeeca0b3bac1a2bb4102d&language=en-US"
    );
    setMovies(res.data.results);
    
  };
  let newMovie = movies.filter(
    (ele) =>
      !["ja", "ko", "tl", "cn", "fr", "zh"].includes(ele.original_language) 
      // !ele.genre_ids.includes(10749)
  );
  useEffect(() => {
    // gitAllMovies()
    filterbygenre()
  }, []);

  // const sarchBage =async (word)=>{
  //   const res = await axios.get(
  //     `https://api.themoviedb.org/3/search/movie?api_key=42289f94dc9eeeca0b3bac1a2bb4102d&query=${word}&language=en-US`
  //   );

  //   setMovies(res.data.results)

  //  }

  // const filterbyYarse = async (yar) => {
  //   const res = await axios.get(
  //     `https://api.themoviedb.org/3/movie/popular?api_key=42289f94dc9eeeca0b3bac1a2bb4102d&year=${yar}&language=en-US`
  //   );

  //   setMovies(res.data.results);
  // };

  // Get movies by genre
  const filterbygenre = async (genre) => {
     
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=42289f94dc9eeeca0b3bac1a2bb4102d&with_genres=${genre}&language=en-US`
    );

    setMovies(res.data.results);
   
  };
  // filterbygenre(28)
  return (
    <Routes>
      <Route path="/" element={<HomeScreen movies={newMovie} />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route
        path="/movies"
        element={<MoviesPage filterbygenre={filterbygenre} movies={newMovie} />}
      />
      <Route path="/movie/:id" element={<SingleMovies movies={newMovie} />} />
      <Route path="/watch/:id" element={<WatchPage movies={newMovie} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
