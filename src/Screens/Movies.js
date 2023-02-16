import React, { useState } from "react";
// import { CgSpinner } from "react-icons/cg";
import Filters from "../Components/Filters";
import Movies from "../Components/Movie";
// import Head from "../Components/Home/Head";
import Layout from "../Layout/Layout";

const MoviesPage = ({movies}) => {

  const maxPages = 10;
  const [page ,setPege] = useState (maxPages)
  const handelLodingMore = ()=>{
    setPege(page + maxPages);
  }
  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-20 my-6">
        <Filters  />
        <p className="text-lg front-medium my-6">
          TOTAL  <span className="font-bold text-subMain">{movies?.length}</span>{'   '}
        </p>
        <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
          {
            movies.slice(0,page)?.map((movie) => (
             <Movies key={movie.id} movie={movie}/>
            ))
          }
        </div>
        {/* loading More */}
        <div className="w-full flex-colo md:my-20 my-10  ">
          <button onClick={handelLodingMore} className="flex gap-3 text-white py-3 px-8 rounded-lg font-semibold border-2 hover:bg-subMain transitions border-subMain">
            More Movies... 
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default MoviesPage;
