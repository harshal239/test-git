import { useState } from "react";

export default function Architecture() {
  const [currentActive, setCurrentActive] = useState(0);
  return (
    <div
      id="architecture"
      className="px-6 py-12 md:px-12 container md:pb-16 bg-white relative"
    >
      <div className="text-right relative z-10">
        <h2 className="text-2xl sub_header font-extrabold header-color">
          Architecture
        </h2>
        <hr className="mt-2.5 md:mt-8 w-20 h-1 secondary-bg md:hidden border-none md:w-64 md:h-2 ml-auto" />

        <p className="text-sm header-color ml-auto md:text-xl md:w-3/4 xl:w-2/3 mt-8 md:mt-12">
          We focus on the quality of the software we deliver. All the decisions
          we make benefit our clients and their users. We prioritize using
          clean, scalable code to enhance the software.
        </p>
      </div>
      <div className="mt-6 md:mt-20 z-10 relative">
        <div
          className="slider2"
          style={{ transform: `translateY(${currentActive * 60}px)` }}
        ></div>
        <div
          className={`service_section2 text-right  mr-6 pb-4 md:mr-12 ${
            currentActive === 0 ? "active" : ""
          }`}
          onClick={() => setCurrentActive(0)}
        >
          <h4 className="dark_gray font-extrabold leading-4 cursor-pointer text-sm md:text-base md:leading-5">
            Database Design
          </h4>
          <hr className="mt-2 hidden ml-auto w-24 h-1 secondary-bg border-none" />
          <div className="mt-6 pb-6 flex justify-end items-center service-content">
            <img
              className="z-10 hidden md:block w-8 h-8 mr-7"
              src="/images/pinkArrow.svg"
              alt=""
            />
            <div className="white-card ml-5 mr-4 flex order-2 items-center justify-center">
              <img
                className="w-9 h-9 md:w-16 md:h-16"
                src="/images/db.svg"
                alt=""
              />
            </div>
            <p className="z-10 text-xs w-3/4 header-color md:text-base md:leading-5 xl:w-1/2 text-left">
              Database design involves setting up the infrastructure of your
              company's elite data system. We identify the purpose of your
              database, then decide how to best structure, organize, and store
              information to optimize performance, usability, manageability,
              etc.
            </p>
          </div>
        </div>
        <div
          className={`service_section2 text-right  mr-6 pb-4 md:mr-12 ${
            currentActive === 1 ? "active" : ""
          }`}
          onClick={() => setCurrentActive(1)}
        >
          <h4 className="dark_gray font-extrabold leading-4 cursor-pointer text-sm md:text-base md:leading-5">
            Architecture Reviews
          </h4>
          <hr className="mt-2 hidden ml-auto w-24 h-1 secondary-bg border-none" />
          <div className="mt-6 pb-6 flex justify-end items-center service-content">
            <img
              className="hidden md:block w-8 h-8 mr-7 z-10"
              src="/images/pinkArrow.svg"
              alt=""
            />
            <div className="white-card ml-5 mr-4 flex order-2 items-center justify-center">
              <img
                className="w-9 h-9 md:w-16 md:h-16"
                src="/images/arc.svg"
                alt=""
              />
            </div>
            <p className="z-10 text-xs w-3/4 header-color md:text-base md:leading-5 xl:w-1/2 text-left">
              We provide architecture reviews to bridge the gap between
              enterprises and technology. We help your developers understand
              your business needs. Keeping your audience in mind, we look at
              your software development to deliver our comments on what should
              be and how.
            </p>
          </div>
        </div>
        <div
          className={`service_section2 text-right  mr-6 pb-4 md:mr-12 ${
            currentActive === 2 ? "active" : ""
          }`}
          onClick={() => setCurrentActive(2)}
        >
          <h4 className="dark_gray font-extrabold leading-4 cursor-pointer text-sm md:text-base md:leading-5">
            Performance Analysis
          </h4>
          <hr className="mt-2 hidden ml-auto w-24 h-1 secondary-bg border-none" />
          <div className="mt-6 pb-6 flex justify-end items-center service-content">
            <img
              className="hidden md:block w-8 h-8 mr-7 z-10"
              src="/images/pinkArrow.svg"
              alt=""
            />
            <div className="white-card ml-5 mr-4 flex order-2 items-center justify-center">
              <img
                className="w-9 h-9 md:w-16 md:h-16"
                src="/images/metro.svg"
                alt=""
              />
            </div>
            <p className="z-10 text-xs w-3/4 header-color md:text-base md:leading-5 xl:w-1/2 text-left">
              Our Software performance analysis aims to assess how well your
              software performs. We focus on the recurring trends, patterns, and
              characteristics of errors. Then we deliver it to you programmers
              to identify areas for improvement, making your code more
              performant.
            </p>
          </div>
        </div>
        <div
          className={`service_section2 text-right mr-6 pb-4 md:mr-12 ${
            currentActive === 3 ? "active" : ""
          }`}
          onClick={() => setCurrentActive(3)}
        >
          <h4 className="dark_gray font-extrabold leading-4 cursor-pointer text-sm md:text-base md:leading-5">
            Cost accounting Road map
          </h4>
          <hr className="mt-2 hidden ml-auto w-24 h-1 secondary-bg border-none" />
          <div className="mt-6 pb-6 flex justify-end items-center service-content">
            <img
              className="hidden md:block w-8 h-8 mr-7 z-10"
              src="/images/pinkArrow.svg"
              alt=""
            />
            <div className="white-card ml-5 mr-4 flex order-2 items-center justify-center">
              <img
                className="w-9 h-9 md:w-16 md:h-16"
                src="/images/cost.svg"
                alt=""
              />
            </div>
            <p className="z-10 text-xs w-3/4 header-color md:text-base md:leading-5 xl:w-1/2 text-left">
              Cost accounting is a management tool. It helps in managing and
              controlling the cost of the product/services sold by the company.
              While developing a roadmap, we record the value of all the
              resources used to produce goods or services. These resources
              include money, time, etc. We architect the roadmap to increase the
              profitability of the company.
            </p>
          </div>
        </div>
      </div>
      <div className="z-0">
        <img
          className="hidden lg:block absolute top-8 left-0 z-0"
          src="/images/arc_backIcon.svg"
          alt=""
        />
      </div>
    </div>
  );
}
