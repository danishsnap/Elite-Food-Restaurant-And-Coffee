import React from "react";
import Image from "next/image";
import testimonial from "@/assets/testimonial.png";

const Testimonials = () => {
  return (
    <div className="bg-black text-white flex flex-col items-center mx-auto w-[1920] h-[770px] px-4 relative">
      {/* Section Header */}
      <div className="w-full max-w-[1273px] text-left">
        <h3 className="italic text-yellowish text-2xl font-greatVibes">
          Testimonials
        </h3>
        <h1 className="text-5xl font-bold leading-tight mt-4">
          What our client are saying
        </h1>
      </div>

      {/* Testimonial Box */}
      <div className="bg-white text-black rounded-lg shadow-md mt-16 p-8 w-full max-w-[800px] relative">
        {/* Profile Picture */}
        <div className="absolute -top-14 left-1/2 transform -translate-x-1/2">
          <Image
            src={testimonial}
            alt="Alamin Hasan"
            className="w-28 h-28 rounded-full border-4 border-black"
          />
        </div>

        {/* Quote Icon */}
        <div className="text-yellowish text-5xl text-center mt-12">
          &#x275D;
        </div>

        {/* Testimonial Text */}
        <p className="text-center text-gray-700 mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
          consequat.
        </p>

        {/* Client Info */}
        <div className="text-center mt-8">
          <div className="flex justify-center">
            <span className="text-yellowish text-2xl">★ ★ ★ ★ ★</span>
          </div>
          <h3 className="text-xl font-semibold mt-2">Alamin Hasan</h3>
          <p className="text-gray-500">Food Specialist</p>
        </div>
      </div>

      {/* Decorative Dots and Ellipses */}
      <div className="pt-10 bottom-4 flex justify-center items-center space-x-2">
        {/* Highlighted Dot */}
        <div className="w-4 h-4 bg-yellowish rounded-full"></div>

        {/* Regular Dots */}
        <div className="w-2 h-2 bg-[rgba(255,159,13,0.3)] rounded-full"></div>
        <div className="w-2 h-2 bg-[rgba(255,159,13,0.3)] rounded-full"></div>
        <div className="w-2 h-2 bg-[rgba(255,159,13,0.3)] rounded-full"></div>
      </div>
    </div>
  );
};

export default Testimonials;