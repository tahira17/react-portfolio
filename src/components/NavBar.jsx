import React, { useState } from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div
      className="text-white font-sans bg-[#6155ae]"
      
    >
      {/* Nav Bar */}

      <nav className="fixed top-0 z-10 w-full bg-[#6155ae]">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 sm:py-2 md:block">
              <div className="md:hidden">
                <button
                  className="p-2 text-[#6155ae] rounded-md outline-none focus:border-[#6155ae] focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-x-40 space-y-8 md:flex md:space-x-2 sm:space-x-0 sm:space-y-0 md:space-y-0">
              <li className="text-white" >
                  {/* <Link to="about" smooth={true} duration={500}>
                    About
                  </Link> */}
                </li>
                <li className="text-white" >
                  <Link to="home" smooth={true} duration={500}>
                    Home
                  </Link>
                </li>
                <li className="text-white ">
                <Link to="about" smooth={true} duration={500}>
                    About
                  </Link>
                </li>
                <li>
                <Link to="skills" smooth={true} duration={500}>
                    Skills
                  </Link></li>
                <li>
                <Link to="work" smooth={true} duration={500}>
                  Work
                </Link>
                </li>
                <li>
                <Link to="contact" smooth={true} duration={500}>
                  Contact
                </Link>
                </li>
                
              </ul>

              <div className="mt-3 space-y-2 lg:hidden md:hidden sm:inline-block"></div>
            </div>
          </div>
          <div className="hidden space-x-2 md:inline-block"></div>
        </div>
      </nav>
    
     
    </div>
  );
};

export default NavBar;
