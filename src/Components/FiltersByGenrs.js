import { Listbox } from '@headlessui/react';
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const FiltersByGenrs = ({filterbygenre, }) => {
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

  const handle = (id) => {
    filterbygenre(id);
  };

  return (
     <>
     
    {genres.map((genre, index) => (
        <Listbox.Option
          key={index}
          className={({ active }) =>
            `relative cursor-default select-none py-2 pl-10 pr-4${
              active
                ? "hover: bg-subMain transitions text-white rounded"
                : "text-main"
            }`
          }
          onClick={() => {
            handle(genre.id);
          }}
          value={genre}>
          {({ seleted }) => (
            <>
              <span
                className={`block truncated ${
                  seleted ? "font-semibold" : "font-normal"
                }`}>
                {genre?.name}
              </span>
              {seleted ? (
                <span className="absolute inset-y-0 left-0 flex itmes-center pl-3 "></span>
              ) : null}
            </>
          )}
        </Listbox.Option>
      ))}
      </>
  )
}

export default FiltersByGenrs