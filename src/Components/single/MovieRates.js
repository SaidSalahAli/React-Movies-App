// import axios from "axios";
import React from "react";
// import { useEffect } from "react";
import { useState } from "react";
import { BsBookmarkCheckFill } from "react-icons/bs";
// import { useParams } from "react-router";
import Rating from "../Stars";
import Titles from "../Titles";
import {  Message, Select } from "./UsedInputs";

const MovieRates = ({ movie }) => {
 
  // console.log(movie)
  const Ratings = [
    {
      title: "0- Poor",
      value: 0,
    },
    {
      title: "1 - Fair",
      value: 6,
    },
    {
      title: "2 - Good",
      value: 7,
    },
    {
      title: "3 - Very Good",
      value: 8,
    },
    {
      title: "4 - Excellent",
      value: 9,
    },
 
  ];
  
  const [rating, setRating] = useState();
  return (
    <div className="my-12">
      <Titles title="Reviews" Icon={BsBookmarkCheckFill} />
      <div className="mt-10 xl:grid flex-colo grid-cols-5 gap-12 xs:p-10 py-10 px-2 sm:p-20 rounded-lg ">
        {/* Write review */}
        <div className="xl:col-span-2 w-full flex flex-col gap-8 ">
          <h3 className="textt-xl  text-text font-semibold ">
            Review {movie?.title}
          </h3>
          <p className="text-sm leading-7 font-medium text-border">
            Write a review for this movie. It will be posted on this page.
          </p>
          <div className="text-sm w-full">
            <Select
              label="select Rating"
              options={Ratings}
              onChange={(e) => setRating(e.target.value)}
            />

            <div className="flex mt-4 text-lg gap-2 text-star">
              <Rating value={rating} />
            </div>
          </div>
          {/* message */}
          <Message
            label="Message"
            placeholder="Make it short and sweet .... "
          />
          {/* create submit */}
          <button className="bg-subMain text-white py-3 w-full flex-colo rounded-lg ">
            Submit
          </button>
        </div>
      </div>
     {/* Related moveis */}
    
    </div>
  );
};

export default MovieRates;
