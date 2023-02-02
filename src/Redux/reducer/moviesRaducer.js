import { ALLMOVIES } from "../types/moviesType";
//
 const initalValue = { movies: [], pageCount: 500 };
//2- creat a reducer
export const moviesReducer = (state = initalValue, action) => {
  switch (action.type) {
    case ALLMOVIES:
      return { movies: action.data, pageCount: action.pages };
    default:
      return state;
  }
};

