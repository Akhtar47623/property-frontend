import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { IoIosLink } from "react-icons/io";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { NavLink } from "react-router-dom";

const Properties = () => {
  return (
    <>
      <section
        className="banner-section w-full relative 
                 before:content-[''] before:absolute before:left-0 before:-bottom-[30px] 
                 before:w-1/2 before:h-[70px] before:bg-white before:[transform:skewY(4deg)]
                 after:content-[''] after:absolute after:right-0 after:-bottom-[30px] 
                 after:w-1/2 after:h-[70px] after:bg-white after:[transform:skewY(-4deg)]"
      >
        <div className="banner relative w-full">
          <div className="overlay"></div>
          <div className="banner-content text-center w-full md:w-[48%]">
            <nav className="flex items-center text-gray-600 text-sm space-x-2 justify-center  ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-pink-500 font-semibold"
                    : "hover:text-pink-400"
                }
              >
                Home
              </NavLink>
              <span className="text-gray-400">{">"}</span>
              <NavLink
                to="/properties"
                className={({ isActive }) =>
                  isActive
                    ? "text-pink-500 font-semibold"
                    : "hover:text-pink-400"
                }
              >
                Properties
              </NavLink>
            </nav>
            <h1 className="mb-4 text-center">Choose Your Desired Home</h1>
          </div>
        </div>
        <a
          href="#offer"
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector("#offer")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        ></a>
      </section>
      <section
        className="w-full md:w-[95%] md:px-33 mx-auto pb-24 mt-30"
        id="offer"
      >
        <div className="flex justify-center">
          <div className="w-full text-center heading-section">
            <span className="sub-heading">WHAT WE OFFER</span>
            <h2 className="mb-15 text-[40px] font-semibold">
              Exclusive Offer For You
            </h2>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div className="bg-white overflow-hidden">
              <a
                href="#"
                className="block  property-img h-48 bg-gray-200 flex items-center justify-center text-gray-500"
              ></a>
              <div className="property-content shadow-xl">
                <p className="flex justify-between text-sm text-gray-600 mb-6">
                  <span className="line-through font-semibold text-gray-600 text-[15px] ">
                    800,000
                  </span>
                  <span className="font-bold text-[15px]">
                    {" "}
                    $3,050/<span className="text-gray-400">mo</span>
                  </span>
                </p>
                <ul className="flex gap-4 text-sm text-gray-400 mb-4">
                  <li className="flex items-center gap-1">
                    <IoBedOutline />
                    <span className="font-medium">2</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <LuBath />
                    <span className="font-medium">1</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <HiOutlineBuildingOffice />
                    <span className="font-medium">1200sqft</span>
                  </li>
                </ul>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  <a href="#" className="hover:underline font-semibold ">
                    The Blue Sky Home
                  </a>
                </h3>
                <span className="text-sm text-gray-600 block mb-2 font-semibold">
                  Oakland
                </span>
                <a href="#" className="property-link inline-block w-fit">
                  <span className="w-[20px] h-[20px] bg-[#e86ed0] border-r-2 text-white flex justify-center items-center ">
                    <IoIosLink />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div className="bg-white overflow-hidden">
              <a
                href="#"
                className="block  property-img h-48 bg-gray-200 flex items-center justify-center text-gray-500"
              ></a>
              <div className="property-content shadow-xl">
                <p className="flex justify-between text-sm text-gray-600 mb-6">
                  <span className="line-through font-semibold text-gray-600 text-[15px] ">
                    800,000
                  </span>
                  <span className="font-bold text-[15px]">
                    {" "}
                    $3,050/<span className="text-gray-400">mo</span>
                  </span>
                </p>
                <ul className="flex gap-4 text-sm text-gray-400 mb-4">
                  <li className="flex items-center gap-1">
                    <IoBedOutline />
                    <span className="font-medium">2</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <LuBath />
                    <span className="font-medium">1</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <HiOutlineBuildingOffice />
                    <span className="font-medium">1200sqft</span>
                  </li>
                </ul>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  <a href="#" className="hover:underline font-semibold ">
                    The Blue Sky Home
                  </a>
                </h3>
                <span className="text-sm text-gray-600 block mb-2 font-semibold">
                  Oakland
                </span>
                <a href="#" className="property-link inline-block w-fit">
                  <span className="w-[20px] h-[20px] bg-[#e86ed0] border-r-2 text-white flex justify-center items-center ">
                    <IoIosLink />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div className="bg-white overflow-hidden">
              <a
                href="#"
                className="block  property-img h-48 bg-gray-200 flex items-center justify-center text-gray-500"
              ></a>
              <div className="property-content shadow-xl">
                <p className="flex justify-between text-sm text-gray-600 mb-6">
                  <span className="line-through font-semibold text-gray-600 text-[15px] ">
                    800,000
                  </span>
                  <span className="font-bold text-[15px]">
                    {" "}
                    $3,050/<span className="text-gray-400">mo</span>
                  </span>
                </p>
                <ul className="flex gap-4 text-sm text-gray-400 mb-4">
                  <li className="flex items-center gap-1">
                    <IoBedOutline />
                    <span className="font-medium">2</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <LuBath />
                    <span className="font-medium">1</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <HiOutlineBuildingOffice />
                    <span className="font-medium">1200sqft</span>
                  </li>
                </ul>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  <a href="#" className="hover:underline font-semibold ">
                    The Blue Sky Home
                  </a>
                </h3>
                <span className="text-sm text-gray-600 block mb-2 font-semibold">
                  Oakland
                </span>
                <a href="#" className="property-link inline-block w-fit">
                  <span className="w-[20px] h-[20px] bg-[#e86ed0] border-r-2 text-white flex justify-center items-center ">
                    <IoIosLink />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Properties;
