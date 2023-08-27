import React from "react";
import { Link } from "react-scroll";

import { HiArrowNarrowRight } from "react-icons/hi";
const Home = () => {
  return (
    <div name="home" className="w-cover h-screen bg-hero_pattern bg-no-repeat ">
      {/* Container */}
      <div data-aos="zoom-in" className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#61d4dc]">Hi, My name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#61d4dc]">
          Tahira Nawaz
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a FrontEnd Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a FrontEnd Developer developing and building responsive and
          attractive web applications.
        </p>

        <div data-aos="zoom-in">
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center bg-[#c181df]">
            {" "}
            <Link to="work" smooth={true} duration={500}>
              View Work
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>


      
    </div>
  );
};

export default Home;
