import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import { CgInstagram } from "react-icons/cg";
import { FaYoutube } from "react-icons/fa";
import { AiOutlinePinterest } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-[1920px] h-[99px] mx-auto bg-gray-600 text-white flex items-center justify-between px-10 relative">
      {/* Left content */}
      <div className="ml-40">Copyright © 2022 by Ayeman. All Rights Reserved.</div>
      
      {/* Social icons */}
      <div className="flex space-x-6 mr-44">
        <AiFillFacebook className="text-2xl" />
        <FaTwitterSquare className="text-2xl" />
        <CgInstagram className="text-2xl" />
        <FaYoutube className="text-2xl" />
        <AiOutlinePinterest className="text-2xl" />
      </div>
    </div>
  );
};

export default Footer;
