import { createStore, applyMiddleware } from "redux";
import{moviesReducer}  from "../reducer/moviesRaducer";
import thunk from "redux-thunk";
// import { composeWithDevTools } from 'redux-devtools-extension';

// 1- create a store
const store = createStore(moviesReducer, applyMiddleware(thunk))

export default store;