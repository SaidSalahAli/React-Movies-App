import React from "react";
import Filters from "../Components/Filters";
// import Head from "../Components/Home/Head";
import Layout from "../Layout/Layout";

const MoviesPage = ({movies}) => {
  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 my-6">
        <Filters movies={movies} />
      </div>
    </Layout>
  );
};

export default MoviesPage;
