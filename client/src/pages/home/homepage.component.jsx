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
      description
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
          const { id, image, title, description } = posts[0];
          const imageUrl = image[0].url;
          return (
            <Project
              home={true}
              image={imageUrl}
              title={title}
              id={id}
              description={description}
              {...otherProps}
            />
          );
        }}
      </Query>
    </HomePageContainer>
  );
};
export default HomePage;
