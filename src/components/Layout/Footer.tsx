import {
  FaFacebookF,
  FaInstagram,
  FaLongArrowAltRight,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="w-full mt-12 py-10 bg-[#fafafa] rounded-xl shadow-lg text-gray-700">
      <div className=" w-full xl:w-[64%] flex flex-wrap justify-center mx-auto px-5 xl:px-0">
        <div className="w-full md:w-1/5 pr-5 px-5 md:px-0 pt-5">
          <h2 className="!font-semibold text-[20px]">Uptown</h2>
          <p className="pt-10 pb-2 text-[12px]">
            Far far away, behind the word mountains, far from the countries.
          </p>
          <div className="social-links flex gap-10 md:gap-10 p-8 text-3xl text-[#e86ed0]">
            <a href="">
              <FaTwitter />
            </a>
            <a href="">
              <FaFacebookF />
            </a>
            <a href="">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/5 px-5 pt-5">
          <h2 className="!font-semibold text-[20px]">Community</h2>
          <ul className="pt-10 leading-8">
            <li className="flex items-center gap-2 ">
              <FaLongArrowAltRight className="text-[#e86ed0]" />

              <a href="#" className="block hover:text-[#e86ed0]">
                Search Properties
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaLongArrowAltRight className="text-[#e86ed0]" />

              <a href="#" className="block hover:text-[#e86ed0]">
                For Agents
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaLongArrowAltRight className="text-[#e86ed0]" />

              <a href="#" className="block hover:text-[#e86ed0]">
                Reviews
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaLongArrowAltRight className="text-[#e86ed0]" />

              <a href="#" className="block hover:text-[#e86ed0]">
                FAQs
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/5 px-5 pt-5">
          <h2 className="!font-semibold text-[20px]">About Us</h2>
          <ul className="pt-10 leading-8">
            <li className="flex items-center gap-2">
              <FaLongArrowAltRight className="text-[#e86ed0]" />

              <a href="#" className="block hover:text-[#e86ed0]">
                Our Story
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaLongArrowAltRight className="text-[#e86ed0]" />

              <a href="#" className="block hover:text-[#e86ed0]">
                Meet the team
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaLongArrowAltRight className="text-[#e86ed0]" />

              <a href="#" className="block hover:text-[#e86ed0]">
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/5 px-5 pt-5">
          <h2 className="!font-semibold text-[20px]">Company</h2>
          <ul className="pt-10 leading-8">
            <li className="flex items-center gap-2">
              <FaLongArrowAltRight className="text-[#e86ed0]" />

              <a href="#" className="block hover:text-[#e86ed0]">
                About Us
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaLongArrowAltRight className="text-[#e86ed0]" />

              <a href="#" className="block hover:text-[#e86ed0]">
                Press
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaLongArrowAltRight className="text-[#e86ed0]" />

              <a href="#" className="block hover:text-[#e86ed0]">
                Contact
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaLongArrowAltRight className="text-[#e86ed0]" />

              <a href="#" className="block hover:text-[#e86ed0]">
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/5 px-5 pt-5">
          <h2 className="!font-semibold text-[20px]">Have a Questions?</h2>
          <ul className="pt-10 leading-8">
            <li className="flex items-center gap-2">
              <IoLocationSharp className="text-[#e86ed0]" />

              <a href="#" className="block hover:text-[#e86ed0]">
                Search Properties
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#e86ed0]" />

              <a href="#" className="block hover:text-[#e86ed0]">
                For Agents
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MdEmail className="text-[#e86ed0]" />

              <a href="#" className="block hover:text-[#e86ed0]">
                Reviews
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-500 text-sm">
        <p>
          &copy; {new Date().getFullYear()} My Website. All rights reserved.
        </p>
        <p className="mt-2">Designed with ❤️ using React & Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
