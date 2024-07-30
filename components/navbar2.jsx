"use client";
import { useState, useEffect, useRef } from "react";
import Logo from "../public/assets/logo.svg";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Poppins } from "next/font/google";

const Poppin = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);



  return (
    <>
      <nav
        id="navbar"
        className="bg-[#000e19] p-1 relative top-0 h-[90px] w-full z-10 flex items-center justify-between border-b-[1px] border-opacity-15 border-gray-200"
      >
        <Image width={140} height={140} className="ml-6" src={Logo} alt="logo" />
        <div className="flex items-center ">
          <button
            className="hamburger block md:hidden px-3 py-2 rounded text-white"
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            &#9776;
          </button>
          <div
            ref={mobileMenuRef}
            className={`menu ${
              isOpen ? "flex" : "hidden"
            } md:flex items-center justify-end flex-col md:flex-row w-full md:w-auto fixed top-20 right-0 sm:relative sm:top-0 bg-slate-700 md:bg-transparent`}
            style={{ zIndex: 9 }}
          >
            <ul className="flex flex-col md:flex-row list-none w-full text-sm mt-1 md:mr-6">
            <li>
              <a
                className={`flex py-3 sm:px-2 text-[#7F9ED0] items-center sm:mt-0 justify-center sm:mb-7 mt-2 md:mb-0 md:mr-5 text-nowrap ${Poppin.className} h-[77px] hover:border-b-[1px] hover:border-gray-200`}
                href="#"
              >
                Games <i className="fa-solid fa-users"></i>
                <FontAwesomeIcon className="ml-2 h-3" icon={faChevronDown} />
              </a>
            </li>
            <li>
              <a
                className={`flex py-3 sm:px-2 text-[#7F9ED0] items-center sm:mt-0 justify-center sm:mb-7 mt-2 md:mb-0 md:mr-5 text-nowrap ${Poppin.className} h-[77px] hover:border-b-[1px] hover:border-gray-200`}
                href="#"
              >
                Products <i className="fa-solid fa-plus"></i>
                <FontAwesomeIcon className="ml-2 h-3" icon={faChevronDown} />
              </a>
            </li>
            <li>
              <a
                className={`flex py-3 sm:px-2 text-[#7F9ED0] items-center sm:mt-0 justify-center sm:mb-7 mt-2 md:mb-0 md:mr-5 text-nowrap ${Poppin.className} h-[77px] hover:border-b-[1px] hover:border-gray-200`}
                href="#"
              >
                Learn more <i className="fa-brands fa-discourse"></i>
                <FontAwesomeIcon className="ml-2 h-3" icon={faChevronDown} />
              </a>
            </li>
            <li>
              <a
                className={`flex py-3 sm:px-2 text-[#7F9ED0] items-center sm:mt-0 justify-center sm:mb-7 mt-2 md:mb-0 md:mr-5 text-nowrap ${Poppin.className} h-[77px] hover:border-b-[1px] hover:border-gray-200`}
                href="#"
              >
                Contact us <i className="fa-brands fa-discourse"></i>
              </a>
            </li>
          </ul>
           <button className=" mt-3 ml-4 mb-3 md:mt-0 md:ml-0 md:mb-0 rounded-full bg-[#0b71bc] text-white px-10 py-4 mr-4">
            Connect
          </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;