import { AlignJustify, Phone, UserRound } from "lucide-react";
import { BaseUrls } from "@/shared/utils/UrlPages";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center flex-wrap bg-white p-3 rounded-full shadow-md relative">
      <h2 className="text-xl font-medium mx-4">
        <Link to={BaseUrls.Home} className="p-1">
          Move<span className="text-primary">Co</span>
        </Link>
      </h2>

      <ul
        className={`list-none flex-wrap gap-6 font-medium items-center ${
          menuOpen ? "flex" : "hidden"
        } lg:flex flex-col lg:flex-row absolute lg:static top-20 left-0 right-0 bg-white lg:bg-transparent p-4 lg:p-0 rounded-xl lg:rounded-none shadow-md lg:shadow-none z-50`}
      >
        <NavLink to={BaseUrls.Home}>
          {({ isActive }) => (
            <>
              <li
                className={`relative cursor-pointer p-1 text-gray-800 transition-all duration-200 ease-in-out hover:text-primary active:text-primary group ${
                  isActive ? "text-primary" : ""
                }`}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                Home
                <span className="absolute left-1/2 -bottom-0.5 h-[2px] w-0 bg-primary transition-all duration-300 ease-in-out group-hover:w-1/2 transform -translate-x-1/2"></span>
              </li>
            </>
          )}
        </NavLink>

        <NavLink to={BaseUrls.AboutUs}>
          {({ isActive }) => (
            <>
              <li
                className={`relative cursor-pointer p-1 text-gray-800 transition-all duration-200 ease-in-out hover:text-primary active:text-primary group ${
                  isActive ? "text-primary" : ""
                }`}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                About Us
                <span className="absolute left-1/2 -bottom-0.5 h-[2px] w-0 bg-primary transition-all duration-300 ease-in-out group-hover:w-1/2 transform -translate-x-1/2"></span>
              </li>
            </>
          )}
        </NavLink>

        <li
          className="relative cursor-pointer p-1 text-gray-800 transition-all duration-200 ease-in-out hover:text-primary active:text-primary group"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          Products
          <span className="absolute left-1/2 -bottom-0.5 h-[2px] w-0 bg-primary transition-all duration-300 ease-in-out group-hover:w-1/2 transform -translate-x-1/2"></span>
        </li>
        <li
          className="relative cursor-pointer p-1 text-gray-800 transition-all duration-200 ease-in-out hover:text-primary active:text-primary group"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          Services
          <span className="absolute left-1/2 -bottom-0.5 h-[2px] w-0 bg-primary transition-all duration-300 ease-in-out group-hover:w-1/2 transform -translate-x-1/2"></span>
        </li>
        <li
          className="relative cursor-pointer p-1 text-gray-800 transition-all duration-200 ease-in-out hover:text-primary active:text-primary group"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          Resources
          <span className="absolute left-1/2 -bottom-0.5 h-[2px] w-0 bg-primary transition-all duration-300 ease-in-out group-hover:w-1/2 transform -translate-x-1/2"></span>
        </li>
        <li
          className="relative cursor-pointer p-1 text-gray-800 transition-all duration-200 ease-in-out hover:text-primary active:text-primary group"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          Blog
          <span className="absolute left-1/2 -bottom-0.5 h-[2px] w-0 bg-primary transition-all duration-300 ease-in-out group-hover:w-1/2 transform -translate-x-1/2"></span>
        </li>
      </ul>

      <div className="hidden lg:flex justify-between items-center gap-2 text-primary mx-4">
        <div className="border-2 border-primary rounded-full px-4 py-2 hover:bg-primary hover:text-white cursor-pointer">
          <button className="flex items-center gap-2">
            <Phone />
            Contact us
          </button>
        </div>
        <button className="rounded-full p-2 bg-primary text-white">
          <UserRound />
        </button>
      </div>

      <div
        className={`lg:hidden mx-4 flex justify-between items-center gap-2 ${
          menuOpen ? "text-primary" : ""
        }`}
      >
        <button className="rounded-full p-1 bg-primary text-white">
          <UserRound />
        </button>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <AlignJustify size={32} />
        </button>
      </div>
    </nav>
  );
};

export { Navbar };
