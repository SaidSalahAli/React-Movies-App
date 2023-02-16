import React from "react";
import { FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";

import Head from "../Components/Home/Head";
import Layout from "../Layout/Layout";

const ContactUs = () => {
  const contactData = [
    {
      id: 1,
      title: "Email Us",
      info: "Email",
      icon: FiMail,
      contact: "saidsalah@gmail.com",
    },
    {
      id: 2,
      title: "call Us",
      info: "call Us",
      icon: FiPhoneCall,
      contact: "+01066536008",
    },
    {
      id: 3,
      title: "location",
      info: "I'm from Egypt , I live in Giza ",
      icon: FiMapPin,
      contact: "+01066536008",
    },
  ];
  return (
    <Layout>
      <div className="  min-height-screen container mx-auto px-2 my-6">
        <Head title="Contact Us"/>
      <div className="grid mg:grid-cols-2 gap-6 lg:my-20 my-10 lg:grid-cols-2 xl:gap-8" >
        <div className=" mt-8 md:w-96 md:max-w-full mx-auto ">  
            <form method="POST" action="">
              <label className="block mb-6  text-black">
                <span className="text-gray-300  ">Your name</span>
                <input
                  type="text"
                  name="name"
                  className="block w-full mt-1 p-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="your name"
                />
              </label>
              <label className="block mb-6 text-black">
                <span className="text-gray-300  ">Email address</span>
                <input
                  name="email"
                  type="email"
                  className="block w-full mt-1 p-2 border-gray-900 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 "
                  placeholder= "said@example.com"
                  required
                />
              </label>
              <label className="block mb-6 text-black">
                <span className="text-gray-300">Message</span>
                <textarea
                  name="message"
                  className=" block w-full mt-1 p-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300  focus:ring focus:ring-indigo-200 focus:ring-opacity-50 "
                  rows="3"
                  placeholder="Tell us what you're thinking about..."></textarea>
              </label>
              <div className="mb-6">
                <button
                  type="submit"
                  className="h-10 px-5 text-indigo-100 bg-indigo-700 rounded-lg transition-color sduration-150 focus:shadow-outline hover:bg-indigo-800">
                  Contact Us
                </button>
              </div>
              <div></div>
            </form>
  
        </div>

        <div className="flex flex-wrap md:flex-wrap-reversecontainer items-center  ">
          {contactData.map((item) => (
            <div
              key={item.id}
              className="border m-2  border-border flex-colo p-10 bg-dry rounded-lg text-center items-center">
              <span className="flex-colo w-10 h-10  mb-4 rounded-full bg-main text-subMain text-2xl">
                <item.icon />
              </span>
              <h5 className="text-xl font-semibold mb-2">{item.title}</h5>

              <p className="mb- text-sm text-text leadin-7 ">
                <a href={`mailto:${item.contact}`} className="text-blue-600">
                  {item.contact}
                </a>{'               '}
                
                {item.info}
              </p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
