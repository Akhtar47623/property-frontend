import { NavLink } from "react-router-dom";

const Agent = () => {
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
                to="/agent"
                className={({ isActive }) =>
                  isActive
                    ? "text-pink-500 font-semibold"
                    : "hover:text-pink-400"
                }
              >
                Agent
              </NavLink>
            </nav>
            <h1 className="mb-4 text-center">Agent</h1>
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
      <section className="agent-section w-full mb-30 mt-30">
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
    </>
  );
};

export default Agent;
