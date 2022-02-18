import { useState, useEffect } from "react";
import { GetInTouch, Layout } from "../components";

const projectsData = [
  {
    title: "Client Name",
    imgSource: "/images/netflix.png",
    category: "Mobile",
  },
  {
    title: "Client Name",
    imgSource: "/images/amazon.png",
    category: "Web",
  },
  {
    title: "Client Name",
    imgSource: "/images/cd.png",
    category: "Web",
  },
  {
    title: "Client Name",
    imgSource: "/images/gd.png",
    category: "Web",
  },
  {
    title: "Client Name",
    imgSource: "/images/netflix.png",
    category: "Web",
  },
  {
    title: "Client Name",
    imgSource: "/images/amazon.png",
    category: "Mobile",
  },
  {
    title: "Client Name",
    imgSource: "/images/cd.png",
    category: "Mobile",
  },
  {
    title: "Client Name",
    imgSource: "/images/gd.png",
    category: "Mobile",
  },
  {
    title: "Client Name",
    imgSource: "/images/netflix.png",
    category: "Mobile",
  },
];

const Project = () => {
  const [currentActive, setCurrentActive] = useState("all");
  const [projects, setProjects] = useState(projectsData);

  const filterHandler = () => {
    switch (currentActive) {
      case "mobile":
        setProjects(
          projectsData?.filter((project) => project.category === "Mobile")
        );
        break;
      case "web":
        setProjects(
          projectsData?.filter((project) => project.category === "Web")
        );
        break;
      default:
        setProjects(projectsData);
        break;
    }
  };
  useEffect(() => {
    filterHandler();
  }, [currentActive]);

  return (
    <Layout active="projects">
      <div className="px-6 py-12 container md:py-16 md:px-12 lg:pb-20">
        <div className="">
          <div>
            <h1 className="lg:w-3/4 font-extrabold header-color cont_header">
              Crafted beautifully and passionately, we present you with Our
              Projects.
            </h1>
            <hr className="mt-2.5 md:mt-7 w-36 h-1 md:w-80 md:h-2 secondary-bg border-none" />
          </div>
          <p className="text-sm md:w-3/4 gray-text md:text-xl mt-8 md:mt-16">
            We aim to deliver world-className products to each of our clients.
            Our track record stated below says it all. We've crafted beautiful
            and industry-fitting products for small and large businesses, and we
            aim to continue to do so for many years to come.
          </p>
        </div>
      </div>
      <div className="primary-bg">
        <div
          className="px-6 container pt-6 md:pt-9 pb-8 md:pb-24 md:px-12"
          id="clients"
        >
          <header>
            <ul className="projects-navlist flex justify-center">
              <li
                className={`cursor-pointer text-lg md:text-xl font-extrabold fade-blue mr-4 md:mr-11 ${
                  currentActive === "all" ? "active" : ""
                }`}
                onClick={() => setCurrentActive("all")}
              >
                All
              </li>
              <li
                className={`cursor-pointer text-lg md:text-xl font-extrabold fade-blue mr-4 md:mr-11 ${
                  currentActive === "mobile" ? "active" : ""
                }`}
                onClick={() => setCurrentActive("mobile")}
              >
                Mobile
              </li>
              <li
                className={`cursor-pointer text-lg md:text-xl font-extrabold fade-blue ${
                  currentActive === "web" ? "active" : ""
                }`}
                onClick={() => setCurrentActive("web")}
              >
                Web
              </li>
            </ul>
          </header>
          <div className="mt-10 md:mt-20 flex flex-wrap gap-x-7 gap-y-10 md:gap-x-16 md:gap-y-32 justify-center projects-container">
            {projects.map((project, index) => (
              <div key={index}>
                <div className="bg-white sm-card-shadow overflow-hidden">
                  <div className="project-card flex items-center justify-center">
                    <img src={project.imgSource} alt="" />
                  </div>
                </div>
                <div className="mt-4 ml-3 md:mt-8 md:ml-6">
                  <p className="text-sm md:text-2xl font-bold text-white">
                    {project.title}
                  </p>
                  <p className="text-xs md:text-sm mt-1 md:mt-2 fade-blue">
                    Client Name-{project.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <GetInTouch variant="home" />
    </Layout>
  );
};

export default Project;
