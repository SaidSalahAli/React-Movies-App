import React, { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import axios from "axios";
import { useEffect } from "react";
import FiltersByGenrs from "./FiltersByGenrs";

const Filters = () => {
  
  const [genres, setGenrs] = useState([]);
  const filterbygenr = async () => {
    const res = await axios.get(
      ` https://api.themoviedb.org/3/genre/movie/list?api_key=42289f94dc9eeeca0b3bac1a2bb4102d&language=en-US`
    );

    setGenrs(res.data.genres);
  };
  useEffect(() => {
    filterbygenr();
  }, []);

  const Filter = [
    {
      value: genres,
      onChange: setGenrs,
    },
  ];

  return (
    <div className="my-6 bg-dry border  text-dryGray border-gray-800 grid md:grid-cols-4 grid-cols-2 lg:gap-12 gap-2 rounded p-6">
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
                <FiltersByGenrs genres={genres} />
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      ))}
    </div>
  );
};

export default Filters;
