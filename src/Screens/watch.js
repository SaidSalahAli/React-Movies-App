import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { BiArrowBack } from "react-icons/bi";
import { FaHeart, FaPlay } from "react-icons/fa";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Watchs = ({ movies}) => {
  const param = useParams();
  const para = param.id;
  const [watchPage, setWatchPage] = useState([]);
  const [play, setPlay] = useState(true);

  const getWatchPage = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${para}/videos?api_key=42289f94dc9eeeca0b3bac1a2bb4102d&language=En-US}`
    );
    const resq = await axios.get(
      `https://api.themoviedb.org/3/movie/${param.id}?api_key=42289f94dc9eeeca0b3bac1a2bb4102d&language=en-US`
    );
    setWatchPage(resq.data);
    // setWatchPage(res.data);

    setPlay(res.data.results);
  };

  useEffect(() => {
    getWatchPage();
  }, []);

  return (
      <div className="containar mx-auto bg-dry p-6 mb-12">
        <div className="flex-btn flex-wrap mb-6 gap-2 bg-main rounded border border-gray-800 p-6">
          <Link
            to={`/movie/${watchPage?.id}`}
            className="md:text-xl text-sm flex gap-3 items-center font-bold text-dryGray">
            <BiArrowBack />
            {watchPage?.title}
          </Link>
          <div className="flex-btn sm:w-auto w-full gap-5">
            <button 
   
             className="bg-white hover:text-subMain transitions bg-opacity-30 text-white rounded px-4 py-3 text-sm">
              <FaHeart />
            </button>
          </div>
        </div>
        {/* Watch vide */}
        {play ? (
        
          <iframe
            width="100%"
            height="450px"
            src={`https://www.youtube.com/embed/${play[0]?.key}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
        ) : (
          <div className="w-full h-screen rounded-lg overflow-hidden relative">
            <div className="absolute top-0 left-0 bottom-0 right-0 bg-main bg-opacity-30 flex-colo">
              <button
                onClick={() => setPlay(true)}
                className="bg-white text-subMain flex-colo rounded-full w-20 h-20 font-medium text-xl">
                <FaPlay />
              </button>
            </div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movies?.poster_path}`}
              alt=""
            />
          </div>
          
        )}
      </div>

  );
};

export default Watchs;
