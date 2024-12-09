import React from "react";
import Image from "next/image";
import footer1 from "@/assets/footer1.png";
import footer2 from "@/assets/footer2.png";
import footer3 from "@/assets/footer3.png";

const Footer = () => {
  return (
    <div className="pl-52 grid grid-cols-4 pt-40 w-[1920px] mx-auto bg-black text-white py-10">
      {/* Column 1 */}
      <div>
        <h1 className="text-2xl font-semibold mb-4">About Us</h1>
        <p className="text-lg mb-6">
          Corporate clients and leisure travelers have <br /> been relying on
          Groundlink for dependable, <br /> safe, and professional chauffeured
          car <br /> service in major cities across the world.
        </p>
        <div className="flex items-start">
          <svg
            width="78"
            height="72"
            viewBox="0 0 78 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="78" height="72" rx="3" fill="#FF9F0D" />
            <path
              d="M39 28.5V36"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M45.4952 39.75L39 36"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M47.7761 31.5806H54.0261V25.3306"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M48.7227 45.7227C46.7997 47.6457 44.3497 48.9553 41.6825 49.4858C39.0153 50.0164 36.2506 49.7441 33.7381 48.7033C31.2256 47.6626 29.0782 45.9003 27.5673 43.6391C26.0564 41.3779 25.25 38.7195 25.25 36C25.25 33.2805 26.0564 30.6221 27.5673 28.3609C29.0782 26.0997 31.2256 24.3374 33.7381 23.2967C36.2506 22.256 39.0153 21.9837 41.6825 22.5142C44.3497 23.0448 46.7997 24.3543 48.7227 26.2773L54.026 31.5806"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="ml-4">
            <p className="text-lg font-medium">Opening Hours</p>
            <p className="text-lg">Mon - Sat (8.00 - 6.00)</p>
            <p className="text-lg">Sunday - Closed</p>
          </div>
        </div>
      </div>

      {/* Column 2 */}
      <div>
        <h1 className="text-2xl font-semibold mb-4">Useful Links</h1>
        <ul className="space-y-2">
          {["About", "News", "Partners", "Team", "Menu", "Contacts"].map(
            (link, index) => (
              <li key={index}>
                <button className="text-lg text-left bg-transparent text-white hover:underline focus:outline-none">
                  {link}
                </button>
              </li>
            )
          )}
        </ul>
      </div>

      {/* Column 3 */}
      <div>
        <h1 className="text-2xl font-semibold mb-4">Help</h1>
        <ul className="space-y-2">
          {[
            "FAQ",
            "Terms & Conditions",
            "Reporting",
            "Documentation",
            "Support Policy",
            "Privacy",
          ].map((link, index) => (
            <li key={index}>
              <button className="text-lg text-left bg-transparent text-white hover:underline focus:outline-none">
                {link}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 4 */}
      <div>
        <h1 className="text-xl font-semibold mb-4">Recent Posts</h1>
        {[footer1, footer2, footer3].map((img, index) => (
          <div key={index} className="flex items-center gap-4 mb-4">
            <Image
              src={img}
              alt={`Post ${index + 1}`}
              className="rounded-lg"
              style={{ height: "79px", width: "80px" }}
            />
            <ul>
              <li className="text-sm">20 Feb 2022</li>
              <li className="text-sm">Keep Your Business</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;