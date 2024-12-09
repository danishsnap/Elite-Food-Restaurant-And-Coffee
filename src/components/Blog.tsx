import React from "react";
import Image from "next/image";
import blog1 from "@/assets/blog1.png";
import blog2 from "@/assets/blog2.png";
import blog3 from "@/assets/blog3.png";
import { TiThumbsUp } from "react-icons/ti";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";

const Blog = () => {
  return (
    <div className="bg-black text-white py-10 flex mx-auto w-[1920px] h-[800px] flex-col items-center">
      {/* Food Category */}
      <div className="w-full text-center">
        <h3 className="italic text-yellowish text-2xl font-greatVibes">
          Blog Post
        </h3>
      </div>

      {/* Main Heading */}
      <div className="w-full text-center mt-4">
        <h1 className="text-5xl font-bold leading-tight">
          <span className="text-yellowish">La</span>test News & Blog
        </h1>
      </div>

      {/* Food Images in a Row */}
      <div className="flex space-x-10 mt-8 mb-8">
        <div
          style={{
            position: "relative",
            display: "inline-block", // Ensure the container doesn't affect layout
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              border: "2px solid white", // Apply border directly on the edges
              pointerEvents: "none", // So it doesn't interfere with interactions
            }}
          />
          <Image
            src={blog1}
            alt="Food Item 1"
            className="rounded-lg object-cover"
            style={{ height: "349px", width: "423px" }} // Image width remains unaffected
          />
          <div className="text-yellowish pl-4 pt-5">10 February 2022</div>
          <div className="pl-4 pt-5 text-xl">
            Pellentesque Non Efficitur Mi <br /> Aliquam Convallis Mi Quis
          </div>
          <div className="flex justify-between pl-4 pt-5 pb-5">
            <button className="text-xl">Learn More</button>
            <div className="flex gap-5 pr-10 text-2xl">
              <TiThumbsUp />
              <IoChatboxEllipsesOutline className="text-yellowish" />
              <IoShareSocialOutline />
            </div>
          </div>
        </div>

        <div
          style={{
            position: "relative",
            display: "inline-block", // Ensure the container doesn't affect layout
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              border: "2px solid white", // Apply border directly on the edges
              pointerEvents: "none", // So it doesn't interfere with interactions
            }}
          />
          <Image
            src={blog2}
            alt="Food Item 2"
            className="rounded-lg object-cover"
            style={{ height: "349px", width: "423px" }} // Image width remains unaffected
          />
          <div className="text-yellowish pl-4 pt-5">10 February 2022</div>
          <div className="pl-4 pt-5 text-xl">
            Morbi Sodales Tellus Elit, In <br /> Blandit Risus Suscipit A
          </div>
          <div className="flex justify-between pl-4 pt-5 pb-5">
            <button className="text-xl">Learn More</button>
            <div className="flex gap-5 pr-10 text-2xl">
              <TiThumbsUp />
              <IoChatboxEllipsesOutline className="text-yellowish" />
              <IoShareSocialOutline />
            </div>
          </div>
        </div>

        <div
          style={{
            position: "relative",
            display: "inline-block", // Ensure the container doesn't affect layout
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              border: "2px solid white", // Apply border directly on the edges
              pointerEvents: "none", // So it doesn't interfere with interactions
            }}
          />
          <Image
            src={blog3}
            alt="Food Item 3"
            className="rounded-lg object-cover"
            style={{ height: "349px", width: "423px" }} // Image width remains unaffected
          />
          <div className="text-yellowish pl-4 pt-5">10 February 2022</div>
          <div className="pl-4 pt-5 text-xl">
            Curabitur rutrum velit ac <br /> congue malesuada
          </div>
          <div className="flex justify-between pl-4 pt-5 pb-5">
            <button className="text-xl">Learn More</button>
            <div className="flex gap-5 pr-10 text-2xl">
              <TiThumbsUp />
              <IoChatboxEllipsesOutline className="text-yellowish" />
              <IoShareSocialOutline />
            </div>
          </div>
        </div>
      </div>

      {/* Two sections (left and right) */}
      <div className="bg-black flex justify-between items-center w-full mt-10 px-72">
        {/* Left side: "Still You Need Our Support ?" */}
        <div className="flex flex-col w-1/2">
          <h1 className="text-5xl font-bold leading-tight">
            <span className="text-yellowish">St</span>ill You Need Our Support ?
          </h1>
          <p className="mt-4 text-xl">
            Dont wait make a smart & logical quote here. Its pretty easy.
          </p>
        </div>

        {/* Right side: Email Subscription */}
        <div className="flex w-[459px] h-[56px] rounded-md shadow-md mt-10">
          {/* Left half (Email input field) */}
          <div className="w-2/3 bg-yellowish text-white flex items-center justify-center">
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-yellowish text-white text-sm font-semibold p-2 rounded-md w-4/5 placeholder-white"
            />
          </div>

          {/* Right half (Subscribe Now Button) */}
          <div className="w-1/3 bg-white text-yellowish flex items-center justify-center">
            <button className="text-sm font-semibold cursor-pointer hover:underline">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;