import React from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

function Hero() {
  return (
    <div className=" bg-discord_blue pb-8 md:pb-0 ">
      <div className="p-7 py-9 h-screen md:h-83vh md:flex relative ">
        <div
          className="flex flex-col gap-7 md:max-w-md lg:max-w-none
            lg:justify-center"
        >
          <h1 className="text-5xl text-white font-bold">Your place to talk</h1>
          <h2
            className="text-white text-lg font-light  tracking-wide 
                lg:max-w-3xl w-full "
          >
            Whether you’re part of a school club, gaming group, worldwide art
            community, or just a handful of friends that want to spend time
            together, Discord makes it easy to talk every day and hang out more
            often.
          </h2>
          <div
            className="flex flex-col sm:flex-row md:flex-col lg:flex-row
            md:items-start sm:item-center gap-6"
          >
            <button
              className="bg-white w-60 font-medium flex items-center
            justify-center rounded-full p-4 text-lg hover:shadow-2xl
            hover:text-discord_blurple focus:outline-none transition 
            duration-200 ease-in-out"
            >
              <ArrowDownTrayIcon className="w-6 mr-2" />
              Download for Mac
            </button>
            <button
              className="bg-gray-900 text-white w-72 font-medium flex items-center
            justify-center  rounded-full p-4 text-lg hover:shadow-2xl
            hover:bg-gray-800 focus:outline-none transition 
            duration-200 ease-in-out"
            >
              Open Discord in your browser
            </button>
          </div>
        </div>
        <div className="flex-grow">
          <img
            src="hero-sm.svg"
            alt=""
            className="absolute -left-36 mt-16 sm:-left-44 md:hidden"
          />
          <img
            src="hero-lg.svg"
            alt=""
            className="hidden md:inline absolute"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
