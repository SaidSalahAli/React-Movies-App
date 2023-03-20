import React from "react";
import { Input } from "../../Components/single/UsedInputs";
import Uploder from "../../Components/Uploder";
import SideBar from "./SideBar";

const Passwoed = ({lengthfavourites}) => {
  return (
    <SideBar lengthfavourites={lengthfavourites}>
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Change Passwoed</h2>
        <Input
          label="Previous Password"
          placeholder="password"
          type="Password"
          bg={true}
        />
        <Input
          label="New Password"
          placeholder="password"
          type="password"
          bg={true}
        />
         <Input
          label="Confirm Password"
          placeholder="password"
          type="password"
          bg={true}
        />
        <div className="flex justify-end items-center my-4 ">
        
          <button className="bg-main transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto">
          Change Password
          </button>
        </div>
      </div>
    </SideBar>
  );
};

export default Passwoed;
