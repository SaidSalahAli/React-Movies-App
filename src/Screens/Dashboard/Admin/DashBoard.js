import React from "react";
import { FaRegListAlt, FaUser } from "react-icons/fa";
import { HiViewGridAdd } from "react-icons/hi";
import Table from "../../../Components/Table";
import SideBar from "../SideBar";

const DashBoard = ({movies,lengthfavourites}) => {
    const Movies = movies.map((movie)=> (movie))
  return (
    <SideBar lengthfavourites={lengthfavourites}>
      <h2 className="text-xl font-bold rounded-lg">Dash Board</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4 ">
        <div className="p-4 ronunded bg-main border-border grid grid-cols-4 gap-2">
          <div className="col-span-1 rounded-full h-12 w-12 flex-colo    bg-orange-600 ">
            <FaRegListAlt />
          </div>

          <div className="col-span-3">
            <h2>Total Moveies</h2>
            <p className="mt-2 font-bold">{movies?.length} </p>
          </div>
        </div>
        <div className="p-4 ronunded bg-main border-border grid grid-cols-4 gap-2">
          <div className="col-span-1 rounded-full h-12 w-12 flex-colo    bg-blue-700  ">
            <FaRegListAlt />
          </div>

          <div className="col-span-3">
            <h2>Total</h2>
            <p className="mt-2 font-bold">50 </p>
          </div>
        </div>{" "}
        <div className="p-4 ronunded bg-main border-border grid grid-cols-4 gap-2">
          <div className="col-span-1 rounded-full h-12 w-12 flex-colo   bg-green-700  ">
            <FaUser/>
          </div>

          <div className="col-span-3">
            <h2>Total</h2>
            <p className="mt-2 font-bold">50 </p>
          </div>
        </div>
      </div>
        <h3 className="text-md font-medium my-6 text-border ">Recent Movies</h3> 
        <Table  movies={Movies.slice(0,5)} admin={true}/>
    </SideBar>
  );
};

export default DashBoard;
