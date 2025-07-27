import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { MdMessage } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Blog = () => {
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
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? "text-pink-500 font-semibold"
                    : "hover:text-pink-400"
                }
              >
                Blog
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
      <section className="blog-section mt-30">
        <div className="flex justify-center mb-15">
          <div className="w-full md:max-w-6xl text-center heading-section">
            <span className="sub-heading">BLOG</span>
            <h2 className="mb-5 text-[40px] font-semibold">Recent Blog</h2>
          </div>
        </div>
        <div className="flex flex-wrap w-full md:w-[64%] mx-auto gap-8">
          <div className="blog-content w-full md:w-[23%] px-5 md:px-0 ">
            <a href="#">
              <h3 className="!font-semibold hover:!text-[#e86ed0] transition-colors duration-200">
                Why Lead Generation is Key for Business Growth
              </h3>
            </a>
            <p className="flex items-center gap-4 !text-gray-400 !text-[15px] mb-4">
              July. 24, 2019 Admin <MdMessage /> 3
            </p>

            <div className="blog-img mb-4">
              <a href="#">
                <img
                  src="https://preview.colorlib.com/theme/uptown/images/image_1.jpg.webp"
                  alt=""
                />
              </a>
            </div>
            <p className="!text-gray-500 !text-[18px]">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
          <div className="blog-content  w-full md:w-[23%] px-5 md:px-0 ">
            <a href="#">
              <h3 className="!font-semibold hover:!text-[#e86ed0] transition-colors duration-200">
                Why Lead Generation is Key for Business Growth
              </h3>
            </a>
            <p className="flex items-center gap-4 !text-gray-400 !text-[15px] mb-4">
              July. 24, 2019 Admin <MdMessage /> 3
            </p>

            <div className="blog-img mb-4">
              <a href="#">
                <img
                  src="https://preview.colorlib.com/theme/uptown/images/image_2.jpg.webp"
                  alt=""
                />
              </a>
            </div>
            <p className="!text-gray-500 !text-[18px]">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
          <div className="blog-content  w-full md:w-[23%] px-5 md:px-0 ">
            <a href="#">
              <h3 className="!font-semibold hover:!text-[#e86ed0] transition-colors duration-200">
                Why Lead Generation is Key for Business Growth
              </h3>
            </a>
            <p className="flex items-center gap-4 !text-gray-400 !text-[15px] mb-4">
              July. 24, 2019 Admin <MdMessage /> 3
            </p>

            <div className="blog-img mb-4">
              <a href="#">
                <img
                  src="https://preview.colorlib.com/theme/uptown/images/image_3.jpg.webp"
                  alt=""
                />
              </a>
            </div>
            <p className="!text-gray-500 !text-[18px]">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
          <div className="blog-content  w-full md:w-[23%] px-5 md:px-0 ">
            <a href="#">
              <h3 className="!font-semibold hover:!text-[#e86ed0] transition-colors duration-200">
                Why Lead Generation is Key for Business Growth
              </h3>
            </a>
            <p className="flex items-center gap-4 !text-gray-400 !text-[15px] mb-4">
              July. 24, 2019 Admin <MdMessage /> 3
            </p>

            <div className="blog-img mb-4">
              <a href="#">
                <img
                  src="https://preview.colorlib.com/theme/uptown/images/image_4.jpg.webp"
                  alt=""
                />
              </a>
            </div>
            <p className="!text-gray-500 !text-[18px]">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
