import React, { useEffect } from 'react';
import { gql } from '@apollo/client';

import Directoy from '../../components/directory/directory.component';
import About from '../../components/about/about.component';
import Services from '../../components/services/services.component';
import Project from '../../components/project/project.component';

import Query from '../../components/Query';

import { HomePageContainer } from './homepage.styles';

const LAST_PROJECT = gql`
  query posts($sort: String, $start: Int, $limit: Int) {
    posts(sort: $sort, start: $start, limit: $limit) {
      id
      title
      image {
        url
      }
    }
  }
`;

const HomePage = ({ ...otherProps }) => {
  useEffect(() => {}, []);
  return (
    <HomePageContainer>
      <Directoy />
      <About />
      <Services />
      <Query query={LAST_PROJECT} sort={'createdAt:DESC'} limit={1}>
        {({ data: { posts } }) => {
          const { id, image, title } = posts[0];
          const imageUrl =
            process.env.NODE_ENV !== 'development'
              ? image[0].url
              : process.env.REACT_APP_BACKEND_URL + image[0].url;
          return (
            <Project image={imageUrl} title={title} id={id} {...otherProps} />
          );
        }}
      </Query>
    </HomePageContainer>
  );
};
export default HomePage;
