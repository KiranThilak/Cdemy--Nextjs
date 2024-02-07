import React from "react";
import Link from "next/link";

/* import React, { useState } from "react"; */
/* import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };} */

const Header = () => {
  return (
    <header className="flex justify-between items-center h-24  mx-auto px-4 bg-gradient-to-r from-green-200 to-blue-200  sticky top-0 left-0 right-0 z-50">
      <Link href="/">
        <h1 className="text-6xl  font-bold text-black text-center pb-5 pl-3 ">
          <span className="text-4xl  font-bold text-center pb-5 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent ">
            Cdemy
          </span>
        </h1>
      </Link>
      <nav>
        {/*  <ul className="hidden md:flex"> */}
        <Link
          href="/"
          className="p-7   text-xl text-black-700  hover:underline hover:underline-offset-8 cursor-pointer transition-colors duration-300 active:text-green-700 active:underline active:underline-offset-8"
        >
          Blog
        </Link>
        <Link
          href="/services"
          className="p-7 text-xl text-black-700  hover:underline hover:underline-offset-8 cursor-pointer transition-colors duration-300 active:text-green-700 active:underline active:underline-offset-8"
        >
          Services
        </Link>
        <Link
          href="/work"
          className="p-7 text-xl text-black-700  hover:underline hover:underline-offset-8 cursor-pointer transition-colors duration-300 active:text-green-700 active:underline active:underline-offset-8"
        >
          Work
        </Link>
        <Link
          href="/about"
          className="p-7 text-xl text-black-700  hover:underline hover:underline-offset-8 cursor-pointer transition-colors duration-300 active:text-green-700 active:underline active:underline-offset-8"
        >
          About
        </Link>
        <Link href="/contact" className="p-5 pl-40">
          <button className="middle none center rounded-lg  py-2 px-4 bg-gradient-to-r from-green-400 to-blue-500  text-base uppercase text-white shadow-md bg-[#005959] hover:shadow-lg hover:shadow-green-600/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            Contact
          </button>
        </Link>
        {/*   </ul> */}
      </nav>
      {/*  <div onClick={handleNav} className="block md:hidden">
      {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
    </div> */}
      {/*  <ul
       className={
        nav
          ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
          : "ease-in-out duration-500 fixed left-[-100%]"
      } 
    >
      <h1 className="text-6xl  font-bold text-black text-left pb-5 pl-4">
        <span className="text-4xl  font-bold text-left pb-5 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent ">
          Cdemy
        </span>
      </h1>
      <li className="p-4 border-b border-gray-600">Home</li>
      <li className="p-4 border-b border-gray-600">Company</li>
      <li className="p-4 border-b border-gray-600">Resources</li>
      <li className="p-4 border-b border-gray-600">About</li>
      <li className="p-4">Contact</li>
    </ul> */}
    </header>
  );
};

export default Header;