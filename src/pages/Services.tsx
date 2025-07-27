import { BsSuitClub } from "react-icons/bs";
import { CiLock } from "react-icons/ci";
import { IoMdPaper } from "react-icons/io";
import { MdCurrencyExchange } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Services = () => {
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
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "text-pink-500 font-semibold"
                    : "hover:text-pink-400"
                }
              >
                Services
              </NavLink>
            </nav>
            <h1 className="mb-4 text-center">Services</h1>
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
      <section className="service-section w-full md:w-[64%] mx-auto py-24">
        <div className="flex justify-center">
          <div className="w-full text-center heading-section">
            <span className="sub-heading">OUR SERVICES</span>
            <h2 className="mb-5 text-[40px] font-semibold">
              The smartest way to buy a home
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className="flex flex-col items-center text-center py-8 ">
            <div className="media-block">
              <div className="icon flex justify-center items-center">
                <span>
                  <BsSuitClub />
                </span>
              </div>
              <div className="media-body py-2 md:py-6">
                <h3 className="font-normal">No Downpayment</h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center text-center py-8 ">
            <div className="media-block">
              <div className="icon flex justify-center items-center">
                <span>
                  <IoMdPaper />
                </span>
              </div>
              <div className="media-body py-2 md:py-6">
                <h3>No Downpayment</h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center text-center py-8 ">
            <div className="media-block">
              <div className="icon flex justify-center items-center">
                <span>
                  <MdCurrencyExchange />
                </span>
              </div>
              <div className="media-body py-2 md:py-6">
                <h3>No Downpayment</h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center text-center py-8 ">
            <div className="media-block">
              <div className="icon flex justify-center items-center">
                <span>
                  <CiLock />
                </span>
              </div>
              <div className="media-body py-2 md:py-6">
                <h3>No Downpayment</h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="work-flow-section mb-30  w-full md:w-[95%] mx-auto relative 
         before:content-[''] before:absolute before:left-0 before:-bottom-[30px] 
         before:w-1/2 before:h-[70px] before:[transform:skewY(4deg)] before:bg-white after:content-[''] after:absolute after:right-0 after:-bottom-[30px] 
         after:w-1/2 after:h-[70px] after:[transform:skewY(-4deg)] after:bg-white"
      >
        <div className="work-flow-container md:bg-black md:w-1/2 w-full pb-45">
          <div className="w-[90%] ml-auto pt-12 pr-4">
            <div className="flex justify-center w-full">
              <div className="w-full text-center heading-section">
                <span className="sub-heading">WORK FLOW</span>
                <h2 className="mb-4 text-3xl md:text-4xl font-semibold !text-white">
                  How its works
                </h2>
              </div>
            </div>
            <div className="work-flow-content grid grid-cols-1 sm:grid-cols-2 gap-6  w-full mt-8">
              <div className="text-white flex flex-col justify-center items-center text-center md:p-4">
                <div className="work-flow-icon w-25 h-25 rounded-full flex items-center justify-center mb-5">
                  <span className="text-white text-3xl font-medium">01</span>
                </div>
                <h3 className="!text-white mb-5 text-2xl">Evaluate Property</h3>
                <p className="!text-white ">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
              <div className="text-white flex flex-col justify-center items-center text-center md:p-4">
                <div className="work-flow-icon w-25 h-25 rounded-full bg-[#333] flex items-center justify-center mb-5">
                  <span className="text-white text-3xl font-medium">02</span>
                </div>
                <h3 className="!text-white mb-5 text-2xl">Evaluate Property</h3>
                <p className="!text-white">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
              <div className="text-white flex flex-col justify-center items-center text-center md:p-4">
                <div className="work-flow-icon w-25 h-25 rounded-full bg-[#333] flex items-center justify-center mb-5">
                  <span className="text-white text-3xl font-medium">03</span>
                </div>
                <h3 className="!text-white mb-5 text-2xl">Evaluate Property</h3>
                <p className="!text-white">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
              <div className="text-white flex flex-col justify-center items-center text-center md:p-4">
                <div className="work-flow-icon w-25 h-25 rounded-full bg-[#333] flex items-center justify-center mb-5">
                  <span className="text-white text-3xl font-medium">04</span>
                </div>
                <h3 className="!text-white mb-5 text-2xl">Evaluate Property</h3>
                <p className="!text-white">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="desc w-full md:w-[80%] mx-auto px-5 mt-[-100px]">
          <h2 className="!font-semibold !text-[30px] mb-3">Description</h2>
          <p className="px-2">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean. A small river named Duden flows by their place and
            supplies it with the necessary regelialia. It is a paradisematic
            country, in which roasted parts of sentences fly into your mouth.
          </p>
        </div>
      </section>
    </>
  );
};

export default Services;
