import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import AboutUs from './Screens/AboutUs'
import HomeScreen from './Screens/HomeScreen'
import NotFound from './Screens/NotFound'

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
    <Route path='*' element={<NotFound/>}/>
  </Routes>
  )
}

export default App