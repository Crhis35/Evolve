import React from 'react';
import { gql } from '@apollo/client';

import Query from '../Query';
import BlogPreview from '../blog-preview/blog.preview';

const BLOG_BY_ID = gql`
  query post($id: ID!) {
    post(id: $id) {
      title
    }
  }
`;

const BlogOverview = ({ match }) => {
  const { blogId } = match.params;
  return (
    <Query id={blogId} query={BLOG_BY_ID}>
      {({ data: { post } }) => <BlogPreview post={post} />}
    </Query>
  );
};

export default BlogOverview;
