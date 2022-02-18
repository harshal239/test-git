import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

/*
 !Get Details of all blogs
 */

export const getBlogs = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              name
              picture {
                url
              }
            }
            title
            slug
            excerpt
            publishedAt
            coverImage {
              url
            }
            content {
              html
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};

/*
 !Get Details of Single Blog
 */

export const getBlogDetails = async (slug) => {
  const query = gql`
    query GetBlogDetails($slug: String!) {
      post(where: { slug: $slug }) {
        title
        excerpt
        coverImage {
          url
        }
        author {
          name
          picture {
            url
          }
        }
        publishedAt
        slug
        content {
          raw
        }
        categories {
          name
          slug
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.post;
};

/*
  !Get Similar Blogs
*/
export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetBlogDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 3
      ) {
        author {
          name
        }
        title
        coverImage {
          url
        }
        publishedAt
        slug
        categories {
          name
          slug
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug, categories });

  return result.posts;
};

/*
  !Get Categories 
*/

export const getCategories = async () => {
  const query = gql`
    query GetGategories {
      categories {
        name
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.categories;
};

/*
  !Get Featured Posts
*/

export const getFeaturedPost = async () => {
  const query = gql`
  query GetCategoryPost() {
    posts(where: {featuredPost: true}) {
      author {
        name
        picture {
          url
        }
      }
      coverImage {
        url
      }
      title
      slug
      publishedAt
    }
  }   
  `;

  const result = await request(graphqlAPI, query);

  return result.posts;
};
