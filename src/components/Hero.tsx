import React from "react";
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";
import Image from "next/image";
import hero from "@/assets/hero.jpg";

const Hero = () => {
  return (
    <div className="bg-black text-white flex mx-auto w-[1920px]">
      {/* Left Side with Social Icons */}
      <div className="flex flex-col items-center justify-center pl-56">
        <div className="border-l-2 border-gray-700 h-52"></div>
        <a href="#" className="text-gray-400 hover:text-white my-2"><FaFacebookF /></a>
        <a href="#" className="text-gray-400 hover:text-white my-2"><FaTwitter /></a>
        <a href="#" className="text-gray-400 hover:text-white my-2"><FaPinterestP /></a>
        <div className="border-l-2 border-gray-700 h-52"></div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center pr-20">
        <div className="max-w-lg">
          {/* Subheading */}
          <h3 className="italic text-yellowish text-2xl font-greatVibes">Its Quick & Amusing!</h3>

          {/* Main Heading */}
          <h1 className="text-5xl font-bold leading-tight mt-4"><span className="text-yellowish">Th</span>e Art of Speed <br /> Food Quality</h1>

          {/* Description */}
          <p className="text-gray-400 mt-6 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue.</p>

          {/* Button */}
          <button className="mt-8 bg-yellowish text-white font-semibold py-3 px-8 rounded-full hover:bg-orange-600 transition">See Menu</button></div>
      </div>

      {/* Right Side with Image */}
      <div className="flex items-center justify-center pr-36">
        <Image src={hero} alt="Hero Poster" className="rounded-lg" style={{ height: "670px", width: "877px" }}/>
      </div>
    </div>
  );
};

export default Hero;
