import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" w-full z-50 md:pt-5">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between bg-black md:!bg-transparent">
        <div className="text-2xl font-bold md:text-black text-white">
          My Website
        </div>

        {/* Hamburger for Mobile */}
        <div className="md:hidden flex gap-1">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-gray-500 focus:outline-none flex flex-wrap"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <p className="!text-gray-500">MENU</p>
          </button>
        </div>

        {/* Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center xl:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent px-4 md:px-0 py-4 md:py-0 shadow-md md:shadow-none md:gap-10 z-[99] scroll-smooth`}
        >
          <NavLink
            to="/"
            className="nav-link block py-2 md:py-0 md:!text-black !text-white"
          >
            Home
          </NavLink>
          <NavLink
            to="/about-us"
            className="nav-link block py-2 md:py-0 md:!text-black !text-white"
          >
            About
          </NavLink>
          <NavLink
            to="/agent"
            className="nav-link block py-2 md:py-0 md:!text-black !text-white"
          >
            Agent
          </NavLink>
          <NavLink
            to="/services"
            className="nav-link block py-2 md:py-0 md:!text-black !text-white"
          >
            Services
          </NavLink>
          <NavLink
            to="/properties"
            className="nav-link block py-2 md:py-0 md:!text-black !text-white"
          >
            Properties
          </NavLink>
          <NavLink
            to="/blog"
            className="nav-link block py-2 md:py-0 md:!text-black !text-white"
          >
            Blog
          </NavLink>

          <NavLink
            to="/contact"
            className="nav-link block py-2 md:py-0 md:!text-black !text-white"
          >
            Contact
          </NavLink>
          <a
            href="/login"
            className="nav-link text-indigo-600 hover:text-indigo-800 font-semibold block py-2 md:py-0"
          >
            Login/Signup
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
