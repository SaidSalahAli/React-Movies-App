import React from 'react'
import Banner from '../Components/Home/Banner'
import PopularMovies from '../Components/Home/PopularMovies'
// import Promos from '../Components/Home/Promos'
import TopRated from '../Components/Home/TopRated'
import Layout from '../Layout/Layout'

const HomeScreen = ({movies}) => {
  return (
    <Layout>  
      <div className='container mx-auto min-h-screen px-20 mb-6'>
        <Banner movies={movies}/>
        <TopRated movies={movies}/>
        <PopularMovies  movies={movies}/>
        {/* <Promos /> */}
        </div>
    </Layout>
  
  )
}

export default HomeScreen