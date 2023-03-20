import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from "react-share";
import MainModel from "./MainModel";

const ShareModel = ({ setModelLopen, modelOpen, movie }) => {
  const shareData = [
    {
      icon: FaFacebook,
      shareButton: FacebookShareButton,
    },
    {
      icon: FaLinkedin,
      shareButton: LinkedinShareButton,
    },
    {
      icon: FaWhatsapp,
      shareButton: WhatsappShareButton,
    },
    {
      icon: MdEmail,
      shareButton: EmailShareButton,
    },
  ];
  const url = `${window.location.protocol}//${window.location.host}/movie/${movie.id}`;
  console.log(url);
  return (
    <MainModel modelOpen={modelOpen} setModelLopen={setModelLopen}>
      <div className="inline-block sm:w-4/5 border border-border md:w-3/5 lg:w-2/5  w-full align-middle p-10 overflow-y-auto  h-full bg-main text-white rounded-2xl">
        <h2 className="text-2xl">
          Share : {"  "}<span className="text-xl font-bold">{movie?.title}</span>
        </h2>
        <div className="flex justify-center flex-wrap  gap-6 mt-6">
          {shareData.map((share, id) => (
            <share.shareButton key={id} url={url} quote="Share">
              <div className="w-12 transitions hover:bg-subMain flex-colo text-lg h-12 bg-white rounded bg-opacity-30">
                <share.icon />
              </div>
            </share.shareButton>
          ))}
        </div>
      </div>
    </MainModel>
  );
};

export default ShareModel;
