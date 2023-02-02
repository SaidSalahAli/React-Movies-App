import React from 'react'
import { Route, Routes } from 'react-router'
import AboutUs from './Screens/AboutUs'
import HomeScreen from './Screens/HomeScreen'
import NotFound from './Screens/NotFound'

const App = () => {
  return (
  <Routes>
    <Route path='/' element={<HomeScreen/>}/>
    <Route path='/about-us' element={<AboutUs/>}/>
    <Route path='*' element={<NotFound/>}/>
  </Routes>
  )
}

export default App