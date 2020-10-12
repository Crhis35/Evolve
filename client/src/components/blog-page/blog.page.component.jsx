import React from 'react';
import { gql } from '@apollo/client';

import Query from '../../components/Query';
import ProjectContainer from '../project/project.container';

const ALL_BLOGS = gql`
  query posts($start: Int, $limit: Int) {
    posts(start: $start, limit: $limit) {
      id
      uid
      title
      image {
        url
      }
    }
  }
`;
const BlogPage = ({ ...otherProps }) => {
  return (
    <Query query={ALL_BLOGS} id={null} start={0} limit={5}>
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
