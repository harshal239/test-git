import Link from "next/link";
import React from "react";

const SocialIcons = ({ path, img_src }) => {
  return (
    <a target="_blank" href={path}>
      <img className="w-6 h-6" src={img_src} alt="social-icon" />
    </a>
  );
};

const FooterLinkSM = ({ path, name }) => {
  return (
    <Link href={`/${path}`}>
      <a className="text-base font-extrabold dark_gray">{name}</a>
    </Link>
  );
};
const FooterLinkLG = ({ path, name }) => {
  return (
    <li>
      <Link href={`/${path}`}>
        <a className="text-xs header header-color mb-3">{name}</a>
      </Link>
    </li>
  );
};

export default function Footer() {
  return (
    <div className="py-6 px-6 gray-bg md:px-12 md:py-8">
      <div className="md:hidden">
        <header className="mb-7">
          <Link href="/">
            <a>
              <img
                className="h-3.5 w-20"
                src="/images/black_logo.svg"
                alt="company-logo"
              />
            </a>
          </Link>
        </header>
        <div className="flex justify-between h-28">
          <div className="flex flex-grow flex-col justify-between">
            <div className="hidden">
              <p className="xs-text gray-text">Privacy Policy</p>
              <p className="xs-text gray-text">FAQ</p>
            </div>
            <div className="flex mt-auto justify-around mob_f_icons">
              <SocialIcons
                path="https://instagram.com/hybrowlabs?utm_medium=copy_link"
                img_src="/images/ig.svg"
              />
              <SocialIcons
                path="https://m.facebook.com/2011473399068945/"
                img_src="/images/fb.svg"
              />
              <SocialIcons
                path="https://www.linkedin.com/company/hybrowlabs-technologies"
                img_src="/images/ln.svg"
              />
            </div>
          </div>
          <div className="border-l gray_border pl-7 flex flex-col justify-between">
            <FooterLinkSM path="services" name="Services" />
            <FooterLinkSM path="about" name="About us" />
            <FooterLinkSM path="processes" name="Process" />
            <FooterLinkSM path="projects" name="Projects" />
          </div>
        </div>
      </div>
      <div className="hidden container md:flex md:justify-between">
        <div className="grow flex flex-col justify-between">
          <a href="#">
            <img className="w-36 h-5" src="/images/black_logo.svg" alt="" />
          </a>
          <div className="hidden">
            <p className="text-sm gray-text">Privacy Policy</p>
            <p className="text-sm gray-text">FAQ</p>
          </div>
        </div>
        <div className="grow-xl flex justify-around lg:mr-8">
          <div>
            <a
              href="./pages/services.html"
              className="text-base font-extrabold gray-text mb-6"
            >
              Services
            </a>
            <ul>
              <FooterLinkLG name="Web/ Mobile Development" />
              <FooterLinkLG name="Software Architecting" />
              <FooterLinkLG name="IT Solutions" />
            </ul>
          </div>
          <div>
            <a
              href="./pages/about.html"
              className="text-base font-extrabold gray-text mb-6"
            >
              About Us
            </a>
            <ul>
              <FooterLinkLG name="Our Story" />
              <FooterLinkLG name="Clients" />
              <FooterLinkLG name="Our Values" />
              <FooterLinkLG name="Employees" />
              <FooterLinkLG name="Career" />
            </ul>
          </div>
          <div>
            <a
              href="./pages/processes.html"
              className="text-base font-extrabold gray-text mb-6"
            >
              Process
            </a>
            <ul>
              <FooterLinkLG name="Research" />
              <FooterLinkLG name="UX Design" />
              <FooterLinkLG name="Architecting" />
              <FooterLinkLG name="Development" />
              <FooterLinkLG name="Quality Assurance" />
            </ul>
          </div>
          <div>
            <a
              href="./pages/projects.html"
              className="text-base font-extrabold gray-text mb-6"
            >
              Projects
            </a>
            <ul>
              <FooterLinkLG name="Clients" />
            </ul>
          </div>
        </div>
        <div className="flex self-end flex-grow justify-between">
          <SocialIcons
            path="https://www.instagram.com/hybrowlabs/"
            img_src="/images/ig.svg"
          />
          <SocialIcons
            path="https://www.facebook.com/hybrowlabs/"
            img_src="/images/fb.svg"
          />
          <SocialIcons
            path="https://www.linkedin.com/company/hybrowlabs-technologies/"
            img_src="/images/ln.svg"
          />
        </div>
      </div>
    </div>
  );
}
