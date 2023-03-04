import React from 'react'
import { HiPlusCircle } from 'react-icons/hi'
import Table2 from '../../../Components/Tebol2'
import SideBar from '../SideBar'

const Categories = ({movies }) => {
  return (
   <SideBar>
  <div className="flex flex-col gap-6">
    <div className="flex-btn gap-2">
        <h2 className="text-xl font-bold">Categories</h2>
        <button className="bg-subMain flex gap-4 font-medium transitions hover:bg-subMain border border-subMain text-white py-2 px-4 rounded ">

           <HiPlusCircle className='mt-1'/>Create 
        </button>
        </div>
        <Table2 movies={movies} users={true}/>
        </div>
   </SideBar>
  )
}

export default Categories