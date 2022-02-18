import { useState, useEffect } from "react";
import { Layout, MailingList, BlogBanner, BlogCard } from "../components";
import { getBlogs } from "../services";

const Blog = ({ blogs }) => {
  const [currentActive, setCurrentActive] = useState("all");
  const [blogPosts, setBlogPosts] = useState(blogs);

  const filterBlogs = blogs.filter((eachVal) => {
    let opt = eachVal.node.categories.some(
      ({ name }) => name === currentActive
    );
    return opt;
  });

  useEffect(() => {
    if (currentActive === "all") {
      setBlogPosts(blogs);
    } else {
      setBlogPosts(filterBlogs);
    }
  }, [currentActive]);

  return (
    <Layout>
      <BlogBanner />
      <div className="dark_gray-bg">
        <div className="px-6 lg:px-12 xl:px-32 blog_container_shadow py-8 lg:py-12 flex flex-col gap-6 md:flex-row lg:gap-20 xl:gap-40 container relative">
          <div className="mx-auto overflow-x-hidden md:overflow-x-visible md:mx-0 relative w-full md:w-auto h-6 md:h-auto flex md:block items-center">
            <div className="absolute md:relative left-1/2 md:left-0 blog_nav_wrapper">
              <div
                className="z-10 md:relative items-center flex gap-8 md:block"
                id="main-header"
              >
                <div
                  className={`blog_section all_tab hidden md:block ml-2.5 ${
                    currentActive === "all" ? "active" : ""
                  }`}
                >
                  <a
                    className="fade-blue leading-4 cursor-pointer text-base process_header block product"
                    onClick={() => setCurrentActive("all")}
                  >
                    All
                  </a>
                </div>
                <div
                  className={`blog_section tech_tab order-1 ml-2.5 ${
                    currentActive === "Technology" ? "active" : ""
                  }`}
                >
                  <a
                    className="fade-blue leading-4 cursor-pointer text-base process_header block design"
                    onClick={() => setCurrentActive("Technology")}
                  >
                    Technology
                  </a>
                </div>
                <div
                  className={`blog_section design_tab order-2 ml-2.5 ${
                    currentActive === "Design" ? "active" : ""
                  } `}
                >
                  <a
                    className="fade-blue leading-4 cursor-pointer text-base process_header architecting"
                    onClick={() => setCurrentActive("Design")}
                  >
                    Design
                  </a>
                </div>
                <div
                  className={`blog_section business_tab order-3 ml-2.5 ${
                    currentActive === "Business" ? "active" : ""
                  }`}
                >
                  <a
                    className="fade-blue leading-4 cursor-pointer text-base process_header development"
                    onClick={() => setCurrentActive("Business")}
                  >
                    Business
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="blog_container blog_shadow flex flex-col gap-3 overflow-y-auto overflow-x-hidden">
            {blogPosts.map((blog, index) => (
              <BlogCard blog={blog.node} key={blog.node.slug} />
            ))}
          </div>
        </div>
      </div>
      <MailingList />
    </Layout>
  );
};

export default Blog;

export async function getStaticProps() {
  const blogs = (await getBlogs()) || [];

  return {
    props: { blogs },
  };
}
