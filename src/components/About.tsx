import React from "react";
import Image from "next/image";
import about1 from "@/assets/about1.jpg";
import about2 from "@/assets/about2.jpg";
import about3 from "@/assets/about3.jpg";

// Reusable Checkmark SVG
const Checkmark = () => (
  <svg
    width="17"
    height="13"
    viewBox="0 0 17 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.51 12.0033C6.34157 12.155 6.12291 12.2389 5.89621 12.2389C5.66951 12.2389 5.45085 12.155 5.28242 12.0033L0.381001 7.45772C0.261114 7.35024 0.165222 7.21871 0.0995756 7.0717C0.0339289 6.92469 0 6.7655 0 6.60451C0 6.44351 0.0339289 6.28432 0.0995756 6.13731C0.165222 5.9903 0.261114 5.85877 0.381001 5.75129L0.994789 5.18199C1.24727 4.95412 1.57533 4.82797 1.91547 4.82797C2.25561 4.82797 2.58366 4.95412 2.83615 5.18199L5.89621 8.01963L14.1638 0.354017C14.4163 0.126142 14.7444 0 15.0845 0C15.4247 0 15.7527 0.126142 16.0052 0.354017L16.619 0.923318C16.7389 1.0308 16.8348 1.16233 16.9004 1.30934C16.9661 1.45635 17 1.61554 17 1.77653C17 1.93753 16.9661 2.09672 16.9004 2.24372C16.8348 2.39073 16.7389 2.52226 16.619 2.62975L6.51 12.0033Z"
      fill="white"
    />
  </svg>
);

const About = () => {
  return (
    <div className="bg-black text-white flex flex-wrap mx-auto w-[1920px] py-10 px-4 md:px-6">
      {/* Left Side */}
      <div className="flex-1 flex items-center justify-center pl-24">
        <div className="max-w-lg">
          {/* Subheading */}
          <h3 className="italic text-yellowish text-2xl font-greatVibes">
            About us
          </h3>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-4">
            <span className="text-yellowish">We</span> Create the best <br /> foody product
          </h1>

          {/* Description */}
          <p className="text-gray-400 mt-6 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
            pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
            augue urna, vitae feugiat pretium donec id elementum.
          </p>

          {/* Checkmark List */}
          <div className="mt-4 space-y-2">
            {[
              "Lacus nisi, et ac dapibus sit eu velit in consequat.",
              "Quisque diam pellentesque bibendum non dui volutpat fringilla.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            ].map((text, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Checkmark />
                <span className="text-white text-base">{text}</span>
              </div>
            ))}
          </div>

          {/* Button */}
          <button className="mt-8 bg-yellowish text-black font-semibold py-3 px-8 rounded-full hover:bg-orange-600 transition">
            Read more
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 pr-52 mt-6 md:mt-0">
        <Image src={about1} alt="Delicious food display" className="rounded-lg" style={{ height: "330px", width: "660px" }}/>
        <div className="flex space-x-4 mt-4">
          <Image src={about2} alt="Appetizing dish" className="rounded-lg" style={{ height: "194px", width: "322px" }}/>
          <Image src={about3} alt="Tasty meal" className="rounded-lg" style={{ height: "194px", width: "322px" }}/>
        </div>
      </div>
    </div>
  );
};

export default About;
