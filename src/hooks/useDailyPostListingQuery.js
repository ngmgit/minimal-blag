import {graphql, useStaticQuery} from 'gatsby';

const useDailyPostListingQuery = () => {
  const postListData = useStaticQuery(graphql`
    query MyQuery {
      allPost(filter: {tags: {elemMatch: {slug: {eq: "daily"}}}}) {
        edges {
          node {
            title
            id
            tags {
              name
              slug
            }
            slug
            timeToRead
            date
          }
        }
      }
    }
  `);

  return postListData;
};

export default useDailyPostListingQuery;
