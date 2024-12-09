import React from "react";
import Image from "next/image";
import menumain1 from "@/assets/menumain1.jpg";
import menu1 from "@/assets/menu1.png";
import menu2 from "@/assets/menu2.png";
import menu3 from "@/assets/menu3.png";
import menu4 from "@/assets/menu4.png";
import menu5 from "@/assets/menu5.png";
import menu6 from "@/assets/menu6.png";
import menu7 from "@/assets/menu7.png";
import menu8 from "@/assets/menu8.png";

const menu = () => {
  return (
    <div className="bg-black text-white flex mx-auto w-[1920px] h-[656px] flex-col items-center">
      {/* Food Category */}
      <div className="w-full text-center">
        <h3 className="italic text-yellowish text-2xl font-greatVibes">
          Choose & pick
        </h3>
      </div>

      {/* Main Heading */}
      <div className="w-full text-center mt-4">
        <h1 className="text-5xl font-bold leading-tight">
          <span className="text-yellowish">Fr</span>om Our Menu
        </h1>
      </div>

      <div className="bg-black text-white flex justify-between items-center pt-5 mx-auto w-[1056px]">
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="">Breakfast</a>
          <a href="">Lunch</a>
          <a href="">Dinner</a>
          <a href="">Dessert</a>
          <a href="">Drink</a>
          <a href="">Snack</a>
          <a href="">Suops</a>
        </nav>
      </div>
      <div className="flex justify-between items-center">
        <div className="px-6 pt-10">
          <Image
            src={menumain1}
            alt="Hero Poster"
            className="rounded-lg"
            style={{ height: "406px", width: "515px" }}
          />
        </div>

        <div className="px-6 pt-8">
          <div className="flex py-2 gap-x-2">
            <div>
              <Image
                src={menu1}
                alt="Hero Poster"
                className="rounded-lg"
                style={{ height: "79px", width: "80px" }}
              />
            </div>
            <ul>
              <li>Lettuce Leaf</li>
              <li>Lacus nisi, et ac dapibus velit in consequat.</li>
              <li className="text-yellowish">12.5$</li>
            </ul>
          </div>
          <div className="flex py-2 gap-x-2">
            <div>
              <Image
                src={menu2}
                alt="Hero Poster"
                className="rounded-lg"
                style={{ height: "79px", width: "80px" }}
              />
            </div>
            <ul>
              <li>Fresh Breakfast</li>
              <li>Lacus nisi, et ac dapibus velit in consequat.</li>
              <li className="text-yellowish">14.5$</li>
            </ul>
          </div>
          <div className="flex py-2 gap-x-2">
            <div>
              <Image
                src={menu3}
                alt="Hero Poster"
                className="rounded-lg"
                style={{ height: "79px", width: "80px" }}
              />
            </div>
            <ul>
              <li>Mild Butter</li>
              <li>Lacus nisi, et ac dapibus velit in consequat.</li>
              <li className="text-yellowish">12.5$</li>
            </ul>
          </div>
          <div className="flex py-2 gap-x-2">
            <div>
              <Image
                src={menu4}
                alt="Hero Poster"
                className="rounded-lg"
                style={{ height: "79px", width: "80px" }}
              />
            </div>
            <ul>
              <li>Fresh Bread</li>
              <li>Lacus nisi, et ac dapibus velit in consequat.</li>
              <li className="text-yellowish">12.5$</li>
            </ul>
          </div>
        </div>

        <div className="px-6 pt-8">
          <div className="flex py-2 gap-x-2">
            <div>
              <Image
                src={menu5}
                alt="Hero Poster"
                className="rounded-lg"
                style={{ height: "79px", width: "80px" }}
              />
            </div>
            <ul>
              <li>Glow Cheese</li>
              <li>Lacus nisi, et ac dapibus velit in consequat.</li>
              <li className="text-yellowish">12.5$</li>
            </ul>
          </div>
          <div className="flex py-2 gap-x-2">
            <div>
              <Image
                src={menu6}
                alt="Hero Poster"
                className="rounded-lg"
                style={{ height: "79px", width: "80px" }}
              />
            </div>
            <ul>
              <li>Italian Pizza</li>
              <li>Lacus nisi, et ac dapibus velit in consequat.</li>
              <li className="text-yellowish">14.5$</li>
            </ul>
          </div>
          <div className="flex py-2 gap-x-2">
            <div>
              <Image
                src={menu7}
                alt="Hero Poster"
                className="rounded-lg"
                style={{ height: "79px", width: "80px" }}
              />
            </div>
            <ul>
              <li>Sllice Beef</li>
              <li>Lacus nisi, et ac dapibus velit in consequat.</li>
              <li className="text-yellowish">12.5$</li>
            </ul>
          </div>
          <div className="flex py-2 gap-x-2">
            <div>
              <Image
                src={menu8}
                alt="Hero Poster"
                className="rounded-lg"
                style={{ height: "79px", width: "80px" }}
              />
            </div>
            <ul>
              <li>Mushaom Pizza</li>
              <li>Lacus nisi, et ac dapibus velit in consequat.</li>
              <li className="text-yellowish">12.5$</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default menu;