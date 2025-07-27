import React from "react";
import { NavLink } from "react-router-dom";

const ContactUs = () => {
  return (
    <>
      <section
        className="banner-section w-full relative 
                 before:content-[''] before:absolute before:left-0 before:-bottom-[30px] 
                 before:w-1/2 before:h-[70px] before:bg-white before:[transform:skewY(4deg)]
                 after:content-[''] after:absolute after:right-0 after:-bottom-[30px] 
                 after:w-1/2 after:h-[70px] after:bg-white after:[transform:skewY(-4deg)] mb-30"
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
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-pink-500 font-semibold"
                    : "hover:text-pink-400"
                }
              >
                Contact Us
              </NavLink>
            </nav>
            <h1 className="mb-4 text-center">Choose Your Desired Home</h1>
          </div>
        </div>
      </section>
      <section className="contact-section">
        <div className="contact-box">
          <div className="contact-content flex flex-wrap w-full md:w-[40%] mx-auto mb-20">
            <div className="w-full md:w-1/3 text-center mb-10 ">
              <h2 className="!font-bold mb-2">Address</h2>
              <p className="!text-gray-500">
                198 West 21th Street, Suite 721 New York NY 10016
              </p>
            </div>
            <div className="w-full md:w-1/3 md:border-r md:border-l md:ml-10 text-center mb-20">
              <h2 className="!font-bold mb-2">Phone</h2>
              <p className="!text-gray-500">+ 1235 2355 98</p>
            </div>
            <div className=" w-full md:w-1/4 text-center ">
              <h2 className="!font-bold mb-2">Email</h2>
              <p className="!text-gray-500">info@yoursite.com</p>
            </div>
          </div>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center w-full md:w-[50%] mx-auto md:px-50">
            If you got any questions please do not hesitate to send us a message
          </h2>
          <div className="w-full md:w-[40%] mx-auto p-15 bg-gray-100 mt-10 ">
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-400 rounded-sm  "
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-400 rounded-sm  "
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full px-4 py-3 border border-gray-400 rounded-sm  "
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-400 rounded-lg "
                ></textarea>
              </div>
              <button
                type="submit"
                className=" bg-[#e86ed0] rounded-sm text-white p-3  hover:bg-pink-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
