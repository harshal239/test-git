import Link from "next/link";
import { useState, useEffect } from "react";
import { getFeaturedPost } from "../services";
import moment from "moment";
import Loader from "./Loader";

export default function BlogBanner() {
  const [featuredPost, setFeaturedPost] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getFeaturedPost().then((result) => {
      setFeaturedPost(result);
      setDataLoaded(true);
    });
  }, []);

  if (!dataLoaded) {
    return <Loader />;
  }

  return (
    <div className="container">
      <div className="flex flex-col">
        <div className="blog-banner order-2 md:order-1 px-6 md:px-0 relative">
          <h1 className="md:text-4xl block md:hidden w-full primary-color pb-5 text-base  font-extrabold  leading-4">
            {featuredPost[0]?.title}
          </h1>

          <img
            src={featuredPost[0]?.coverImage.url}
            className="h-full w-full object-center object-cover"
            alt=""
          />
          <div className="blog_banner-content md:px-14 md:py-12 relative md:absolute md:right-12 md:top-12 md:left-12">
            <h1 className="md:text-4xl hidden md:block w-full text-black text-base lg:w-3/5 xl:w-2/5 font-extrabold md:leading-9 md:text-white">
              {featuredPost[0]?.title}
            </h1>
            <div className="mt-3.5 banner_author_sec mb-8 md:mb-0">
              <h3 className="font-extrabold text-sm md:text-base">
                <span className="hidden md:inline">-</span>{" "}
                {featuredPost[0]?.author.name}
              </h3>
              <p className="md:mt-1 mt-px text-xs  md:ml-3">
                {moment(featuredPost[0]?.publishedAt).format("DD-MM-YYYY")}
              </p>
            </div>
            <Link href={`/blog/${featuredPost[0].slug}`}>
              <a className="text-sm leading-4 px-6 py-2.5 mt-6 bg-white primary-color border-none cursor-pointer font-extrabold rounded-lg hidden md:inline-block">
                Read Now
              </a>
            </Link>
          </div>
        </div>
        <div className="mx-6 md:mx-12 py-8 md:my-16 order-1 md:order-2">
          <h1 className="md:w-2/3 w-full font-extrabold header-color cont_header">
            As knowledge increases, Wonder Deepens.
          </h1>
          <hr className="mt-2.5 md:mt-6 w-36 h-1 md:w-64 md:h-2 secondary-bg border-none" />
        </div>
      </div>
    </div>
  );
}
