import React, { Fragment } from "react";
import { FaCloudDownloadAlt, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import { Link, useParams } from "react-router-dom";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { useState } from "react";
// import axios from "axios";
// import { useEffect } from "react";
import FiltersByGenrs from "./FiltersByGenrs";
import Filters from "./Filters";
import axios from "axios";
import { useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
// import { BsFillEyeFill } from "react-icons/bs";

const Text = "text-sm  text-left leading-6 whitespace-nowrap  px-5 py-3 ";
const Head = "text-xs text-left text-main font-semibold px-6 py-2 uppercase";
const Table2 = ({ users, data }) => {
  const [genres, setGenrs] = useState([]);
  const [movies, setMovies] = useState([]);
  // cost [sarchMovies , sarchMovies] = useState([])/
  // const moviesByYear = movies.filter((movie) => movie.release_date )
  // const allData = [...new Set(movies.map(data =>data.genre_ids))]
  // console.log(allData)
  //get all movies from API
  const getAllMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=42289f94dc9eeeca0b3bac1a2bb4102d&language=en-US"
    );
    setMovies(res.data.results);
  };

  const filterbygenree = async (genre) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=42289f94dc9eeeca0b3bac1a2bb4102d&with_genres=${genre}&language=en-US`
    );

    setMovies(res.data.results);
  };
  useEffect(() => {
    getAllMovies();
  }, []);

  const getAllMovieSarsh = async (word) => {
    if(word === '' ){
      getAllMovies()
    }else{
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=42289f94dc9eeeca0b3bac1a2bb4102d&query=${word}&language=en-US`
    );
    setMovies(res.data.results)
    }
 }
  let genreids = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };

  const deletedMovies = async (id) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/rating?api_key=42289f94dc9eeeca0b3bac1a2bb4102d`
    );

    console.log(res.data);
  };
  const deleted =(e)=>{
   deletedMovies(e)
  }
  const Rows = (movie, id, admin) => {


    return (
      <tr key={id}>
        {users === true ? (
          <>
            <td className={`${Text}`}>
              <div className="w-15 bg-dry h-20 rounded overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={`https://image.tmdb.org/t/p/w500/${
                    movie.poster_path ? movie.poster_path : "/imags/im1.png"
                  }`}
                  alt={movie.title}
                />
              </div>
            </td>
            <td className={`${Text}`}>{movie.title}</td>
            <td className={`${Text} truncate`}>
              {movie.id ? movie?.id : "01066536008"}
            </td>
            <td className={`${Text}`}>{movie.release_date}</td>
            <td className={`${Text}`}>{genreids[movie.genre_ids[0]]}</td>
            <td className={`${Text}`}>{movie.original_language}</td>
            <td className={`${Text}float-right flex  gap-2`}>
              <button className="border border-border bg-dry flex  gap-2 text-border rounded py-1 px-2 ">
                Edit <FaEdit className="text-green-500" />
              </button>
              <button onClick={()=>deleted(movie?.id)} className="bg-subMain text-white rounded flex-colo w-6 h-7 ">
                <MdDelete />
              </button>
            </td>
          </>
        ) : (
          <>
            <td className={`${Text} font-bold`}>
              {movie.id ? movie?.id : "01066536008"}
            </td>
            <td className={`${Text}`}>
              {movie?.original_language ? movie.original_language : "2023"}
            </td>
            <td className={`${Text}`}>{movie.name}</td>
            <td className={`${Text}`}>{genreids[movie.genre_ids[0]]}</td>

            <td className={`${Text}`}>{movie.release_date}</td>
            <td className={`${Text} folat-right flex gap-2`}>
              <button className="border border-border bg-dry flex  gap-2 text-border rounded py-1 px-2 ">
                Edit <FaCloudDownloadAlt className="text-green-500" />
              </button>
              <Link
                to={`/movie/${movie?.id}`}
                className="bg-subMain text-white rounded flex-colo w-6 h-7">
                <AiOutlineCloudDownload />
              </Link>
            </td>
          </>
        )}
      </tr>
    );
  };

  const Filter = [
    {
      value: genres,
      onChange: setGenrs,
    },
  ];
  const handle =(e)=>{
    getAllMovieSarsh(e)
  }
  return (
    <div className="overflow-x-scroll overflow-hidden relative w-full">
      <div className="my-6 bg-dry border text-dryGray border-gray-800 grid md:grid-cols-4 grid-cols-2 lg:gap-12 gap-2 rounded p-6">
        <div>
        <input 
          onChange={(e)=> handle(e.target.value)}
          placeholder="sarah"
          type="text"
          className="relative border border-gray-800 w-full text-white bg-main rounded-lg cursor-default py-4 pl-6 pr-10 text-left text-xs"
        />
        </div>
        {Filter.map((item, id) => (
          <Listbox key={id} value={item.value} onChange={item.onChange}>
            <div className="relative">
              <Listbox.Button className="relative border border-gray-800 w-full text-white bg-main rounded-lg cursor-default py-4 pl-6 pr-10 text-left text-xs">
                <span className="block truncate">
                  {item.value?.name ? item.value?.name : "Catgrey"}
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100 "
                leaveFrom="opacity-100"
                leaveTo=" opacity-0">
                <Listbox.Options className="absolute z-10 mt-1 w-full bg-white border border-gray-800 text-black rounded-md shadow-lg max-h-60 py-1 text-base ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm ">
                  <FiltersByGenrs
                    genres={genres}
                    filterbygenre={filterbygenree}
                  />
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        ))}
      </div>
      <table className="w-full table-auto border border-border diviode-y divide-border">
        <thead>
          <tr className="bg-dryGray">
            {users === true ? (
              <>
                <th scope="col" className={`${Head}`}>
                  image
                </th>
                <th scope="col" className={`${Head}`}>
                  full Name
                </th>
                <th scope="col" className={`${Head}`}>
                  id
                </th>
                <th scope="col" className={`${Head}`}>
                  Language
                </th>
                <th scope="col" className={`${Head}`}>
                  category
                </th>
                <th scope="col" className={`${Head} text-end`}>
                  Date
                </th>
              </>
            ) : (
              <>
                <th scope="col" className={`${Head}`}>
                  id
                </th>
                <th scope="col" className={`${Head}`}>
                  Dele
                </th>
                <th scope="col" className={`${Head}`}>
                  Title
                </th>
              </>
            )}

            <th scope="col" className={`${Head} text-end`}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-main divide-y divide-gray-800">
          {movies.map((movie, id) => Rows(movie, id, users))}
        </tbody>
      </table>
    </div>
  );
};

export default Table2;
