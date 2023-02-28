import React from "react";
import { Link } from "react-router-dom";
import {IoMdArrowBack} from "react-icons/io"

const NotFound = () => {
  return (
    <div className="flex-colo w-full min-h-screen  text-white bg-main lg:py-20 py-10 px-6">
      <img className="h-3/4 w-3/4 object-contain " src="/imgs/BlogGraphic_4_404.png" alt="" />
      <Link
        to="/"
        className=" bg-subMain transitions rounded text-white flex gap-4 font-medium py-3   hover:text-main  px-6  ">
        <IoMdArrowBack className="mr-2 mt-0.5 " /> Back
      </Link>
    </div>
  );
};

export default NotFound;
