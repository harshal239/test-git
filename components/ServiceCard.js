import React from "react";

export default function ServiceCard() {
  return (
    <div className="grid mb-8 md:mb-12 md:auto-rows-min sm-card-shadow px-6 pt-7 pb-16 md:pb-7 relative sm:max-w-lg md:max-w-5xl sm:mx-auto">
      <div className="md:ml-8 md:mr-16 md:row-start-1 md:row-end-3 self-center md:justify-self-center">
        <img
          className="w-16 sm:w-20 sm:h-16 h-14 md:w-44 md:h-40"
          src="/images/developmentsvgIcon.svg"
          alt=""
        />
      </div>
      <div className="lg:ml-6 self-end pl-2 md:pl-0 md:self-start md:flex">
        <div>
          <h3 className="text-lg header-color font-extrabold md:text-4xl">
            Development
          </h3>
          <hr className="w-20 h-1 primary-bg border-none mt-1.5 md:w-44 md:h-2" />
        </div>
        <a href="./pages/services.html#development">
          <img
            className="w-6 h-6 absolute left-6 bottom-6 md:static md:ml-2.5 md:mt-3 transform rotate-180"
            src="/images/blueArrow.svg"
            alt=""
          />
        </a>
      </div>
      <div className="lg:w-4/5 lg:ml-6 text-xs light_text md:text-base mt-6 col-span-2 md:col-start-2 md:mt-7">
        <p>
          We focus on the quality of the software we deliver. All the decisions
          we make benefit our clients and their users. We prioritize using
          clean, scalable code to enhance the software.
        </p>
        <ul className="mt-5">
          <li className="serv_list relative">
            Full Fledge Product Development
          </li>
          <li className="serv_list relative">Full Stack Development</li>
          <li className="serv_list relative">Mobile and Web.</li>
        </ul>
      </div>
    </div>
  );
}
