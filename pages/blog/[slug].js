import Link from "next/link";
import React from "react";
import { Layout, SimilarPosts } from "../../components";
import { getBlogs, getBlogDetails } from "../../services";
import moment from "moment";

export default function Blog({ blog }) {
  const {
    title,
    author,
    excerpt,
    coverImage,
    content,
    publishedAt,
    categories,
    slug,
  } = blog;
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <Layout>
      <div className="py-6 md:h-20 px-6 md:px-12 nav_detail_text flex items-center md:gap-4">
        <Link href="/blog">
          <a className="gray-text">Blog</a>
        </Link>
        <span className="gray-text">/</span>
        <span className="primary-color blog_subnav">{categories[0].name}</span>
      </div>
      <div className="blog-banner px-6 md:px-0 blog_detail_page flex flex-col md:flex-row">
        <div className="relative w-11/12 blog_desc_wrapper">
          <div className="pb-8 md:mb-0 md:pl-24 md:pb-12 md:pt-16">
            <h1 className="md:text-4xl blog_header lg:w-4/5 blog_detail_header font-extrabold leading-9">
              {title}
            </h1>
            <p className="text-sm leading-5 hidden md:block dark_gray-text mt-10 lg:w-4/5">
              {excerpt}
            </p>
          </div>
        </div>
        <div className="w-full">
          <img
            src={coverImage.url}
            className="h-full w-full object-center object-cover"
            alt=""
          />
        </div>
      </div>

      <div className="blog_detail_container">
        <div className="md:py-14 px-6 py-6 lg:px-40 detail_body">
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <img
                src={author.picture.url}
                className="w-12 h-12 rounded-full hidden md:inline-block object-cover"
                alt=""
              />
              <div>
                <h3 className="font-extrabold text-sm md:text-base leading-4 primary-color">
                  {author.name}
                </h3>
                <p className="mt-1 blog_date dark_gray-text">
                  {moment(publishedAt).format("DD-MM-YYYY")}
                </p>
              </div>
            </div>
            {/* <div className="flex gap-4">
              <img src="/images/fb-blue.svg" alt="" />
              <img src="/images/ig-blue.svg" alt="" />
              <img src="/images/ln-blue.svg" alt="" />
            </div> */}
          </div>
          <div className="mt-8 bg-white md:px-28 md:py-16">
            {content.raw.children.map((typeObj, index) => {
              const children = typeObj.children.map((item, itemindex) =>
                getContentFragment(itemindex, item.text, item)
              );

              return getContentFragment(index, children, typeObj, typeObj.type);
            })}
          </div>
        </div>
        <div className="pt-11 px-6 md:pr-0 md:pl-12 pb-12 detail_footer">
          <div className="lg:pr-40 md:pr-8 pb-10 flex justify-between items-center">
            <div>
              <h3 className="text-white similar_blog_header font-extrabold">
                Similar readings
              </h3>
              <hr className="h-1 w-48 md:h-2 secondary-bg border-none mt-1.5" />
            </div>
            <button className="px-2.5 hidden md:block py-2.5 primary-color rounded-lg primary-border text-xs">
              View more
            </button>
          </div>
          <SimilarPosts
            slug={slug}
            categories={categories.map((category) => category.slug)}
          />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const data = await getBlogDetails(params.slug);
  return {
    props: {
      blog: data,
    },
  };
}

export async function getStaticPaths() {
  const blogs = await getBlogs();
  return {
    paths: blogs.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
