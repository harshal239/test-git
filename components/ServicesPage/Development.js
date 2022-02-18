import { useState } from "react";

export default function Development() {
  const [currentActive, setCurrentActive] = useState(0);

  return (
    <div className="primary-bg">
      <div
        id="development"
        className="px-6 py-12 md:px-12 md:pb-16 container relative"
      >
        <div className="z-10 relative">
          <h2 className="text-2xl sub_header font-extrabold text-white">
            Development
          </h2>
          <hr className="mt-2.5 md:mt-8 w-20 h-1 secondary-bg md:hidden border-none md:w-64 md:h-2" />

          <p className="z-10 text-sm text-white md:text-xl md:w-3/4 xl:w-2/3 mt-8 md:mt-12">
            We are developers both by profession and by heart. All the decisions
            we make benefit our clients and their users. The services we provide
            under the Development section are as follows.
          </p>
        </div>
        <div className="mt-6 md:mt-20 z-10 relative">
          <div
            className="slider1"
            style={{ transform: `translateY(${currentActive * 60}px)` }}
          ></div>
          <div
            className={`service_section3  ml-6 pb-4 :ml-12 ${
              currentActive === 0 ? "active" : ""
            }`}
            onClick={() => setCurrentActive(0)}
          >
            <h4 className="fade-blue font-bold leading-4 cursor-pointer text-sm md:text-base md:leading-5">
              Full Fledge <br />
              Product Development:
            </h4>
            <hr className="mt-2 hidden w-24 h-1 secondary-bg border-none" />
            <div className="mt-6 pb-6 flex items-center service-content">
              <div className="primary-card mr-5 flex items-center justify-center">
                <img
                  className="w-9 h-9 md:w-16 md:h-16"
                  src="/images/setIcon.svg"
                  alt=""
                />
              </div>
              <p className="z-10 text-xs w-3/4 text-white md:text-base md:leading-5 lg:w-1/2">
                Product development refers to the journey of your idea from an
                idea to an actual project. It includes the process of planning,
                designing, manufacturing, and launching your project.
              </p>
              <img
                className="hidden md:block w-8 h-8 ml-7 z-10"
                src="/images/white_arrow.svg"
                alt=""
              />
            </div>
          </div>
          <div
            className={`service_section3  ml-6 pb-4 :ml-12 ${
              currentActive === 1 ? "active" : ""
            }`}
            onClick={() => setCurrentActive(1)}
          >
            <h4 className="fade-blue font-bold leading-4 cursor-pointer text-sm md:text-base md:leading-5">
              Full Stack Development
            </h4>
            <hr className="mt-2 hidden w-24 h-1 secondary-bg border-none" />
            <div className="mt-6 pb-6 flex items-center service-content">
              <div className="primary-card mr-5 flex items-center justify-center">
                <img
                  className="w-9 h-9 md:w-16 md:h-16"
                  src="/images/fullstackIcon.svg"
                  alt=""
                />
              </div>
              <p className="z-10 text-xs w-3/4 text-white md:text-base md:leading-5 xl:w-1/2">
                Full-stack development includes front-end development and
                back-end development of any web/mobile application.
              </p>
              <img
                className="hidden md:block w-8 h-8 ml-7 z-10"
                src="/images/white_arrow.svg"
                alt=""
              />
            </div>
          </div>
          <div
            className={`service_section3  ml-6 pb-4 :ml-12 ${
              currentActive === 2 ? "active" : ""
            }`}
            onClick={() => setCurrentActive(2)}
          >
            <h4 className="fade-blue font-bold leading-4 cursor-pointer text-sm md:text-base md:leading-5">
              Mobile and Web.
            </h4>
            <hr className="mt-2 hidden w-24 h-1 secondary-bg border-none" />
            <div className="mt-6 pb-6 flex items-center service-content">
              <div className="primary-card mr-5 flex items-center justify-center">
                <img
                  className="w-9 h-9 md:w-16 md:h-16"
                  src="/images/whiteMonitor.svg"
                  alt=""
                />
              </div>
              <p className="z-10 text-xs w-3/4 text-white md:text-base md:leading-5 xl:w-1/2">
                We are expert developers of any mobile and web application. Do
                you have a vision, an idea, anything related to an application
                you want running in/for your enterprise? Let us know and then
                sit back. We will deliver it.
              </p>
              <img
                className="hidden md:block w-8 h-8 ml-7 z-10"
                src="/images/white_arrow.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <img
          className="hidden lg:block absolute top-2.5 right-2 z-0"
          src="/images/settingIcon.svg"
          alt=""
        />
      </div>
    </div>
  );
}
