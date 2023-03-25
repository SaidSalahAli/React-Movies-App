import React from "react";
import { FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";

import Head from "../Components/Home/Head";
import Layout from "../Layout/Layout";

const ContactUs = ({lengthfavourites}) => {
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
    <Layout lengthfavourites={lengthfavourites}>
      <div className="  min-height-screen container mx-auto px-2 my-6">
        <Head title="Contact Us"/>
      <div className="grid mg:grid-cols-2 gap-6 lg:my-20 my-10 lg:grid-cols-1 xl:gap-8" >
        <div className=" grid  lg:grid-cols-3 lg:gap-3 xs:p-20 md:flex-wrap-reversecontainer items-center ">
          {contactData.map((item) => (
            <div
              key={item.id}
              className="border m-2 min-w-full border-border flex-colo p-10 bg-dry rounded-lg text-center items-center">
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
