import { useState } from "react";

export default function Solution() {
  const [currentActive, setCurrentActive] = useState(0);
  return (
    <div className="primary-bg">
      <div
        id="solution"
        className="px-6 py-12 md:px-12 md:pb-16 container relative"
      >
        <div className="z-10 relative">
          <h2 className="text-2xl sub_header font-extrabold text-white">
            Solutions
          </h2>
          <hr className="mt-2.5 md:mt-8 w-20 h-1 secondary-bg md:hidden border-none md:w-64 md:h-2" />

          <p className="z-10 text-sm text-white md:text-xl md:w-3/4 xl:w-2/3 mt-8 md:mt-12">
            We at Hybrowlabs are all about solving your problems. You can expect
            us to deliver creative and impactful solutions to your problems. The
            services included are as follows.
          </p>
        </div>
        <div className="mt-6 md:mt-20 z-10 relative">
          <div
            className="slider3"
            style={{ transform: `translateY(${currentActive * 60}px)` }}
          ></div>
          <div
            className={`service_section3  ml-6 pb-4 :ml-12 ${
              currentActive === 0 ? "active" : ""
            }`}
            onClick={() => setCurrentActive(0)}
          >
            <h4 className="fade-blue font-bold leading-4 cursor-pointer text-sm md:text-base md:leading-5">
              ERP Implementation and <br />
              Customization :
            </h4>
            <hr className="mt-2 hidden w-24 h-1 secondary-bg border-none" />
            <div className="mt-6 pb-6 flex items-center service-content">
              <div className="primary-card mr-5 flex items-center justify-center">
                <img
                  className="w-9 h-9 md:w-16 md:h-16"
                  src="/images/white_erpIcon.svg"
                  alt=""
                />
              </div>
              <p className="z-10 text-xs w-3/4 text-white md:text-base md:leading-5 lg:w-1/2">
                ERP Implementation and Customization Dashboard and Analytics
                solutions Ecommerce Solutions Web and Mobile ready to deploy
                kits for various use cases.
              </p>
              <img
                className="z-10 hidden md:block w-8 h-8 ml-7"
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
              Dashboard and Analytics <br />
              solutions
            </h4>
            <hr className="mt-2 hidden w-24 h-1 secondary-bg border-none" />
            <div className="mt-6 pb-6 flex items-center service-content">
              <div className="primary-card mr-5 flex items-center justify-center">
                <img
                  className="w-9 h-9 md:w-16 md:h-16"
                  src="/images/dashIcon.svg"
                  alt=""
                />
              </div>
              <p className="z-10 text-xs w-3/4 text-white md:text-base md:leading-5 xl:w-1/2">
                Dashboard and Analytics solutions We provide enterprise-grade
                implementations for dashboard and analytics solutions. We focus
                on presenting your data in a way that's easy to understand for
                everyone. We're here to change the way dashboards and analytics
                solutions are implemented across the globe.
              </p>
              <img
                className=" hidden md:block w-8 h-8 ml-7 z-10"
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
              Ecommerce Solutions
            </h4>
            <hr className="mt-2 hidden w-24 h-1 secondary-bg border-none" />
            <div className="mt-6 pb-6 flex items-center service-content">
              <div className="primary-card mr-5 flex items-center justify-center">
                <img
                  className="w-9 h-9 md:w-16 md:h-16"
                  src="/images/ecommIcon.svg"
                  alt=""
                />
              </div>
              <p className="z-10 text-xs w-3/4 text-white md:text-base md:leading-5 xl:w-1/2">
                Ecommerce Solutions We offer solutions for easier online selling
                of your products. We focus on optimizing your business website,
                making it easy to navigate. If you're looking to expand your
                business or improve your current eCommerce business, then we can
                help.
              </p>
              <img
                className=" hidden md:block w-8 h-8 ml-7 z-10"
                src="/images/white_arrow.svg"
                alt=""
              />
            </div>
          </div>
          <div
            className={`service_section3  ml-6 pb-4 :ml-12 ${
              currentActive === 3 ? "active" : ""
            }`}
            onClick={() => setCurrentActive(3)}
          >
            <h4 className="fade-blue font-bold leading-4 cursor-pointer text-sm md:text-base md:leading-5">
              Web and Mobile ready to deploy <br />
              kits for various use cases.
            </h4>
            <hr className="mt-2 hidden w-24 h-1 secondary-bg border-none" />
            <div className="mt-6 pb-6 flex items-center service-content">
              <div className="primary-card mr-5 flex items-center justify-center">
                <img
                  className="w-9 h-9 md:w-16 md:h-16"
                  src="/images/mobilekitIcon.svg"
                  alt=""
                />
              </div>
              <p className="z-10 text-xs w-3/4 text-white md:text-base md:leading-5 xl:w-1/2">
                Web and Mobile ready to deploy kits for various use cases. Our
                web and mobile ready-to-deploy kits are designed to help you
                improve your business. Our company gives you the tools to build
                your ideal enterprise-grade solution.
              </p>
              <img
                className="z-10 hidden md:block w-8 h-8 ml-7"
                src="/images/white_arrow.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <img
          className="hidden lg:block absolute top-2.5 right-2 z-0"
          src="/images/solBg.svg"
          alt=""
        />
      </div>
    </div>
  );
}
