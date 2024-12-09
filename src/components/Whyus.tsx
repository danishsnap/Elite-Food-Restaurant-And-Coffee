import React from "react";
import Image from "next/image";
import choose1 from "@/assets/choose1.jpg";
import choose2 from "@/assets/choose2.jpg";
import choose3 from "@/assets/choose3.jpg";
import choose4 from "@/assets/choose4.jpg";
import choose5 from "@/assets/choose5.jpg";
import choose6 from "@/assets/choose6.jpg";

const Whyus = () => {
  return (
    <div className="bg-black text-white flex flex-col items-center mx-auto px-8 py-16 w-[1920px]">
      <div className="flex flex-row justify-between w-full max-w-[1320px]">
        {/* Left Side: Images */}
        <div className="grid gap-4 w-1/2">
          {/* Row 1: Two images side by side */}
          <div className="flex space-x-4 items-end">
            <Image src={choose1} alt="Food Item 1" className="rounded-lg object-cover" style={{ height: "356px", width: "362px" }}/>
            <Image src={choose2} alt="Food Item 2" className="rounded-lg object-cover" style={{ height: "231px", width: "281px" }}/>
          </div>

          {/* Row 2: Multiple images with fixed sizes */}
          <div className="flex space-x-4 items-start">
            <Image src={choose3} alt="Food Item 3" className="rounded-lg object-cover" style={{ height: "306px", width: "244px" }}/>
            <Image src={choose4} alt="Food Item 4" className="rounded-lg object-cover" style={{ height: "226px", width: "221px" }}/>
            <div className="flex flex-col space-y-4">
              <Image src={choose5} alt="Food Item 5" className="rounded-lg object-cover" style={{ height: "168px", width: "161px" }}/>
              <Image src={choose6} alt="Food Item 6" className="rounded-lg object-cover" style={{ height: "168px", width: "161px" }}/>
            </div>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-1/2 pl-28 flex flex-col justify-start">
  {/* Heading */}
  <h3 className="italic text-yellowish text-2xl font-greatVibes">
    Why Choose Us
  </h3>
  <h1 className="text-5xl font-bold leading-tight mt-4">
    <span className="text-yellowish">Ex</span>traordinary Taste <br />
    And Experienced
  </h1>

  {/* Description */}
  <p className="text-gray-400 mt-6 text-lg">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
    pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
    augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
    sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
    consequat.
  </p>

  {/* Icon Box Section */}
  <div className="flex gap-10 mt-10">
    {/* Icon 1 */}
    <div className="flex flex-col items-start">
      <div className="w-[102px] h-[100px] bg-yellowish rounded-md"></div>
      <p className="mt-2 text-lg font-normal pl-2">Fast Food</p>
    </div>
    {/* Icon 2 */}
    <div className="flex flex-col items-start">
      <div className="w-[102px] h-[100px] bg-yellowish rounded-md"></div>
      <p className="mt-2 text-lg font-normal pl-6">Lunch</p>
    </div>
    {/* Icon 3 */}
    <div className="flex flex-col items-start">
      <div className="w-[102px] h-[100px] bg-yellowish rounded-md"></div>
      <p className="mt-2 text-lg font-normal pl-6">Dinner</p>
    </div>
  </div>

  {/* Experience Section */}
  <div className="mt-10 flex items-center w-[374px] h-[93px] bg-white rounded-md shadow-md">
  {/* Orange Bar */}
  <div className="w-[10px] h-full bg-yellowish rounded-l-md"></div>

  {/* Text Content */}
  <div className="pl-4 flex flex-row items-center w-full">
    {/* Left: "30+" */}
    <p className="text-5xl font-bold text-yellowish w-[70px] ml-10">30+</p>

    {/* Right: "Years of Experienced" */}
    <div className="flex flex-col ml-14">
      <p className="text-2xl font-normal text-gray-800">Years of</p>
      <p className="text-2xl font-bold text-gray-800">Experienced</p>
    </div>
  </div>
</div>
</div>

      </div>
    </div>
  );
};

export default Whyus;