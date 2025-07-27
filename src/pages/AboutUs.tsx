import { FaArrowDownLong } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import TestimonialSlider from "../components/Slider/TestimonialSlider";
import { NavLink } from "react-router-dom";

const AboutUs = () => {
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
                to="/about-us"
                className={({ isActive }) =>
                  isActive
                    ? "text-pink-500 font-semibold"
                    : "hover:text-pink-400"
                }
              >
                About Us
              </NavLink>
            </nav>
            <h1 className="mb-4 text-center">About Us</h1>
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
      <section className="property-insights w-full max-w-screen-xl mx-auto px-4 md:px-8 mb-30 mt-30">
        <div className="relative flex flex-wrap w-full items-center mb-20">
          <div className="insights-img-box relative w-full md:w-[50%]">
            <div className="insights-img mx-auto">
              <img
                src="https://preview.colorlib.com/theme/uptown/images/about.jpg.webp"
                className=""
                alt=""
              />
            </div>
          </div>
          <div className="insights-content relative bg-white md:h-[550px]  flex flex-wrap w-full md:w-[57%] md:ml-[-120px] md:mt-0 p-0 md:p-8 md:shadow-lg ">
            <h2 className="text-[28px] md:text-[40px] font-semibold mb-4">
              We Put People First.
            </h2>
            <p className="mb-4 !text-gray-500 !text-[17px]">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
            <p className="!text-gray-500 !text-[17px]">
              On her way she met a copy. The copy warned the Little Blind Text,
              that where it came from it would have been rewritten a thousand
              times and everything that was left from its origin would be the
              word "and" and the Little Blind Text should turn around and return
              to its own, safe country. But nothing the copy said could convince
              her and so it didn’t take long until a few insidious Copy Writers
              ambushed her, made her drunk with Longe and Parole and dragged her
              into their agency, where they abused her for their.
            </p>
          </div>
        </div>

        <div className="figure w-full md:w-full flex flex-wrap md:flex-nowrap m-auto  gap-6 md:gap-0 mt-[-100px] md:mt-0 ">
          <div className="w-full md:w-1/4 flex justify-center items-center gap-6 md:pr-[41px] md:mr-[40px] md:border-r border-gray-300 mt-15 md:mt-0">
            <span className="font-normal text-[40px] md:text-[60px]">305</span>
            <span>Area Population</span>
          </div>
          <div className="w-full md:w-1/4 flex justify-center items-center gap-6 md:pr-[41px] md:mr-[40px] md:border-r border-gray-300 mt-15 md:mt-0">
            <span className="font-normal text-[40px] md:text-[60px]">
              1,090
            </span>
            <span>Total Properties</span>
          </div>
          <div className="w-full md:w-1/4 flex justify-center items-center gap-6 md:pr-[41px] md:mr-[40px] md:border-r border-gray-300 mt-15 md:mt-0">
            <span className="font-normal text-[40px] md:text-[60px]">209</span>
            <span>Average House</span>
          </div>
          <div className="w-full md:w-1/4 flex justify-center items-center gap-6 md:pr-[41px] md:mr-[40px] md:border-r border-gray-300 mt-15 md:mt-0">
            <span className="font-normal text-[40px] md:text-[60px]">67</span>
            <span>Total Branches</span>
          </div>
        </div>
      </section>
      <section className="testimonial-section mb-30 w-full mx-auto">
        <div className="flex justify-center">
          <div className="w-full max-w-6xl text-center heading-section">
            <span className="sub-heading">TESTIMONIAL</span>
            <h2 className="mb-5 text-[40px] font-semibold">Happy Clients</h2>
          </div>
        </div>
        <div className="testimonial-content max-w-550 mx-auto overflow-hidden">
          <TestimonialSlider />
        </div>
      </section>
    </>
  );
};

export default AboutUs;
