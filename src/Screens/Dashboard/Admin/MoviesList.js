import React from 'react'
import Table from '../../../Components/Table'
import SideBar from '../SideBar'

const Movieslist = ({movies }) => {
  return (
   <SideBar>
  <div className="flex flex-col gap-6">
    <div className="flex-btn gap-2">
        <h2 className="text-xl font-bold">Movies List</h2>
        <button className="bg-main transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded ">
            Delet All
        </button>
        </div>
        <Table movies={movies} admin={true}/>
        </div>
   </SideBar>
  )
}

export default Movieslist