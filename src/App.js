import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Route, Routes, useParams } from 'react-router'
import AboutUs from './Screens/AboutUs'
import ContactUs from './Screens/ContactUs'
import HomeScreen from './Screens/HomeScreen'
import MoviesPage from './Screens/Movies'
import NotFound from './Screens/NotFound'
import SingleMovies from './Screens/SingleMovies'
import WatchPage from './Screens/WatchPage'

const App = () => {

  //get all movies from API

  const [movies , setMovies] = useState([])
  const gitAllMovies =async ()=>{
   const res = await axios.get( "https://api.themoviedb.org/3/movie/popular?api_key=42289f94dc9eeeca0b3bac1a2bb4102d&language=en-US")
   setMovies(res.data.results)
 
  }

  useEffect(()=>{
   gitAllMovies()
   
  },[]) 


  return (
  <Routes>
    <Route path='/' element={<HomeScreen  movies={movies}/>}/>
    <Route path='/about-us' element={<AboutUs/>}/>
    <Route path='/contact-us' element={<ContactUs/>}/>
    <Route path='/movies' element={<MoviesPage movies={movies}/>}/>
    <Route path='/movie/:id' element={<SingleMovies  movies={movies} />}/>
    <Route path='/watch/:id' element={<WatchPage movies={movies} />}/>

    <Route path='*' element={<NotFound/>}/>
  </Routes>
  )
}

export default App