import Link from "next/link";
import { useState } from "react";

export const NavItem = ({ path, name, variant, active }) => {
  return (
    <li className={`pb-2.5 md:py-0 relative  ${active ? "active" : ""}`}>
      <Link href={`/${path}`}>
        <a
          className={`font-extrabold text-base md:text-xl ${
            variant === "home" ? "text-white" : "primary-color"
          } hover:text-gray-200`}
        >
          {name}
        </a>
      </Link>
    </li>
  );
};

const NavLinkV1 = ({ path, name }) => {
  return (
    <li>
      <Link href={`/${path}`}>
        <a className="font-extrabold primary-color nav-text mb-7 md:mb-11 block">
          {name}
        </a>
      </Link>
    </li>
  );
};

const NavLinkV2 = ({ path, name }) => {
  return (
    <li>
      <Link href={`/${path}`}>
        <a className="text-sm font-bold md:text-xl primary-color mb-4 md:mb-5 block">
          {name}
        </a>
      </Link>
    </li>
  );
};

export default function Header({ logoColor, variant, active }) {
  const [open, setOpen] = useState(false);
  const BlackLogo = "/images/black_logo.svg";
  const WhiteLogo = "/images/logo.svg";
  return (
    <>
      <header className="px-4 md:px-8  border-b">
        <nav className="flex justify-between items-center flex-wrap">
          <div className="logo flex-grow">
            <Link href="/">
              <a>
                <img
                  className="w-32 h-6"
                  src={logoColor === "white" ? WhiteLogo : BlackLogo}
                  alt=""
                />
              </a>
            </Link>
          </div>
          <ul className="md:flex flex-grow justify-between items-center hidden w-full md:w-auto nav-items">
            <NavItem
              path="about"
              name="About Us"
              variant={variant}
              active={active === "about" ? active : ""}
            />
            <NavItem
              path="processes"
              name="Our Process"
              variant={variant}
              active={active === "processes" ? active : ""}
            />
            <NavItem
              path="services"
              name="Services"
              variant={variant}
              active={active === "services" ? active : ""}
            />
            <NavItem
              path="projects"
              name="Projects"
              variant={variant}
              active={active === "projects" ? active : ""}
            />
          </ul>
          <div
            className="ml-16 burger cursor-pointer py-5"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <img
              className={`cursor-pointer line1 ${
                open ? "rotate-[50deg] translate-y-[75%]" : ""
              } `}
              src="/images/blueLine.svg"
              alt="ham-menu"
            />
            <img
              className={`pt-0.5 line2 ${
                open ? "rotate-[-50deg] translate-y-[-75%]" : ""
              }`}
              src="/images/blueLine.svg"
              alt="ham-menu"
            />
          </div>
        </nav>
      </header>
      <div className={`gray-bg navbar ${open ? "active" : ""}`}>
        <div className="navbar-wrapper">
          <ul className="px-6 pb-10 relative pt-16 mb-1 md:my-20 md:px-12">
            <NavLinkV1 path="about" name="About Us" />
            <NavLinkV1 path="processes" name="Our Process" />
            <NavLinkV1 path="services" name="Services" />
            <NavLinkV1 path="projects" name="Projects" />

            <div className="absolute bottom-10 right-6 justify-center md:pb-8 hidden">
              <p className="primary-color xs-text mr-6">FAQ</p>
              <p className="primary-color xs-text">Privacy Policy</p>
            </div>
          </ul>
          <hr className="w-full h-px primary-bg" />
          <div className="px-6 pb-6 md:px-12 pt-10 h-80 md:h-72 flex flex-col md:flex-row md:items-center justify-between">
            <ul>
              <NavLinkV2 path="career" name="Careers" />
              <NavLinkV2 path="blog" name="Blogs" />
            </ul>
            <div className="text-center md:text-right">
              <p className="text-sm mb-6 md:text-2xl font-bold md:leading-7 primary-color md:mb-68">
                Let's Create <br className="hidden md:block" />
                solutions together!
              </p>
              <Link href="/contact">
                <a className="text-sm md:text-xl md:px-11 md:pt-5 md:pb-6 md:leading-6 primary-color px-7 pt-3.5 pb-4 leading-4 primary-border rounded-2xl inline-block">
                  Get In touch
                </a>
              </Link>
            </div>
          </div>
          <div className="hidden justify-center md:pb-8">
            <p className="primary-color xs-text mr-6">FAQ</p>
            <p className="primary-color xs-text">Privacy Policy</p>
          </div>
        </div>
      </div>
    </>
  );
}
