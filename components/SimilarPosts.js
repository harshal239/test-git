import React, { useState, useEffect } from "react";
import { getSimilarPosts } from "../services";
import moment from "moment";
import Link from "next/link";

const CategoryButton = ({ btnText }) => {
  return (
    <button className="leading-3 text-white text-xs rounded-sm badge-bg px-2 py-1">
      {btnText}
    </button>
  );
};

const SimilarPost = ({ post }) => {
  return (
    <a href="" className="bg-white sm-blog-card flex flex-col md:flex-row">
      <div className="w-full">
        <img src={post.coverImage.url} className="object-cover h-full" alt="" />
      </div>
      <div className="md:pr-7 px-6 w-full py-6 md:py-8 flex flex-col">
        <h2 className="text-xl leading-6 font-extrabold">{post.title}</h2>
        <div className="flex gap-2.5 mt-3">
          {post.categories.map((category) => (
            <CategoryButton btnText={category.name} key={category.name} />
          ))}
        </div>
        <div className="mt-4 flex flex-col light_text md:primary-color justify-between">
          <div>
            <p className="md:text-xs text-sm font-extrabold">
              {post.author.name}
            </p>
            <p className="text-xxs leading-3 mt-1">
              {moment(post.publishedAt).format("DD-MM-YYYY")}
            </p>
          </div>
          <Link href={`/blog/${post.slug}`}>
            <img
              src="/images/blueArrow.svg"
              className="w-8 hidden md:block h-8 mt-4 transform rotate-180"
              alt=""
            />
          </Link>
          <div className="md:hidden mt-3">
            <button className="px-6 py-3 primary-border bg-white primary-color whitespace-nowrap font-extrabold rounded-lg text-sm leading-4">
              Read Now
            </button>
            <p className="text-xxs light_text mt-2 ml-4">5 min read</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default function SimilarPosts({ categories, slug }) {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    getSimilarPosts(categories, slug).then((result) => {
      setRelatedPosts(result);
    });
  }, [slug]);

  return (
    <div className="overflow-x-auto flex flex-col md:flex-row gap-6 md:gap-8 s_blog_container">
      {relatedPosts.map((post) => (
        <SimilarPost post={post} key={post.slug} />
      ))}
    </div>
  );
}
