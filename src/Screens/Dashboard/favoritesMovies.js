import React, { useEffect, useRef, useState } from 'react'
import Table from '../../Components/Table'
import SideBar from './SideBar'

const FavoritesMovies = ({favourites,lengthfavourites}) => {

  // const [allMovies,setMovise] = useState([])
  // let holdMovies =  useRef()
  // useEffect(() => {
  // let allMovies = JSON.parse(localStorage.getItem("movies"))
  // holdMovies.current = allMovies
  // // setMovise(allMovies)
  // },[])
  // console.log(holdMovies.current)
  

  return (
   <SideBar lengthfavourites={lengthfavourites}>
  <div className="flex flex-col gap-6">
    <div className="flex-btn gap-2">
        <h2 className="text-xl font-bold">Favorites Movies</h2>
        <button className="bg-main transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded ">
            Delet All
        </button>
        </div>
        <Table movies={favourites} admin={true}/>
        </div>
   </SideBar>
  )
}

export default FavoritesMovies