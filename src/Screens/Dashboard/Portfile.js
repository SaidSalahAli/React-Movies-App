import React from "react";
import { Input } from "../../Components/single/UsedInputs";
import Uploder from "../../Components/Uploder";
// import { BsFillGridFill } from 'react-icons/bs'
import SideBar from "./SideBar";
// import { FalidtAll,FaHeart } from 'react-icons/fa'
// import {  RiLockPasswordLine,RiMovie2Fill } from 'react-icons/ri'
// import {HiViewGridAdd,  } from 'react-icons/hi'
// import {FiSettings } from 'react-icons/fi'

const Portfile = () => {
  return (
    <SideBar>
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Portfile</h2>
    
      <Uploder />
      <Input label="Full Name" placeholder="Name" type="tex" bg={true} />
      <Input
        label="Email"
        placeholder="NitFlix@gmail.com"
        type="email"
        bg={true}
      />
       <div className="flex gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center my-4 ">
        <button className="bg-subMain transitions hover:bg-main border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto">
             Delet Account
        </button>
        <button className="bg-main transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto">
             Delet Account
        </button>
       </div>
       </div>
    </SideBar>
  );
};

export default Portfile;
