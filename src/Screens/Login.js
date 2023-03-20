import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Input } from "../Components/single/UsedInputs";
import Layout from "../Layout/Layout";

const Login = ({lengthfavourites}) => {
  return (
    <Layout lengthfavourites={lengthfavourites}>
      <div className="container mx-auto px-2 my-24 flex-colo">
        <div className="w-full 2xl:w-2/5 gap-8 flex-colo p-8 sm:p-14 md:w-3/5 bg-dry rounded-lg border border-border">
          <img
            src="/imgs/logo.png"
            alt="logo"
            className="w-full h-12 object-contain "
          />
          <Input
            label="Email"
            placeholder="NitFlix@gmail.com"
            type="email"
            bg={true}
          />
          <Input
            label="Password"
            placeholder="password"
            type="password"
            bg={true}
          />
           <Link to="/dashBoard" className="bg-subMain transitions hover:bg-main flex justify-center gap-4 text-white p-4 rounded-lg w-full">
            <FiLogIn/> Sign In 
           </Link>
           <p className="text-conter text-border">
            Don't have an acconut ?
            <Link to="/register" className="text-dryGray font-semibold ml-2 hover:text-subMain transitions" >
                Sign Up
            </Link>
           </p>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
