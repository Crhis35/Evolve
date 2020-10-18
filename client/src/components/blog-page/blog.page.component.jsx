import React, { useEffect } from 'react';
import { gql } from '@apollo/client';

import Query from '../../components/Query';
import ProjectContainer from '../project/project.container';

const ALL_BLOGS = gql`
  query posts($sort: String, $start: Int, $limit: Int) {
    posts(sort: $sort, start: $start, limit: $limit) {
      id
      title
      description
      image {
        url
      }
    }
  }
`;
const BlogPage = ({ ...otherProps }) => {
  useEffect(() => {}, []);
  return (
    <Query query={ALL_BLOGS} limit={5} sort={'createdAt:DESC'}>
      {({ data, fetchMore }) => {
        return (
          <ProjectContainer
            posts={data.posts}
            fetchMore={fetchMore}
            {...otherProps}
          />
        );
      }}
    </Query>
  );
};

export default BlogPage;
