import { useRef, useState } from "react";
import { GetInTouch, Layout } from "../components";

const Processes = () => {
  const [currentActive, setCurrentActive] = useState(0);

  return (
    <Layout active="processes">
      <div className="px-6 container py-8 md:py-16 md:px-12 lg:pb-20 process-banner">
        <div>
          <div>
            <h1 className="md:w-11/12 font-extrabold header-color cont_header">
              Pushing boundaries to craft human centric solution that delivers
              your vision.
            </h1>
            <hr className="mt-2.5 md:mt-6 w-36 h-1 md:w-64 md:h-2 secondary-bg border-none" />
          </div>
          <p className="text-sm md:w-2/3 xl:w-1/2 gray-text md:text-xl mt-8 md:mt-16">
            Hybrowlabs has adopted modern standards of agile product
            development. We offer an agile team of developers to ease a seamless
            advancement. We deliver you a one-stop-shop product development
            experience.
          </p>
          <ul className="mt-8 ml-6 md:hidden">
            <li className="text-base font-extrabold gray-text relative process_section pb-3">
              Product
            </li>
            <li className="text-base font-extrabold gray-text relative process_section pb-3">
              UX Design
            </li>
            <li className="text-base font-extrabold gray-text relative process_section pb-3">
              Architecting
            </li>
            <li className="text-base font-extrabold gray-text relative process_section pb-3">
              Development
            </li>
            <li className="text-base font-extrabold gray-text relative process_section pb-3">
              Quality Assurance
            </li>
          </ul>
          <a className="scroll-arrow" href="#process-container">
            <img
              className="w-10 h-10 md:w-14 md:h-14 mt-8 md:mt-12"
              src="/images/arrow.svg"
              alt=""
            />
          </a>
        </div>
      </div>

      <div className="primary-bg">
        <div
          id="process-container"
          className="px-6 py-12 md:px-12 lg:pr-0 md:pb-16 lg:flex container relative"
        >
          <div className="mt-6 md:mt-20 z-10 relative" id="main-header">
            <div
              className="slider"
              style={{ transform: `translateY(${currentActive * 60}px)` }}
            ></div>
            <div
              className={`service_section ml-6 pb-4 :ml-12 ${
                currentActive === 0 ? "active" : ""
              }`}
              onClick={() => setCurrentActive(0)}
            >
              <a
                className="fade-blue font-bold leading-5 cursor-pointer text-lg md:text-2xl md:leading-6 process_header block product"
                href="#product"
              >
                Product
              </a>
              <hr className="mt-2 hidden md:mt-3.5 w-24 h-1 secondary-bg border-none" />
              <div className="mt-6 sm-card-shadow bg-white process-content overflow-hidden max-w-xs">
                <div className="pro-wrapper relative">
                  <img
                    className="w-full object-cover"
                    src="/images/product-mob.png"
                    alt=""
                  />
                  <div className="linear-bg absolute top-0 left-0 h-full w-full"></div>
                </div>
                <div className="px-5 pt-5">
                  <div className="mb-6">
                    <h3 className="gray-text text-base leading-4 font-extrabold">
                      Research
                    </h3>
                    <p className="process_cont-text header-color mt-3.5">
                      We do a considerable amount of research. We look at the
                      history of the products, their competitors, targeted
                      audience, and market. It helps us to give tailored
                      solutions. Once we gather adequate information, ideation
                      begins.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h3 className="gray-text text-base leading-4 font-extrabold">
                      Ideation
                    </h3>
                    <p className="process_cont-text header-color mt-3.5">
                      Ideation is among the first steps in our process. During
                      The Ideation Phase, we aim to surface as many creative
                      ideas as possible. Then we choose the best ones inspiring
                      new and better designs for your product to implement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`service_section ml-6 pb-4 :ml-12 ${
                currentActive === 1 ? "active" : ""
              }`}
              onClick={() => {
                setCurrentActive(1);
              }}
            >
              <a
                className="fade-blue font-bold leading-5 cursor-pointer text-lg md:text-2xl md:leading-6 process_header block design"
                href="#design"
              >
                UX Design
              </a>

              <hr className="mt-2 md:mt-3.5 w-24 h-1 hidden secondary-bg border-none" />
              <div className="mt-6 sm-card-shadow bg-white process-content md:hidden overflow-hidden max-w-xs">
                <div className="pro-wrapper relative">
                  <img
                    className="w-full object-cover"
                    src="/images/ux design-mob.png"
                    alt=""
                  />
                  <div className="linear-bg absolute top-0 left-0 h-full w-full"></div>
                </div>
                <div className="px-5 pt-5">
                  <div className="mb-6">
                    <h3 className="gray-text text-base leading-4 font-extrabold">
                      Low Fidelity
                    </h3>
                    <p className="process_cont-text header-color mt-3.5">
                      Low fidelity is a stage where the sketching of ideas takes
                      place. We sketch the initial ideas and discuss user
                      experiences.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h3 className="gray-text text-base leading-4 font-extrabold">
                      High Fidelity
                    </h3>
                    <p className="process_cont-text header-color mt-3.5">
                      In high fidelity, implementation of ideas and production
                      of wireframes of sketches takes place. Wireframes and
                      workable models are prepared.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h3 className="gray-text text-base leading-4 font-extrabold">
                      Prototyping
                    </h3>
                    <p className="process_cont-text header-color mt-3.5">
                      The basic framework is already in place. Workable models
                      are refined and tested many times to reflect the final
                      product.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h3 className="gray-text text-base leading-4 font-extrabold">
                      Feedback
                    </h3>
                    <p className="process_cont-text header-color mt-3.5">
                      Feedback is taken from the client on further refining the
                      prototype and convert it into the final product.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`service_section ml-6 pb-4 :ml-12 ${
                currentActive === 2 ? "active" : ""
              }`}
              onClick={() => setCurrentActive(2)}
            >
              <a
                className="fade-blue font-bold leading-5 cursor-pointer text-lg md:text-2xl md:leading-6 process_header architecting"
                href="#architecting"
              >
                Architecting
              </a>
              <hr className="mt-2 md:mt-3.5 w-24 h-1 hidden secondary-bg border-none" />
              <div className="mt-6 sm-card-shadow bg-white process-content md:hidden overflow-hidden max-w-xs">
                <div className="pro-wrapper relative">
                  <img
                    className="w-full object-cover"
                    src="/images/ux design-mob.png"
                    alt=""
                  />
                  <div className="linear-bg absolute top-0 left-0 h-full w-full"></div>
                </div>
                <div className="px-5 pt-5">
                  <div className="mb-6">
                    <h3 className="gray-text text-base leading-4 font-extrabold">
                      Design Microservices
                    </h3>
                    <p className="process_cont-text header-color mt-3.5">
                      A microservice is a small application that operates
                      independently. We focus on simplifying the development and
                      maintenance of your systems with our microservices.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h3 className="gray-text text-base leading-4 font-extrabold">
                      Design Database and Message Queues
                    </h3>
                    <p className="process_cont-text header-color mt-3.5">
                      We design databases to store and edit information about
                      users and products. We also work on message queues. They
                      allow complex interactions between individual components
                      of the software.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h3 className="gray-text text-base leading-4 font-extrabold">
                      Finalize tech stack
                    </h3>
                    <p className="process_cont-text header-color mt-3.5">
                      A Tech Stack is a collection of software that you use to
                      improve or build any application. We provide you a
                      finalized tech stack for your applications to increase
                      traffic, ease site navigation, better brand promotion, and
                      more.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h3 className="gray-text text-base leading-4 font-extrabold">
                      Feedback
                    </h3>
                    <p className="process_cont-text header-color mt-3.5">
                      Feedback is taken from the client on further refining the
                      prototype and convert it into the final product.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`service_section ml-6 pb-4 :ml-12 ${
                currentActive === 3 ? "active" : ""
              }`}
              onClick={() => setCurrentActive(3)}
            >
              <a
                className="fade-blue font-bold leading-5 cursor-pointer text-lg md:text-2xl md:leading-6 process_header development"
                href="#development"
              >
                Development
              </a>
              <hr className="mt-2 md:mt-3.5 w-24 h-1 hidden secondary-bg border-none" />
              <div className="mt-6 sm-card-shadow bg-white process-content md:hidden overflow-hidden max-w-xs">
                <div className="pro-wrapper relative">
                  <img
                    className="w-full object-cover"
                    src="/images/dev-mob.png"
                    alt=""
                  />
                  <div className="linear-bg absolute top-0 left-0 h-full w-full"></div>
                </div>
                <div className="px-5 pt-5">
                  <div className="mb-6">
                    <h3 className="gray-text text-base leading-4 font-extrabold">
                      UI Mockups to Code
                    </h3>
                    <p className="process_cont-text header-color mt-3.5">
                      We convert the given UI design to code. During conversion,
                      we focus on using scalable and clean code. Coding is done
                      keeping every future problem in mind to make UI foolproof.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h3 className="gray-text text-base leading-4 font-extrabold">
                      Implement Microservices
                    </h3>
                    <p className="process_cont-text header-color mt-3.5">
                      While implementing Microservices, we focus on their
                      agility and Response time. We focus on the business
                      objectives of clients and deploy the microservices
                      accordingly.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h3 className="gray-text text-base leading-4 font-extrabold">
                      RESTful/GraphQL APIs
                    </h3>
                    <p className="process_cont-text header-color mt-3.5">
                      RESTful/GraphQL APIs allow structured access of resources
                      to users. We aim to make the interactions between
                      applications while accessing resources more efficient. We
                      base these APIs on well-defined HTTP commands and much
                      more.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h3 className="gray-text text-base leading-4 font-extrabold">
                      Integrate UI and APIs
                    </h3>
                    <p className="process_cont-text header-color mt-3.5">
                      After converting UI design to code, integration of UI and
                      APIs takes place. It delivers a path via which UI and APIs
                      can send and receive information to and fro. We use simple
                      integration techniques to make the process more efficient.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`service_section ml-6 pb-4 :ml-12 ${
                currentActive === 4 ? "active" : ""
              }`}
              onClick={() => setCurrentActive(4)}
            >
              <a
                className="fade-blue font-bold leading-5 cursor-pointer text-lg md:text-2xl md:leading-6 process_header assurance"
                href="#assurance"
              >
                Quality Assurance
              </a>

              <hr className="mt-2 md:mt-3.5 w-24 h-1 hidden secondary-bg border-none" />
              <div className="mt-6 sm-card-shadow bg-white process-content md:hidden overflow-hidden max-w-xs">
                <div className="pro-wrapper relative">
                  <img
                    className="w-full object-cover"
                    src="/images/assurance-mob.png"
                    alt=""
                  />
                  <div className="linear-bg absolute top-0 left-0 h-full w-full"></div>
                </div>
                <div className="px-5 pt-5">
                  <div className="mb-6">
                    <h3 className="gray-text text-base leading-4 font-extrabold">
                      End to End Testing
                    </h3>
                    <p className="process_cont-text header-color mt-3.5">
                      During quality Assurance, end-to-end testing checks and
                      refines every component of the software. Our engineers
                      take ownership of the quality of products shipped.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h3 className="gray-text text-base leading-4 font-extrabold">
                      Unit Testing
                    </h3>
                    <p className="process_cont-text header-color mt-3.5">
                      Unit testing ensures that each unit of code can stand on
                      its own when used correctly. After end-to-end testing,
                      unit testing further refines the product.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h3 className="gray-text text-base leading-4 font-extrabold">
                      Smoke Testing
                    </h3>
                    <p className="process_cont-text header-color mt-3.5">
                      Smoke testing is done on any unit or part of the code to
                      check its stability. We do smoke testing to know where to
                      start and where to work more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="processes-container hidden lg:block lg:pr-12 h-screen overflow-y-scroll overflow-x-hidden flex-grow">
            <div
              id="product"
              className="flex process-card justify-end items-center relative"
            >
              <div className="flex pro-mid-card overflow-hidden z-10">
                <div className="relative">
                  <img
                    className="h-full object-cover"
                    src="/images/pro-desk.png"
                    alt=""
                  />
                  <div className="linear-bg absolute top-0 left-0 h-full w-full"></div>
                </div>
                <div className="w-3/5 py-16">
                  <div className="mb-12 ml-16">
                    <h3 className="process-card-header relative primary-color text-sm leading-4 font-extrabold">
                      Research
                    </h3>

                    <div className="grid process-item justify-around mr-11">
                      <img
                        className="justify-self-center mr-8 self-center"
                        src="/images/researchIcon.svg"
                        alt=""
                      />
                      <p className="gray-text w-11/12 text-xs justify-self-end">
                        We do a considerable amount of research. We look at the
                        history of the products, their competitors, targeted
                        audience, and market. It helps us to give tailored
                        solutions. Once we gather adequate information, ideation
                        begins.
                      </p>
                    </div>
                  </div>
                  <div className="ml-16">
                    <h3 className="process-card-header relative primary-color text-sm leading-4 font-extrabold">
                      Ideation
                    </h3>

                    <div className="grid process-item justify-around mr-11">
                      <img
                        className="justify-self-center mr-8 self-center"
                        src="/images/ideationIcon.svg"
                        alt=""
                      />
                      <p className="gray-text w-11/12 text-xs justify-self-end">
                        Ideation is among the first steps in our process. During
                        The Ideation Phase, we aim to surface as many creative
                        ideas as possible. Then we choose the best ones
                        inspiring new and better designs for your product to
                        implement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="xl-num absolute bottom-0 left-8">1</h1>
              <div className="absolute top-24 left-0">
                <img src="/images/researchText.svg" alt="" />
                <hr className="mt-6 w-screen h-2 secondary-bg border-none" />
              </div>
            </div>
            <div
              id="design"
              className="flex process-card justify-end items-center relative"
            >
              <div className="flex pro-big-card overflow-hidden z-10">
                <div className="w-full py-12 pr-10">
                  <div className="mb-12 ml-16">
                    <h3 className="process-card-header relative primary-color text-sm leading-4 font-extrabold mb-4">
                      Low Fidelity
                    </h3>
                    <div className="grid process-item justify-around">
                      <img
                        className="justify-self-center mr-8 self-center"
                        src="/images/lowFidIcon.svg"
                        alt=""
                      />
                      <p className="gray-text w-11/12 text-xs justify-self-end">
                        Low fidelity is a stage where the sketching of ideas
                        takes place. We sketch the initial ideas and discuss
                        user experiences.
                      </p>
                    </div>
                  </div>
                  <div className="mb-12 ml-16">
                    <h3 className="process-card-header relative primary-color text-sm leading-4 font-extrabold mb-4">
                      High Fidelity
                    </h3>
                    <div className="grid process-item justify-around">
                      <img
                        className="justify-self-center mr-8 self-center"
                        src="/images/highIcon.svg"
                        alt=""
                      />
                      <p className="gray-text w-11/12 text-xs justify-self-end">
                        In high fidelity, implementation of ideas and production
                        of wireframes of sketches takes place. Wireframes and
                        workable models are prepared.
                      </p>
                    </div>
                  </div>
                  <div className="mb-12 ml-16">
                    <h3 className="process-card-header relative primary-color text-sm leading-4 font-extrabold mb-4">
                      Prototyping
                    </h3>
                    <div className="grid process-item justify-around">
                      <img
                        className="justify-self-center mr-8 self-center"
                        src="/images/prototypeIcon.svg"
                        alt=""
                      />
                      <p className="gray-text w-11/12 text-xs justify-self-end">
                        The basic framework is already in place. Workable models
                        are refined and tested many times to reflect the final
                        product.
                      </p>
                    </div>
                  </div>
                  <div className="ml-16">
                    <h3 className="process-card-header relative primary-color text-sm leading-4 font-extrabold mb-4">
                      Feedback
                    </h3>
                    <div className="grid process-item justify-around">
                      <img
                        className="justify-self-center mr-8 self-center"
                        src="/images/feedbackIcon.svg"
                        alt=""
                      />
                      <p className="gray-text w-11/12 text-xs justify-self-end">
                        Feedback is taken from the client on further refining
                        the prototype and convert it into the final product.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative w-2/3">
                  <img
                    className="h-full object-cover"
                    src="/images/ux design-desk.png"
                    alt=""
                  />
                  <div className="linear-bg absolute top-0 left-0 h-full w-full"></div>
                </div>
              </div>
              <h1 className="xl-num absolute bottom-0 left-0">2</h1>
              <div className="absolute top-10 left-0">
                <img src="/images/uxdesignText.svg" alt="" />
                <hr className="mt-6 w-screen h-2 secondary-bg border-none" />
              </div>
            </div>
            <div
              id="architecting"
              className="flex process-card justify-end items-center relative"
            >
              <div className="flex pro-big-card overflow-hidden z-10">
                <div className="relative w-3/5">
                  <img
                    className="h-full w-full object-cover"
                    src="/images/arc-desk.png"
                    alt=""
                  />
                  <div className="linear-bg absolute top-0 left-0 h-full w-full"></div>
                </div>
                <div className="w-full py-12 pr-10">
                  <div className="mb-8 ml-16">
                    <h3 className="process-card-header relative primary-color text-sm leading-4 font-extrabold mb-4">
                      Design Microservices
                    </h3>
                    <div className="grid process-item justify-around">
                      <img
                        className="justify-self-center self-center"
                        src="/images/designMicroIcon.svg"
                        alt=""
                      />
                      <p className="gray-text w-10/12 text-xs justify-self-end">
                        A microservice is a small application that operates
                        independently. We focus on simplifying the development
                        and maintenance of your systems with our microservices.
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 ml-16">
                    <h3 className="process-card-header relative primary-color text-sm leading-4 font-extrabold mb-4">
                      Design Database and <br />
                      Message Queues
                    </h3>
                    <div className="grid process-item justify-around">
                      <img
                        className="justify-self-center self-center"
                        src="/images/dbIcon.svg"
                        alt=""
                      />
                      <p className="gray-text w-10/12 text-xs justify-self-end">
                        In high fidelity, implementation of ideas and production
                        of wireframes of sketches takes place.
                      </p>
                    </div>
                  </div>
                  <div className="ml-16">
                    <h3 className="process-card-header relative primary-color text-sm leading-4 font-extrabold mb-4">
                      Finalize tech stack
                    </h3>
                    <div className="grid process-item justify-around">
                      <img
                        className="justify-self-center self-center"
                        src="/images/protoIcon.svg"
                        alt=""
                      />
                      <p className="gray-text w-10/12 text-xs justify-self-end">
                        A Tech Stack is a collection of software that you use to
                        improve or build any application. We provide you a
                        finalized tech stack for your applications to increase
                        traffic, ease site navigation, better brand promotion,
                        and more.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="xl-num absolute bottom-0 left-0">3</h1>
              <div className="absolute top-6 left-0">
                <img src="/images/arcText.svg" alt="" />
                <hr className="mt-6 w-screen h-2 secondary-bg border-none" />
              </div>
            </div>
            <div
              id="development"
              className="flex process-card justify-end items-center relative"
            >
              <div className="flex pro-big-card overflow-hidden z-10">
                <div className="w-full py-12 pr-10">
                  <div className="mb-8 ml-16">
                    <h3 className="process-card-header relative primary-color text-sm leading-4 font-extrabold mb-4">
                      UI Mockups to Code
                    </h3>
                    <div className="grid process-item justify-around">
                      <img
                        className="justify-self-center self-center"
                        src="/images/ulCodeIcon.svg"
                        alt=""
                      />
                      <p className="gray-text w-11/12 text-xs justify-self-end">
                        We convert the given UI design to code. During
                        conversion, we focus on using scalable and clean code.
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 ml-16">
                    <h3 className="process-card-header relative primary-color text-sm leading-4 font-extrabold mb-4">
                      Implement <br />
                      Microservices
                    </h3>
                    <div className="grid process-item justify-around">
                      <img
                        className="justify-self-center self-center"
                        src="/images/microIcon.svg"
                        alt=""
                      />
                      <p className="gray-text w-11/12 text-xs justify-self-end">
                        While implementing Microservices, we focus on their
                        agility and Response time. We focus on the client’s
                        objectives & deploy the services.
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 ml-16">
                    <h3 className="process-card-header relative primary-color text-sm leading-4 font-extrabold mb-4">
                      RESTful/GraphQL <br />
                      APIs
                    </h3>
                    <div className="grid process-item justify-around">
                      <img
                        className="justify-self-center self-center"
                        src="/images/graphqlIcon.svg"
                        alt=""
                      />
                      <p className="gray-text w-11/12 text-xs justify-self-end">
                        RESTful/GraphQL APIs allow structured access of
                        resources to users. We aim to make the interactions
                        between applications .
                      </p>
                    </div>
                  </div>
                  <div className="ml-16">
                    <h3 className="process-card-header relative primary-color text-sm leading-4 font-extrabold mb-4">
                      Integrate UI and <br />
                      APIs
                    </h3>
                    <div className="grid process-item justify-around">
                      <img
                        className="justify-self-center self-center"
                        src="/images/apiIcon.svg"
                        alt=""
                      />
                      <p className="gray-text w-11/12 text-xs justify-self-end">
                        After converting UI design to code, integration of UI
                        and APIs takes place. It delivers a path via which UI
                        and APIs can send information.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative w-2/3">
                  <img
                    className="h-full object-cover"
                    src="/images/dev-desk.png"
                    alt=""
                  />
                  <div className="linear-bg absolute top-0 left-0 h-full w-full"></div>
                </div>
              </div>
              <h1 className="xl-num absolute bottom-0 left-0">4</h1>
              <div className="absolute top-4 left-0">
                <img src="/images/developmentText.svg" alt="" />
                <hr className="mt-6 w-screen h-2 secondary-bg border-none" />
              </div>
            </div>
            <div
              id="assurance"
              className="flex process-card justify-end items-center relative"
            >
              <div className="flex pro-mid-card overflow-hidden z-10">
                <div className="relative w-3/4">
                  <img
                    className="object-cover w-full"
                    src="/images/assurance-desk.png"
                    alt=""
                  />
                  <div className="linear-bg absolute top-0 left-0 h-full w-full"></div>
                </div>
                <div className="w-full py-12 pr-10">
                  <div className="mb-12 ml-16">
                    <h3 className="process-card-header relative primary-color text-sm leading-4 font-extrabold mb-4">
                      End to End Testing
                    </h3>

                    <div className="grid process-item justify-around mr-11">
                      <img
                        className="justify-self-center self-center"
                        src="/images/endTestIcon.svg"
                        alt=""
                      />
                      <p className="gray-text w-11/12 text-xs justify-self-end">
                        End to End Testing (Emphasize on the fact that
                        engineering takes ownership of quality of product
                        shipped)
                      </p>
                    </div>
                  </div>
                  <div className="mb-12 ml-16">
                    <h3 className="process-card-header relative primary-color text-sm leading-4 font-extrabold mb-4">
                      Unit Testing
                    </h3>

                    <div className="grid process-item justify-around mr-11">
                      <img
                        className="justify-self-center self-center"
                        src="/images/unitTest.svg"
                        alt=""
                      />
                      <p className="gray-text w-11/12 text-xs justify-self-end">
                        Unit testing ensures that each unit of code can stand on
                        its own when used correctly. After end-to-end testing,
                        unit testing further refines the product.
                      </p>
                    </div>
                  </div>
                  <div className="ml-16">
                    <h3 className="process-card-header relative primary-color text-sm leading-4 font-extrabold mb-4">
                      Smoke testing
                    </h3>

                    <div className="grid process-item justify-around mr-11">
                      <img
                        className="justify-self-center self-center"
                        src="/images/smokeIcon.svg"
                        alt=""
                      />
                      <p className="gray-text w-11/12 text-xs justify-self-end">
                        Smoke testing is done on any unit or part of the code to
                        check its stability. We do smoke testing to know where
                        to start and where to work more.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="xl-num absolute bottom-0 left-0">5</h1>
              <div className="absolute top-24 left-0">
                <img src="/images/qualityText.svg" alt="" />
                <hr className="mt-6 w-screen h-2 secondary-bg border-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 pt-8 pb-6 md:pb-20 md:px-12 hidden">
        <div>
          <h3 className="header-color call_header font-extrabold">Our Work</h3>
          <hr className="w-24 h-1 md:w-32 md:h-2 secondary-bg border-none mt-1.5" />
        </div>
        <p className="mt-6 md:max-w-xl md:text-base text-sm call_text">
          Our work is what defines us. Our track record of delivering excellence
          has what made our name in the market.
        </p>
        <div className="mt-6 md:mt-14 sm-card-shadow">
          <div className="call-box overflow-x-scroll px-4 md:py-16 md:px-10 xl:px-16 pt-3.5 pb-4">
            <div className="flex justify-between text-center items-center">
              <div className="text-center w-28 md:w-60 mr-9">
                <div className="w-28 h-28 md:w-60 md:h-40 pink-box work_card rounded-lg"></div>
                <p className="mt-4 md:mt-6 md:w-3/5 mx-auto text-xs md:text-base">
                  Casestudy Name and description
                </p>
              </div>
              <div className="text-center w-28 md:w-60 mr-9">
                <div className="w-28 h-28 md:w-60 md:h-40 yellow-box work_card rounded-lg"></div>
                <p className="mt-4 md:mt-6 md:w-3/5 mx-auto text-xs md:text-base px-1">
                  Casestudy Name and description
                </p>
              </div>
              <div className="text-center w-28 md:w-60 mr-9">
                <div className="w-28 h-28 md:w-60 md:h-40 green-box work_card rounded-lg"></div>
                <p className="mt-4 md:mt-6 md:w-3/5 mx-auto text-xs md:text-base">
                  Casestudy Name and description
                </p>
              </div>
              <div className="text-center w-28 md:w-60 mr-9">
                <div className="w-28 h-28 md:w-60 md:h-40 bg-white work_card rounded-lg"></div>
                <p className="mt-4 md:mt-6 md:w-3/5 mx-auto text-xs md:text-base">
                  Casestudy Name and description
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GetInTouch />
    </Layout>
  );
};

export default Processes;
