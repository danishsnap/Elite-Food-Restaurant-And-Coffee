import React from "react";
import { CiSearch } from "react-icons/ci";
import { SlHandbag } from "react-icons/sl";

const Header = () => {
  return (
    <header className="bg-black text-white shadow-sm mx-auto w-[1920] pt-8 pb-8">
      {/* Top Bar */}
      <div className="bg-black text-white text-sm flex items-center justify-center w-[1920px]">
        <div className="text-center text-yellowish font-bold text-2xl leading-[32px]">
          <span className="text-yellowish">Food</span>
          <span className="text-white">tuck</span>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-black text-white flex justify-between items-center pt-5 mx-auto w-[1320px]">
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="">Home</a>
          <a href="">Menu</a>
          <a href="">Blog</a>
          <a href="">Pages</a>
          <a href="">About</a>
          <a href="">Shop</a>
          <a href="">Contact</a>
        </nav>
        <div className="flex justify-between items-center space-x-6">
          {/* Search Box */}
          <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="bg-black text-white placeholder:text-gray-400 text-lg pl-4 pr-12 py-2 border border-orange-500 rounded-full outline-none"
          />
          <CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white text-3xl pointer-events-none" />
        </div>
          {/* Shopping Bag Icon */}
          <SlHandbag className="text-white text-2xl" />
        </div>
      </div>
    </header>
  );
};

export default Header;
