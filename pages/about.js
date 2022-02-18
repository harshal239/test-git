import Link from "next/link";
import React from "react";
import { Layout, GetInTouch } from "../components";

const About = () => {
  return (
    <Layout active="about">
      <div className="container px-6 py-8 md:py-16 md:px-12 lg:flex justify-around">
        <div className="lg:w-1/2">
          <div>
            <h1 className="font-extrabold header-color cont_header">
              Technology for a better tomorrow.
            </h1>
            <hr
              className="
                mt-2.5
                md:mt-9
                w-36
                h-1
                md:w-64 md:h-2
                secondary-bg
                border-none
              "
            />
          </div>
          <p className="text-sm gray-text md:text-xl mt-8 md:mt-16">
            Hybrowlabs Technologies provide services to develop and build
            quality digital products for clients. Our team contains skilled and
            passionate developers. We are forever determined to strive to meet
            client's expectations.
          </p>
          <div
            className="
              mt-8
              lg:mt-20
              flex
              justify-between
              items-center
              max-w-sm
              md:max-w-2xl
              mx-auto
              md:mx-auto
            "
          >
            <div className="text-center md:flex md:flex-col md:justify-center">
              <h2 className="header-color cont_header font-extrabold">16</h2>
              <p className="text-xs pt-2 md:pt-3 md:text-lg">Engineers</p>
            </div>
            <hr className="w-px h-12 brake-line md:h-40 border-none secondary-bg" />
            <div className="text-center md:flex md:flex-col md:justify-center">
              <h2 className="header-color cont_header font-extrabold">02</h2>
              <p className="text-xs pt-2 md:pt-3 md:text-lg">Locations</p>
            </div>
            <hr className="w-px h-12 brake-line md:h-40 border-none secondary-bg" />
            <div className="text-center md:flex md:flex-col md:justify-center">
              <h2 className="header-color cont_header font-extrabold">05</h2>
              <p className="text-xs pt-2 md:pt-3 md:text-lg">Years</p>
            </div>
            <hr className="w-px h-12 brake-line md:h-40 border-none secondary-bg" />
            <div className="text-center md:flex md:flex-col md:justify-center">
              <h2 className="header-color cont_header font-extrabold">12</h2>
              <p className="text-xs pt-2 md:pt-3 md:text-lg">Awards</p>
            </div>
          </div>
        </div>
        <div className="mt-8 lg:flex justify-end">
          <img
            className="
              w-80
              h-96
              mx-auto
              lg:mx-0 lg:w-11/12
              md:w-4/5
              object-cover
              xl:w-full
              abt-img
            "
            src="/images/Pexels Photo by nappy.png"
            alt=""
          />
        </div>
      </div>
      <div className="primary-bg">
        <div
          id="ourstory"
          className="
            px-6
            py-8
            md:pt-11 md:pb-20
            container
            md:flex md:justify-between
          "
        >
          <div className="hidden md:flex justify-center mx-auto">
            <img src="/images/story.svg" alt="" />
          </div>
          <div className="lg:w-1/2">
            <div className="flex items-center">
              <div>
                <h2 className="text-2xl sub_header font-extrabold text-white">
                  Our Story
                </h2>
                <hr
                  className="
                    mt-2.5
                    md:mt-9
                    w-20
                    h-1
                    secondary-bg
                    border-none
                    md:w-64 md:h-2
                  "
                />
              </div>
              <img
                className="w-5 h-5 ml-2.5 md:ml-16 md:w-auto md:h-auto"
                src="/images/white_arrow.svg"
                alt=""
              />
            </div>
            <div></div>
            <p className="mt-36 lg:w-11/12 md:mt-9 text-sm text-white md:text-xl">
              We started our journey in 2016 with a simple mission to build
              great software. We convert your ideas into smooth web and mobile
              experiences. Enterprises and startups alike trust us to create
              customer-winning software. You may be in any vertical we will sit
              with you and understand your needs. We will ideate, research, and
              come up with software that delights your customers.
            </p>
          </div>
        </div>
      </div>
      <div className="px-6 py-8" id="values">
        <header className="text-center">
          <h3 className="header-color sub_header_min font-extrabold md:mt-16">
            United by Our Values
          </h3>
          <p className="text-sm gray-text mt-4 md:text-xl md:mt-14 max-w-4xl mx-auto">
            We're a group of like-minded individuals who share a set of values
            and beliefs. United by our four core values, we stand together as a
            united tribe. Our four core values are integrity, passion,
            ownership, and innovation.
          </p>
        </header>
      </div>
      <div
        className="
          px-6
          md:py-16
          lg:grid
          grid-cols-2 grid-rows-2
          gap-5
          max-w-6xl
          md:mx-auto
        "
      >
        <div
          className="
            grid
            content-center
            overflow-visible
            mb-8
            lg:mb-0
            max-w-md
            md:auto-rows-min
            sm-card-shadow
            px-6
            pt-7
            pb-8
            md:pb-7 md:max-w-2xl
            mx-auto
          "
        >
          <div
            className="
              md:ml-8 md:mr-16 md:row-start-1 md:row-end-3
              self-center
              md:justify-self-center
            "
          >
            <img
              className="w-16 sm:w-20 sm:h-16 h-14 md:w-auto md:h-auto"
              src="/images/integrity.svg"
              alt=""
            />
          </div>
          <div className="self-end pl-2 md:pl-0 md:self-start md:flex">
            <div>
              <h3 className="text-lg header-color font-extrabold md:text-4xl">
                Integrity
              </h3>
              <hr className="w-16 h-1 orange-bg border-none mt-1.5 md:w-28 md:h-2" />
            </div>
          </div>
          <div
            className="
              text-sm
              md:text-base
              mt-3
              col-span-2
              md:col-start-2 md:mt-5
              header-color
            "
          >
            <p>
              Our work itself reflects on integrity. We at Hybrowlabs make sure
              everything we do is as transparent and genuine as possible to our
              clients. We have a strict set of moral principles to follow.
            </p>
          </div>
        </div>
        <div
          className="
            grid
            content-center
            mb-8
            lg:mb-0
            max-w-md
            md:auto-rows-min
            sm-card-shadow
            px-6
            pt-7
            pb-8
            md:pb-7 md:max-w-2xl
            mx-auto
          "
        >
          <div
            className="
              md:ml-8 md:mr-16 md:row-start-1 md:row-end-3
              self-center
              md:justify-self-center
            "
          >
            <img
              className="w-16 sm:w-20 sm:h-16 h-14 md:w-auto md:h-auto"
              src="/images/passion.svg"
              alt=""
            />
          </div>
          <div className="self-end pl-2 md:pl-0 md:self-start md:flex">
            <div>
              <h3 className="text-lg header-color font-extrabold md:text-4xl">
                Passion
              </h3>
              <hr className="w-11 h-1 secondary-bg border-none mt-1.5 md:w-20 md:h-2" />
            </div>
          </div>
          <div
            className="
              text-sm
              md:text-base
              mt-3
              col-span-2
              md:col-start-2 md:mt-5
              header-color
            "
          >
            <p>
              We at Hybrowlabs are a team of passionate developers. Passion is
              what we seek in every employee. We are the people who want to
              build something they can be proud of and love what they do.
            </p>
          </div>
        </div>
        <div
          className="
            grid
            content-center
            mb-8
            lg:mb-0
            max-w-md
            md:auto-rows-min
            sm-card-shadow
            px-6
            pt-7
            pb-8
            md:pb-7 md:max-w-2xl
            mx-auto
          "
        >
          <div
            className="
              md:ml-8 md:mr-16 md:row-start-1 md:row-end-3
              self-center
              md:justify-self-center
            "
          >
            <img
              className="w-16 sm:w-20 sm:h-16 h-14 md:w-auto md:h-auto"
              src="/images/owner.svg"
              alt=""
            />
          </div>
          <div className="self-end pl-2 md:pl-0 md:self-start md:flex">
            <div>
              <h3 className="text-lg header-color font-extrabold md:text-4xl">
                Ownership
              </h3>
              <hr className="w-20 h-1 primary-bg border-none mt-1.5 md:w-28 md:h-2" />
            </div>
          </div>
          <div
            className="
              text-sm
              md:text-base
              mt-3
              col-span-2
              md:col-start-2 md:mt-5
              header-color
            "
          >
            <p>
              We take ownership of every project, making us accountable for
              every detail about it. It motivates us to deliver the best of the
              best.
            </p>
          </div>
        </div>
        <div
          className="
            grid
            content-center
            mb-8
            lg:mb-0
            max-w-md
            md:auto-rows-min
            sm-card-shadow
            px-6
            pt-7
            pb-8
            md:pb-7 md:max-w-2xl
            mx-auto
          "
        >
          <div
            className="
              md:ml-8 md:mr-16 md:row-start-1 md:row-end-3
              self-center
              md:justify-self-center
            "
          >
            <img
              className="w-16 sm:w-20 sm:h-16 h-14 md:w-auto md:h-auto"
              src="/images/inno.svg"
              alt=""
            />
          </div>
          <div className="self-end pl-2 md:pl-0 md:self-start md:flex">
            <div>
              <h3 className="text-lg header-color font-extrabold md:text-4xl">
                Innovation
              </h3>
              <hr className="w-16 h-1 yellow-bg border-none mt-1.5 md:w-32 md:h-2" />
            </div>
          </div>
          <div
            className="
              text-sm
              md:text-base
              mt-3
              col-span-2
              md:col-start-2 md:mt-5
              header-color
            "
          >
            <p>
              Our developers and employees are also innovators in their field.
              We keep innovating new things daily to keep us up to date and
              stand alone in the market.
            </p>
          </div>
        </div>
      </div>
      <div
        id="clients"
        className="
          px-6
          py-6
          md:py-12
          gradient-bg
          z-0
          flex
          items-start
          justify-between
          h-28
          md:h-72
          hidden
        "
      >
        <div>
          <h3 className="text-white call_header font-extrabold">Our Clients</h3>
          <hr className="w-24 h-1 md:w-32 md:h-2 bg-white border-none mt-1.5" />
        </div>
        <a
          href="./projects.html#clients"
          className="
            text-sm
            leading-3
            font-extrabold
            text-white
            md:text-xl md:pt-3 md:px-9 md:pb-3
            border
            md:rounded-full
            border-white
            pt-2.5
            pb-3
            px-3
            rounded-2xl
          "
        >
          Know More
        </a>
      </div>
      <div className="px-6 h-20 md:h-44 hidden">
        <div
          className="
            transform
            -translate-y-1/4
            md:-translate-y-1/2
            bg-white
            z-10
            sm-card-shadow
          "
        >
          <div
            className="
              call-box
              overflow-x-scroll
              px-4
              md:py-16 md:px-10
              xl:px-16
              pt-3.5
              pb-4
            "
          >
            <div
              className="
                flex
                justify-between
                lg:justify-around
                whitespace-nowrap
                items-center
              "
            >
              <img
                className="mr-4 w-14 md:w-auto"
                src="../img/netflix.png"
                alt=""
              />
              <img
                className="mr-4 w-14 md:w-auto"
                src="../img/amazon.png"
                alt=""
              />
              <img className="mr-4 w-16 md:w-auto" src="../img/cd.png" alt="" />
              <img className="mr-4 w-11 md:w-auto" src="../img/gd.png" alt="" />
              <img
                className="mr-4 w-12 md:w-auto"
                src="../img/spotify.png"
                alt=""
              />
              <img
                className="mr-4 w-14 md:w-auto"
                src="../img/netflix.png"
                alt=""
              />
              <img
                className="mr-4 w-12 md:w-auto"
                src="../img/spotify.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pb-8 md:pb-0 primary-bg hidden" id="employees">
        <header className="pt-6 md:pt-10">
          <p className="pl-8 text-sm pb-5 md:text-xl md:pl-12 text-white">
            Meet Us.Join Us
          </p>
          <hr className="w-full h-px bg-white" />
        </header>
        <div className="px-8 mt-6 md:mt-10 overflow-x-hidden">
          <div className="flex justify-between">
            <img
              className="transform rotate-180 w-5 h-5 md:w-9 md:h-9 swiper-prev"
              src="../img//white_arrow.svg"
              alt=""
            />
            <img
              className="w-5 h-5 md:w-9 md:h-9 lg:hidden swiper-next sm-next"
              src="../img//white_arrow.svg"
              alt=""
            />
          </div>
          <div
            className="
              mt-8
              flex
              md:pb-12
              max-w-md
              mx-auto
              relative
              md:max-w-full md:mx-0 md:flex-nowrap
            "
          >
            <div
              className="
                md:self-center md:mt-48 md:static md:w-1/2
                min-w-content
                lg:w-1/3
                z-10
              "
            >
              <div className="md:absolute left-0 top-0">
                <h1
                  className="
                    emp-name
                    text-white
                    font-extrabold
                    max-w-xs
                    lg:max-w-lg
                    main-employee-name
                  "
                ></h1>
                <hr
                  className="
                    h-0.5
                    border-none
                    mt-2
                    md:mt-3
                    lg:mt-5
                    w-24
                    md:w-48 md:h-2
                    secondary-bg
                  "
                />
              </div>
              <p
                className="
                  text-xs
                  w-full
                  text-white
                  md:text-base
                  main-employee-desc
                "
              ></p>
              <a
                href="./employee_detail.html"
                className="
                  text-xs text-white
                  leading-3
                  border border-white
                  md:leading-5 md:mt-16
                  px-4
                  pt-2
                  pb-2.5
                  md:px-9 md:mt-4 md:mb-5
                  cursor-pointer
                  mt-6
                  rounded-full
                  inline-block
                "
              >
                Know More
              </a>
            </div>
            <div
              className="
                flex
                md:justify-end
                justify-self-end
                items-center
                md:mb-20
                lg:mb-16 lg:ml-11 lg:transform lg:translate-x-8
                ml-auto
                w-full
                carousel-container
                justify-between
              "
            >
              <div
                className="
                  big-slide-container
                  swiper-container
                  partner_card
                  overflow-hidden
                  ml-auto
                  transform
                  -translate-x-10
                  md:transform-none
                "
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <img
                      className="w-full h-full md:mr-4 xl:mr-6"
                      src="../img/emp.png"
                      alt=""
                    />
                  </div>
                  <div className="swiper-slide bg-white h-full">
                    <img
                      className="w-full h-full md:mr-4 xl:mr-6"
                      src="../img/emp2.png"
                      alt=""
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      className="w-full h-full md:mr-4 xl:mr-6"
                      src="../img/partner.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <img
                className="
                  lg:mr-4
                  xl:mr-16
                  hidden
                  lg:block
                  swiper-next
                  ml-9
                  middle-next
                "
                src="../img/white_arrow.svg"
                alt=""
              />

              <div
                className="
                  relative
                  mr-14
                  md:transform md:translate-x-12
                  xl:transform-none
                  middle-slider
                "
              >
                <p
                  className="
                    text-white text-base
                    transform
                    -rotate-90
                    absolute
                    bottom-1/4
                    hidden
                    lg:block
                    -left-20
                    z-10
                    sec-slide-text
                  "
                >
                  Employees Name
                </p>
                <div
                  className="
                    relative
                    sm-slide-container
                    swiper-container
                    partner_card
                    overflow-hidden
                  "
                >
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <img
                        className="w-full h-full md:mr-4 xl:mr-6"
                        src="../img/emp.png"
                        alt=""
                      />
                    </div>
                    <div className="swiper-slide">
                      <img
                        className="w-full h-full md:mr-4 xl:mr-6"
                        src="../img/emp2.png"
                        alt=""
                      />
                    </div>
                    <div className="swiper-slide">
                      <img
                        className="w-full h-full md:mr-4 xl:mr-6"
                        src="../img/partner.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <p
                  className="
                    text-white text-base
                    transform
                    -rotate-90
                    absolute
                    bottom-1/4
                    hidden
                    xl:block
                    -left-20
                    z-10
                    third-slide-text
                  "
                >
                  Employees Name
                </p>
                <div
                  className="
                    relative
                    sm-slide-container
                    swiper-container
                    partner_card
                    overflow-hidden
                  "
                >
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <img
                        className="w-full h-full md:mr-4 xl:mr-6"
                        src="../img/emp.png"
                        alt=""
                      />
                    </div>
                    <div className="swiper-slide">
                      <img
                        className="w-full h-full md:mr-4 xl:mr-6"
                        src="../img/emp2.png"
                        alt=""
                      />
                    </div>
                    <div className="swiper-slide">
                      <img
                        className="w-full h-full md:mr-4 xl:mr-6"
                        src="../img/partner.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="
          px-6
          container
          pt-16
          pb-8
          md:pb-0 md:px-0 md:grid
          grid-cols-2 grid-rows-2
        "
        id="career"
      >
        <div className="pt-8 pl-0 lg:pt-16 md:pl-8 lg:pl-12">
          <h2 className="big-header gray-text font-extrabold">
            We Create.
            <br />
            We Innovate.
          </h2>
          <div className="md:flex items-center md:mt-3">
            <hr
              className="
                hidden
                lg:block
                h-20
                w-1.5
                border-none
                secondary-bg
                mr-2
                xl:mr-3
              "
            />
            <h1 className="outline-text md:">VISIONARIES</h1>
          </div>
        </div>
        <div className="overflow-hidden">
          <div
            className="
              career-bg
              lg:transform lg:hover:scale-110
              transition-transform
              duration-500
              mt-8
              md:mt-0
              h-44
              md:h-96
              flex
              items-center
              justify-center
            "
          >
            <a
              href="./career.html"
              className="
                career-btn
                font-extrabold
                md:hidden
                text-xl
                leading-5
                pt-2
                px-8
                pb-2.5
                text-white
                inline-block
              "
            >
              Careers
            </a>
          </div>
        </div>
        <div className="overflow-hidden">
          <div
            className="
              career2-bg
              lg:transform lg:hover:scale-110
              transition-transform
              duration-500
              md:block
              hidden
              h-44
              md:h-96
              flex
              items-center
              justify-center
            "
          ></div>
        </div>
        <div
          className="
            hidden
            md:block
            text-center
            h-full
            md:flex
            flex-col
            items-center
            justify-around
            px-3
          "
        >
          <h2 className="cont_header header-color font-extrabold">
            We are, <br />
            <span className="primary-color">H</span>ybrowlabs.
          </h2>
          <Link href="/career">
            <a className="font-extrabold primary-color text-xl leading-5 px-12 pt-4 pb-4 primary-border rounded-full">
              Careers
            </a>
          </Link>
        </div>
      </div>
      <GetInTouch />
    </Layout>
  );
};

export default About;
