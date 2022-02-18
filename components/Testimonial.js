import React from "react";
import Count from "./Counter";

export default function Testimonial() {
  return (
    <div className="px-6 py-10 primary-bg md:py-16 md:px-12">
      <div className="container md:flex counters_container">
        <div className="md:w-1/2 md:mr-4">
          <h3 className="text-2xl font-extrabold text-white md:max-w-sm sub_header">
            Why Hybrowlabs
          </h3>
          <hr className="mt-2.5 md:mt-9 w-36 h-1 secondary-bg border-none md:w-64 md:h-2" />
          <p className="text-xs text-white mt-6 md:text-lg md:mt-9">
            We at Hybrowlabs understand the journey of building a new product,
            from an idea to launch. We come from a strong background in
            building, scaling, and optimizing projects. We have solved complex
            challenges for our clients. We have a deep understanding of the
            success factors to make your product a hit.
          </p>
        </div>
        <div className="grid items-center grid-cols-2 gap-6 pt-9 justify-items-center max-w-md md:gap-8 lg:gap-12 md:ml-auto">
          <div className="flex w-32 h-16 md:h-40 md:w-40 lg:w-48 px-4 text-white sm-card md:bg-white md:flex-col sm-card-shadow items-center justify-center">
            <h2
              className="text-3xl md:text-5xl font-extrabold counter"
              data-target="48"
            >
              <Count number={48} duration={1} />
            </h2>
            <p className="text-xs pt-2 md:pt-6 md:text-lg pl-1">projects</p>
          </div>
          <div className="flex w-32 h-16 md:h-40 md:w-40 lg:w-48 px-4 text-white sm-card md:bg-white md:flex-col sm-card-shadow items-center justify-center">
            <h2
              className="text-3xl md:text-5xl font-extrabold counter"
              data-target="22"
            >
              <Count number={22} duration={1} />
            </h2>
            <p className="text-xs pt-2 md:pt-6 md:text-lg pl-1">Clients</p>
          </div>
          <div className="flex w-32 h-16 md:h-40 md:w-40 lg:w-48 px-4 text-white sm-card md:bg-white md:flex-col sm-card-shadow items-center justify-center">
            <h2
              className="text-3xl md:text-5xl font-extrabold counter"
              data-target="16"
            >
              <Count number={16} duration={1} />
            </h2>
            <p className="text-xs pt-2 md:pt-6 md:text-lg pl-1">Engineers</p>
          </div>
          <div className="flex flex-col w-32 h-16 md:h-40 md:w-40 lg:w-48 pl-4 pr-3 text-white sm-card md:bg-white md:flex-col sm-card-shadow items-center justify-center">
            <h2
              className="text-3xl md:text-5xl font-extrabold counter"
              data-target="1000"
            >
              <Count number={1000} duration={1} />
            </h2>
            <p className="text-xs p-1 md:pt-6 md:text-lg">Cups of Coffee</p>
          </div>
        </div>
      </div>
    </div>
  );
}
