import React, { useState } from "react";
import { GetInTouch, Layout, Accordion } from "../components";
import {
  Solution,
  Development,
  Architecture,
} from "../components/ServicesPage";

const ServiceImage = ({ path, title }) => {
  return (
    <div className="service-card flex flex-col justify-between items-center md:py-4 sm-card-shadow py-2 px-2 text-center">
      <img className="w-7 h-6 md:w-12 md:h-12" src={path} alt="service-image" />
      <p className="xs-card_text">{title}</p>
    </div>
  );
};

const Services = () => {
  return (
    <Layout active="services">
      <div className="px-6 container py-8 md:py-16 md:px-12 lg:pb-20 lg:flex justify-between">
        <div className="lg:w-1/2">
          <div>
            <h1 className="font-extrabold header-color cont_header">
              Providing best-in-class services.
            </h1>
            <hr className="mt-2.5 md:mt-6 w-36 h-1 md:w-64 md:h-2 secondary-bg border-none" />
          </div>
          <p className="text-sm gray-text md:text-xl mt-8 md:mt-12 xl:w-3/4">
            Hybrowlabs wants to help you build sustainable and long-term
            businesses. We offer you a full range of services that you need to
            launch your product under your budget.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-4 max-w-md mx-auto md:max-w-3xl md:gap-6 grid-rows-2 lg:gap-8 xl:ml-auto xl:mr-0 lg:mt-0">
          <ServiceImage
            path="/images/monitor.svg"
            title="Web/ Mobile Develpment"
          />
          <ServiceImage
            path="/images/cloud.svg"
            title="Cloud Transformations"
          />
          <ServiceImage
            path="/images/proto.svg"
            title="Prototype development"
          />
          <ServiceImage
            path="/images/erp.svg"
            title="Custom ERP/CRM Development"
          />
          <ServiceImage
            path="/images/sol.svg"
            title="Software Solutions Architect"
          />
          <ServiceImage
            path="/images/source.svg"
            title="Remote Source Augmentation"
          />
        </div>
      </div>
      <Development />
      <Architecture />
      <Solution />
      <div className="hidden lg:block pt-12 pb-14 px-12">
        <div className="text-center">
          <h3 className="font-extrabold primary-color text-4xl">
            Frequently asked questions
          </h3>
          <p className="text-sm gray-text mt-5">
            We at Hybrowlabs always welcome your queries.
          </p>
        </div>

        <div className="mt-14">
          <Accordion
            title="How can you ensure our idea will be safe with you?"
            content="Non-disclosure clause is a default clause in our contract. Your idea
            and anything else about that idea will stay between us"
          />
          <Accordion
            title="What are some of the most important factors you considered while
                developing products for clients?"
            content="Some of the most important factors we consider while developing
             products for clients are -
             . The market in which the product is to be launched.
             . Competitors of the product.
             . Your vision for your product.
             "
          />
          <Accordion
            title="How do you guide clients in product development when they keep
                changing their minds?"
            content="If our clients change their minds during development, we accept
                it and work around it. We always communicate with our clients.
                We keep asking them the right questions. We keep gathering
                feedback from our clients regularly so that we can adjust your
                product along the way."
          />
          <Accordion
            title="How do you test your final Products before handling them to the
                clients?"
            content="We perform end-to-end testing, smoke testing, unit testing to
              ensure the products we deliver are of the best quality."
          />
          <Accordion
            title="How do you work with clients to create the best product
                possible?"
            content="We communicate with our clients regularly. We take their
            feedback on every step to ensure our product is meeting their
            demands. Then we go the extra mile and work on the problems the
            product may face even after years."
          />
        </div>
      </div>
      <GetInTouch />
    </Layout>
  );
};

export default Services;
