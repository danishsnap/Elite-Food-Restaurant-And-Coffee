import React from "react";
import active1 from "@/assets/active1.png";

const Active = () => {
  return (
    <section className="relative text-white flex items-center justify-center mx-auto w-[1920px] h-[558px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${active1.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* The content container */}
      <div className="absolute right-10 lg:right-20 bg-opacity-50 p-8 rounded-md text-right max-w-[1000px]">
        <h1 className="text-yellowish text-4xl font-greatVibes mb-4">
          Restaurant Active Process
        </h1>
        <h2 className="text-6xl font-bold leading-tight mb-6">
          <span className="text-yellowish">We</span> Document Every Food <br />
          Bean Process until it is saved
        </h2>
        <p className="text-gray-300 mb-8 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque <br /> bibendum non dui volutpat fringilla bibendum.
          Urna, elit augue urna,
        </p>
        <div className="flex justify-end text-left items-center gap-4">
          <div>
            <button className="text-white font-semibold py-3 px-8 rounded-full border-2 border-yellowish hover:bg-orange-600 transition">
              Read More
            </button>
          </div>
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="30" cy="30" r="30" fill="#FF9F0D" />
            <path
              d="M39.3889 29.36L25.8911 21.111C25.7774 21.0415 25.6473 21.0036 25.514 21.0011C25.3808 20.9986 25.2493 21.0317 25.1331 21.0968C25.0169 21.162 24.9202 21.257 24.8528 21.3719C24.7855 21.4869 24.75 21.6177 24.75 21.751V38.2488C24.75 38.3821 24.7855 38.5129 24.8528 38.6279C24.9202 38.7429 25.0169 38.8378 25.1331 38.903C25.2493 38.9682 25.3808 39.0012 25.514 38.9987C25.6473 38.9962 25.7774 38.9583 25.8911 38.8888L39.3889 30.6399C39.4985 30.5729 39.5891 30.4788 39.652 30.3668C39.7148 30.2547 39.7478 30.1284 39.7478 29.9999C39.7478 29.8714 39.7148 29.7451 39.652 29.633C39.5891 29.521 39.4985 29.427 39.3889 29.36Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div>Play Video</div>
        </div>
      </div>
    </section>
  );
};

export default Active;