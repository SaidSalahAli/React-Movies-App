import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { BiArrowBack } from "react-icons/bi";
import { FaCloudDownloadAlt, FaHeart } from "react-icons/fa";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";

const WatchPage = () => {
  const param = useParams();
  const [watchPage, setWatchPage] = useState([]);
  console.log(watchPage);
  //  const [play ,setPlay] = useState(false)
  const getWatchPage = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${param.id}?api_key=42289f94dc9eeeca0b3bac1a2bb4102d&language=en-US`
    );
    setWatchPage(res.data);

    // console.log(res.data)
  };

  useEffect(() => {
    getWatchPage();
  }, []);
  return (
    <Layout>
      <div className="containar mx-auto bg-dry p-6 mb-12">
        <div className="flex-btn flex-wrap mb-6 gap-2 bg-main rounded border border-gray-800 p-6">
          <Link
            to={`/movie/${watchPage?.id}`}
            className="md:text-xl text-sm flex gap-3 items-center font-bold text-dryGray">
            <BiArrowBack />
            {watchPage?.title}
          </Link>
          <div className="flex-btn sm:w-auto w-full gap-5">
            <button className="bg-white hover:text-subMain transitions bg-opacity-30 text-white rounded px-4 py-3 text-sm">
              <FaHeart />
            </button>
            <button className="bg-subMain flex-rows gap-2 hover:text-main transitions  text-white rounded px-8 font-medium py-3 text-sm">
              <FaCloudDownloadAlt/>Download
            </button>
          </div>
        </div>
        {/*  */}
      </div>
    </Layout>
  );
};

export default WatchPage;
