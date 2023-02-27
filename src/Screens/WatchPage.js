import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { BiArrowBack } from "react-icons/bi";
import { FaCloudDownloadAlt, FaHeart } from "react-icons/fa";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";

const WatchPage = ({ movies }) => {
  const param = useParams();
  const para = param.id;
  console.log(para)
  const [watchPage, setWatchPage] = useState([]);

  console.log(watchPage);
  const [play, setPlay] = useState([]);
  

  const getWatchPage = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${para}/videos?api_key=42289f94dc9eeeca0b3bac1a2bb4102d&language=En-US}`
    );
    // setWatchPage(res.data);

    setPlay(res.data.results);
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
            {watchPage?.name}
          </Link>
          <div className="flex-btn sm:w-auto w-full gap-5">
            <button className="bg-white hover:text-subMain transitions bg-opacity-30 text-white rounded px-4 py-3 text-sm">
              <FaHeart />
            </button>
            <button className="bg-subMain flex-rows gap-2 hover:text-main transitions  text-white rounded px-8 font-medium py-3 text-sm">
              <FaCloudDownloadAlt />
              Download
            </button>
          </div>
        </div>
        {/* Watch vide */}
        {play ? (
          // <video controls  className="w-full h-full rounded">
          <iframe
            width="100%"
            height="450"
            border="0"
            src={`https://www.youtube.com/embed/${play[0]?.key}`}
            >

          </iframe>
        ) : (
          // </video>
          <div className="w-full h-screen rounded-lg overflow-hidden relative">
            <div className="absolute top-0 left-0 bottom-0 right-0 bg-main bg-opacity-30 flex-colo"></div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default WatchPage;
