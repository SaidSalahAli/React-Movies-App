// import axios from 'axios';
import axios from 'axios'
import React, { useState } from 'react'
import Movies from '../Components/Movie'
// import { useEffect } from 'react';
import Layout from '../Layout/Layout'

const Research = ({ lengthfavourites}) => {
    const [search ,setSearch] = useState([])

const handle = (word) =>{
  (async () =>{
      const res = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=42289f94dc9eeeca0b3bac1a2bb4102d&query=${word}&language=en-US`)
          setSearch(res.data.results)
    })()

 }

  return (
    <Layout  lengthfavourites={lengthfavourites}>
      <div className="">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="10"
        data-aos-offset="200"
        className="min-height-screen h-auto container mx-auto px-20 my-6">
             <div className="w-full text-sm  bg-dryGray rounded flex-btn gap-4">
            <input 
              type="text"
              placeholder="Search Moie from here"
              className="font-medium placeholder:text-border text-sm w-11/12 h-12 bg-transparent border-none px-2 text-black"
               onChange={(e)=> handle(e.target.value)}           
            />
          </div>
        <p className="text-lg front-medium my-6">
          TOTAL <span className="font-bold text-subMain">{search?.length}</span>
        </p>
        <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
          {search?.map((movie) => (
            <Movies key={movie.id} movie={movie} />
          ))}
        </div>
        </div>
       </div>
    </Layout>
  )
}

export default Research



// {movies?.map((movie) => (
//     <Movies key={movie.id} movie={movie} />
//   ))}