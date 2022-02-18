import React from "react";

export default function Services() {
  return (
    <div className="px-6 py-8">
      <header className="text-center">
        <h3 className="header-color sub_header_min font-extrabold md:mt-16">
          Services Offered
        </h3>
        <p className="text-sm gray-text mt-4 md:text-xl md:mt-14 max-w-3xl mx-auto">
          Hybrowlabs wants to help you build sustainable and long-term
          businesses. We offer you a full range of services that you need to
          launch and scale your product.
        </p>
      </header>
      <div className="mt-10">
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
              We focus on the quality of the software we deliver. All the
              decisions we make benefit our clients and their users. We
              prioritize using clean, scalable code to enhance the software.
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
        <div className="grid mb-8 md:mb-12 md:auto-rows-min sm-card-shadow px-6 pt-7 pb-16 md:pb-7 relative sm:max-w-lg md:max-w-5xl sm:mx-auto">
          <div className="md:ml-8 md:mr-16 md:row-start-1 md:row-end-3 md:col-start-2 md:col-end-3 self-center md:justify-self-center">
            <img
              className="w-16 sm:w-20 sm:h-16 h-14 md:w-44 md:h-40"
              src="/images/graph.svg"
              alt=""
            />
          </div>
          <div className="lg:ml-6 self-end pl-2 md:pl-0 md:self-start md:flex">
            <div>
              <h3 className="text-lg header-color font-extrabold md:text-4xl">
                Architecture
              </h3>
              <hr className="w-20 h-1 secondary-bg border-none mt-1.5 md:w-36 md:h-2" />
            </div>
            <a href="./pages/services.html#architecture">
              <img
                className="w-6 h-6 absolute left-6 bottom-6 md:static md:ml-2.5 md:mt-3"
                src="/images/pinkArrow.svg"
                alt=""
              />
            </a>
          </div>
          <div className="lg:w-4/5 lg:ml-6 text-xs light_text md:text-base mt-6 col-span-2 md:col-span-1 md:col-start-1 md:mt-7">
            <p>
              What makes us unique is our vision and understanding. As experts
              in this field, we will help you architect your product so that
              it's future-ready and scalable for millions of people to use
              seamlessly. Our expertise spans all aspects of the Software
              Development Lifecycle.
            </p>
            <ul className="mt-5">
              <li className="serv_list relative">Database Design</li>
              <li className="serv_list relative">Architecture Reviews</li>
              <li className="serv_list relative">Performance Analysis</li>
              <li className="serv_list relative">Cost accounting Road map</li>
            </ul>
          </div>
        </div>
        <div className="grid mb-8 md:mb-12 md:auto-rows-min sm-card-shadow px-6 pt-7 pb-16 md:pb-7 relative sm:max-w-lg md:max-w-5xl sm:mx-auto">
          <div className="md:ml-8 md:mr-16 md:row-start-1 md:row-end-3 self-center md:justify-self-center">
            <img
              className="w-16 sm:w-20 sm:h-16 h-14 md:w-44 md:h-40"
              src="/images/bulb.svg"
              alt=""
            />
          </div>
          <div className="lg:ml-6 self-end pl-2 md:pl-0 md:self-start md:flex">
            <div>
              <h3 className="text-lg header-color font-extrabold md:text-4xl">
                Solutions
              </h3>
              <hr className="w-12 h-1 orange-bg border-none mt-1.5 md:w-28 md:h-2" />
            </div>
            <a href="./pages/services.html#solution">
              <img
                className="w-6 h-6 absolute left-6 bottom-6 md:static md:ml-2.5 md:mt-3"
                src="/images/orangeArrow.svg"
                alt=""
              />
            </a>
          </div>
          <div className="lg:w-4/5 lg:ml-6 text-xs light_text md:text-base mt-6 col-span-2 md:col-start-2 md:mt-7">
            <p>
              We have ready-to-deploy solutions to get your business booming.
              You can expect us to deliver creative and impactful solutions to
              your problems. We can deploy these solutions from day 0 and work
              proactively to ensure you're making the most of them.
            </p>
            <ul className="mt-5">
              <li className="serv_list relative">
                ERP Implementation and Customization
              </li>
              <li className="serv_list relative">
                Dashboard and Analytics solutions
              </li>
              <li className="serv_list relative">Ecommerce Solutions</li>
              <li className="serv_list relative">
                Web and Mobile ready to deploy kits for various use cases.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
