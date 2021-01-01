import React from "react"
import PostListWrapper from '@lekoarts/gatsby-theme-minimal-blog/src/components/list';
import PostListing from '@lekoarts/gatsby-theme-minimal-blog/src/components/listing';

import useDailyPostListingQuery from '../../../src/hooks/useDailyPostListingQuery';
import NoContent from "../../../src/components/noContent";

const extractPosts = (data) => {
  const posts = data.allPost.edges.flat();
  return posts.map(({node}) => node);
}
const DailyPage = (props) => {
  const data = useDailyPostListingQuery();
  const posts = extractPosts(data);

  if(posts.length === 0) {
    return (
      <PostListWrapper>
        <NoContent />
      </PostListWrapper>
    );
  }

  return (
    <PostListWrapper>
      <PostListing posts={posts} showTags />
    </PostListWrapper>
  );
}

export default DailyPage;
