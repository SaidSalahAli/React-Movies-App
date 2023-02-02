import { ALLMOVIES, moviesApi } from "../types/moviesType";
import axios from "axios";
// import { moviesApiShearsh } from "../types/moviesALLMOVIESType";
export const getAllMoviess = () => {
  return async (dispatch) => {
    const res = await axios.get(moviesApi);

    dispatch({
      type: ALLMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};

export const getAllMovieSarsh = (word) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=42289f94dc9eeeca0b3bac1a2bb4102d&query=${word}&language=en-US`
    );

    dispatch({
      type: ALLMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};

export const getpeges = (page) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=42289f94dc9eeeca0b3bac1a2bb4102d&language=en-US&page=${page}`
    );
    console.log(res);
    dispatch({
      type: ALLMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};
