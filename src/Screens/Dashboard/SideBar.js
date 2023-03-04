import React, { Children } from "react";
import { BsFillGridFill } from "react-icons/bs";
import { FaHeart, FaRegListAlt } from "react-icons/fa";
import { RiLockPasswordLine, RiMovie2Fill } from "react-icons/ri";
import { HiViewGridAdd } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import Layout from "../../Layout/Layout";
import { Link, NavLink } from "react-router-dom";
const SideBar = ({ children }) => {
  const sideLincks = [
    {
      name: "Dashboard",
      link: "/dashBoard",
      icons: BsFillGridFill,
    },
    {
      name: "Movies list",
      link: "/movieslist",
      icons: FaRegListAlt,
    },
    {
      name: "Add Movie",
      link: "/addmovie",
      icons: RiMovie2Fill,
    },
    {
      name: "Categories ",
      link: "/categories",
      icons: HiViewGridAdd,
    },
    {
      name: "Update Profile",
      link: "/portfile",
      icons: FiSettings,
    },
    {
      name: "favorites Moveies",
      link: "/favorites",
      icons: FaHeart,
    },
    {
      name: "Change password",
      link: "/passwoed",
      icons: RiLockPasswordLine,
    },
  ];
  const active = "bg-dryGray text-subMain";
  const hover = "hover:text-white hover:bg-main";
  const inActive =
    "ronuded font-medium text-sm translitions flex gap-3 items-center p-4";

  const Hover = ({ isActive }) =>
    isActive ? `${active} ${inActive}` : `${inActive} ${hover}`;

  return (
    <Layout>
      <div className="min-h-screen container mx-auto px-2">
        <div className="xl:grid grid-cols-8 gap-10 items-start md:py-12 py-6">
          <div className="col-span-2 sticky   bg-dry border border-gray-800 p-6 rounded-md xl:mb-0 mb-5 ">
            {/* side bar links  */}
            {sideLincks.map((side, id) => (
              <NavLink to={side.link} key={id} className={Hover}>
                <side.icons /> <p>{side.name}</p>
              </NavLink>
            ))}
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="10"
            data-aos-offset="200"
            className="col-span-6 w-full rounded-md bg-dry border border-gray-800 p-6">
            {children}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SideBar;
