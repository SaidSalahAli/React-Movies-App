import React from 'react'
import { useState } from 'react'
import { HiPlusCircle } from 'react-icons/hi'
import { useDispatch } from 'react-redux'
import CategroyModel from '../../../Components/Model/CategroyModel'
import Table2 from '../../../Components/Tebol2'
import SideBar from '../SideBar'

const Categories = ({lengthfavourites }) => {
  const [modelOpen,setModelLopen ] =useState(false)

  // const dispatch = useDispatch();
  // const search = async (genre) => {
  //   dispatch(filterbygenres(genre));
  // };
  return (
   <SideBar lengthfavourites={lengthfavourites}>
    <CategroyModel  modelOpen={modelOpen} setModelLopen={setModelLopen}/>
  <div className="flex flex-col gap-6">
    <div className="flex-btn gap-2">
        <h2 className="text-xl font-bold">Categories</h2>
    
        </div>
        <Table2 users={true}/>
        </div>
   </SideBar>
  )
}

export default Categories