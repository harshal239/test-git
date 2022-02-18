import React from "react";
import moment from "moment";
import Link from "next/link";

const CategoryButton = ({ btnText }) => {
  return (
    <button className="leading-3 text-white text-xs rounded-sm badge-bg px-2 py-1">
      {btnText}
    </button>
  );
};

export default function BlogCard({ blog }) {
  const { author, title, coverImage, publishedAt, excerpt, slug, categories } =
    blog;
  return (
    <div
      className=" blog bg-white relative flex flex-col md:flex-row"
      data-category="technology"
    >
      <div className="blog_img_container">
        <img
          src={coverImage.url}
          className="blog_img_container object-cover h-48 md:h-56 w-full"
          alt=""
        />
      </div>
      <div className="md:px-8 px-4 py-10 pt-8 pb-6 md:pt-10 md:pb-10 flex-grow flex flex-col ">
        <div className="flex gap-2.5 md:mb-6 mt-8 md:mt-0 mb-2.5 order-2 md:order-1">
          {categories.map((category) => (
            <CategoryButton btnText={category.name} key={category.name} />
          ))}
        </div>
        <h2 className="text-2xl md:text-xl font-extrabold md:leading-6 w-full md:w-4/5 order-1 md:order-2">
          {title}
        </h2>
        <div className="mt-3 flex justify-between order-3">
          <div>
            <p className="text-xs font-extrabold primary-color">
              {author.name}
            </p>
            <p className="text-xxs leading-3 primary-color mt-1">
              {moment(publishedAt).format("DD-MM-YYYY")}
            </p>
          </div>
          <Link href={`/blog/${slug}`}>
            <img
              src="/images/blueArrow.svg"
              className="w-8 h-8 transform rotate-180 cursor-pointer"
              alt=""
            />
          </Link>
        </div>
      </div>
      <div className="blog_detail_disp pl-10 py-12 hidden md:flex justify-between items-center pr-24 absolute h-full w-full top-0 left-0 primary-bg">
        <div className="text-white">
          <h2 className="text-2xl w-3/5  leading-7">{title}</h2>
          <p className="text-xs w-3/4 leading-4 mt-6">{excerpt}</p>
        </div>
        <div className="text-center">
          <Link href={`/blog/${slug}`}>
            <button className="px-6 py-3 bg-white primary-color whitespace-nowrap font-extrabold rounded-lg text-sm leading-4">
              Read Now
            </button>
          </Link>
          <p className="text-xxs text-white mt-3">6 min read</p>
        </div>
      </div>
    </div>
  );
}
