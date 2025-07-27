import { IoIosLink, IoMdPaper, IoMdSearch } from "react-icons/io";
import "../styles/Home.css";
import { CiLock } from "react-icons/ci";
import { MdCurrencyExchange, MdMessage } from "react-icons/md";
import { BsSuitClub } from "react-icons/bs";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import TestimonialSlider from "../components/Slider/TestimonialSlider";
import { FaArrowDownLong } from "react-icons/fa6";
const Home = () => {
  return (
    <div className="w-full">
      {/* Header Section */}
      <section
        className="banner-section w-full relative 
         before:content-[''] before:absolute before:left-0 before:-bottom-[30px] 
         before:w-1/2 before:h-[70px] before:bg-white before:[transform:skewY(4deg)]
         after:content-[''] after:absolute after:right-0 after:-bottom-[30px] 
         after:w-1/2 after:h-[70px] after:bg-white after:[transform:skewY(-4deg)]"
      >
        <div className="banner relative w-full">
          <div className="overlay"></div>
          <div className="banner-content text-center w-full sm:w-[70%] md:w-[60%] lg:w-[60%] xl:w-[48%]">
            <h1 className="mb-4 text-center">
              The Simplest Way to Find Property
            </h1>
            <p className="mb-10">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts
            </p>
            <form action="#" className="search-location mt-md-5">
              <div className="flex justify-center">
                <div className="input-search w-2xl md:px-5 px-0">
                  <input
                    type="text"
                    className="input-control"
                    placeholder="Search location"
                  />
                  <button className="bg-[#e86ed0] w-[70px] h-[70px] rounded-tr-[50%] rounded-br-[50%] rounded-bl-[50%] flex justify-center items-center absolute top-[362px] right-[20px] md:top-[242px] md:right-[143px] lg:top-[270px] lg:right-[40px] xl:top-[242px] xl:right-[142px]">
                    <span className="ion-ios-search  justify-center">
                      <IoMdSearch className="text-white size-8" />
                    </span>
                  </button>
                </div>
              </div>
            </form>
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
        >
          <div className="mouse-icon flex flex-wrap justify-center items-center bg-[#e86ed0] md:w-[4%] lg:w-[8%] xl:w-[4%]  w-[20%] h-[9%] border rounded-full mt-[200px] relative z-[99] border-[#e86ed0] before:content-['']  mx-auto cursor-pointer">
            <FaArrowDownLong className="text-white animate-bounce" />
          </div>
        </a>
      </section>
      <section className="service-section w-full xl:w-[64%] px-5 xl:px-0 mx-auto py-24">
        <div className="flex justify-center">
          <div className="w-full text-center heading-section">
            <span className="sub-heading">OUR SERVICES</span>
            <h2 className="mb-5 text-[40px] font-semibold">
              The smartest way to buy a home
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mt-12">
          <div className="flex flex-col items-center text-center py-8 ">
            <div className="media-block">
              <div className="icon flex justify-center items-center">
                <span>
                  <BsSuitClub />
                </span>
              </div>
              <div className="media-body py-2 md:py-6">
                <h3 className="font-normal">No Downpayment</h3>
                <p className="!text-gray-500">
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
                <p className="!text-gray-500">
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
                <p className="!text-gray-500">
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
                <p className="!text-gray-500">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full xl:px-44 mx-auto " id="offer">
        <div className="flex justify-center">
          <div className="w-full text-center heading-section">
            <span className="sub-heading">WHAT WE OFFER</span>
            <h2 className="mb-15 text-[40px] font-semibold">
              Exclusive Offer For You
            </h2>
          </div>
        </div>
        <div className="flex flex-wrap justify-center xl:gap-6 px-5 xl:px-0">
          <div className="w-full lg:w-1/3 xl:lg:w-1/4 lg:px-2">
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
          <div className="w-full lg:w-1/3 xl:lg:w-1/4 lg:px-2">
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
          <div className="w-full lg:w-1/3 xl:lg:w-1/4 lg:px-2">
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
      <section className="property-insights w-full max-w-screen-xl mx-auto px-4 md:px-8 mb-30">
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
          <div className="w-full md:w-1/4 flex justify-center items-center md:pr-[41px] md:mr-[40px] md:border-r border-gray-300 mt-15 md:mt-0">
            <span className="font-normal text-[40px] md:text-[60px]">305</span>
            <span>Area Population</span>
          </div>
          <div className="w-full md:w-1/4 flex justify-center items-center md:pr-[41px] md:mr-[40px] md:border-r border-gray-300 mt-15 md:mt-0">
            <span className="font-normal text-[40px] md:text-[60px]">
              1,090
            </span>
            <span>Total Properties</span>
          </div>
          <div className="w-full md:w-1/4 flex justify-center items-center md:pr-[41px] md:mr-[40px] md:border-r border-gray-300 mt-15 md:mt-0">
            <span className="font-normal text-[40px] md:text-[60px]">209</span>
            <span>Average House</span>
          </div>
          <div className="w-full md:w-1/4 flex justify-center items-center md:pr-[41px] md:mr-[40px] md:border-r border-gray-300 mt-15 md:mt-0">
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
        <div className="testimonial-content w-full   mx-auto overflow-hidden">
          <TestimonialSlider />
        </div>
      </section>
      <section className="agent-section w-full mb-30 md:px-5">
        <div className="flex justify-center mb-15">
          <div className="w-full max-w-6xl text-center heading-section">
            <span className="sub-heading">AGENTS</span>
            <h2 className="mb-5 text-[40px] font-semibold">Our Agents</h2>
          </div>
        </div>
        <div className="agent-box flex flex-wrap max-w-full md:max-w-305 mx-auto gap-3 ">
          <div className="w-full px-4 md:px-0 md:w-[24%]">
            <div className="img-box">
              <img
                src="https://preview.colorlib.com/theme/uptown/images/team-1.jpg.webp"
                alt=""
              />
            </div>
            <div className="agent-desc w-[80%] bg-white shadow mx-auto mt-[-18%] z-10 relative p-6">
              <h3 className="!font-semibold">James Stallon</h3>
              <p className="flex">
                <span className="text-gray-500">Listing</span>— 10 Properties
              </p>
            </div>
          </div>
          <div className="w-full px-4 md:px-0 md:w-[24%] mb-5 md:mb-0">
            <div className="img-box">
              <img
                src="https://preview.colorlib.com/theme/uptown/images/team-2.jpg.webp"
                alt=""
              />
            </div>
            <div className="agent-desc w-[80%] bg-white shadow mx-auto mt-[-18%] z-10 relative p-6">
              <h3 className="!font-semibold">James Stallon</h3>
              <p className="flex">
                <span className="text-gray-500">Listing</span>— 10 Properties
              </p>
            </div>
          </div>
          <div className="w-full px-4 md:px-0 md:w-[24%] mb-5 md:mb-0">
            <div className="img-box">
              <img
                src="https://preview.colorlib.com/theme/uptown/images/team-3.jpg.webp"
                alt=""
              />
            </div>
            <div className="agent-desc w-[80%] bg-white shadow mx-auto mt-[-18%] z-10 relative p-6">
              <h3 className="!font-semibold">James Stallon</h3>
              <p className="flex">
                <span className="text-gray-500">Listing</span>— 10 Properties
              </p>
            </div>
          </div>
          <div className="w-full px-4 md:px-0 md:w-[24%] mb-5 md:mb-0">
            <div className="img-box">
              <img
                src="https://preview.colorlib.com/theme/uptown/images/team-4.jpg.webp"
                alt=""
              />
            </div>
            <div className="agent-desc w-[80%] bg-white shadow mx-auto mt-[-18%] z-10 relative p-6">
              <h3 className="!font-semibold">James Stallon</h3>
              <p className="flex">
                <span className="text-gray-500">Listing</span>— 10 Properties
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-section">
        <div className="flex justify-center mb-15">
          <div className="w-full md:max-w-6xl text-center heading-section">
            <span className="sub-heading">BLOG</span>
            <h2 className="mb-5 text-[40px] font-semibold">Recent Blog</h2>
          </div>
        </div>
        <div className="flex flex-wrap w-full xl:w-[64%] mx-auto  lg:px-5 xl:px-0 xl:gap-8 gap-5 ">
          <div className="blog-content w-full  md:w-[23%] px-5 md:px-0 ">
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
    </div>
  );
};

export default Home;
