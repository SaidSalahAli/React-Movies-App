import React, { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CgSelect } from "react-icons/cg";
import { CategoriesData } from "../data/CategoriesData";
import { FaCheck } from "react-icons/fa";

const YearData = [
  { title: "sort By year" },
  { title: "1700 - 1800" },
  { title: "1800 - 1900" },
  { title: "1900 - 2000" },
  { title: "2000 - 2010" },
  { title: "2010 - 2030" },
];

const TimesData = [
  { title: "sort By Hours" },
  { title: "1 - 5 Hours" },
  { title: "5 - 10 Hours" },
  { title: "10 - 15 Hours" },
  { title: "15 - 20 Hours" },
];

const RatesData = [
  { title: "sort By Rates" },
  { title: "1 - 5 star" },
  { title: "5 - 10 star" },
  { title: "10 - 15 star" },
  { title: "15 - 20 star" },
];

const Filters = () => {
  // const [movie , setMovie] = useState(movies[0]);

  const [category, setCategory] = useState({ title: "Category" });
  const [year, setYear] = useState(YearData[0]);
  const [times, setTimes] = useState(TimesData[0]);
  const [rates, setRates] = useState(RatesData[0]);

  const Filter = [
    {
      value: category,
      onChange: setCategory,
      items: CategoriesData,
    },
    {
      value: year,
      onChange: setYear,
      items: YearData,
    },
    {
      value: times,
      onChange: setTimes,
      items: TimesData,
    },
    {
      value: rates,
      onChange: setRates,
      items: RatesData,
    },
  ];
  return (
    <div className="my-6 bg-dry border text-dryGray border-gray-800 grid md:grid-cols-4 grid-cols-2 lg:gap-12 gap-2 rounded p-6">
      {Filter.map((item, index) => (
        <Listbox key={index} value={item.value} onChange={item.onChange}>
          <div className="relative">
            <Listbox.Button className="relative border border-gray-800 w-full text-white bg-main rounded-lg cursor-default py-4 pl-6 pr-10 text-left text-xs">
              <span className="block truncate">{item.value.title}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-2">
                <CgSelect className="h-4 w-4" aria-hidden="true" />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100 "
              leaveFrom="opacity-100"
              leaveTo=" opacity-0">
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white border border-gray-800 text-black rounded-md shadow-lg max-h-60 py-1 text-base ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm ">
                {item.items.map((ite, index) => (
                  <Listbox.Option
                    key={index}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4${
                        active ? "hover: bg-subMain text-white rounded"  : "text-main"
                      }`
                    }
                    value={ite}>
                      {({seleted}) =>(
                        <>
                        <span className={`block truncated ${
                          seleted ? 'font-semibold' : 'font-normal'
                        }`}>
                          {ite.title}</span>
                        {
                          seleted ? (
                          <span className="absolute inset-y-0 left-0 flex itmes-center pl-3">
                            <FaCheck className="h-3 w-3" aria-hidden="true" />
                        </span>):null
                        }
                        </>
                      )}
                    </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      ))}
    </div>
  );
};

export default Filters;
