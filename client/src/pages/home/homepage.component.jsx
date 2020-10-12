import React from 'react';

import { HomePageContainer } from './homepage.styles';
import Directoy from '../../components/directory/directory.component';
import About from '../../components/about/about.component';
import Services from '../../components/services/services.component';

import Project from '../../components/project/project.component';

const HomePage = () => {
  const url =
    'https://images.unsplash.com/photo-1554744512-d6c603f27c54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80';
  return (
    <HomePageContainer>
      <Directoy />
      <About />
      <Services />
      <Project image={url} title={'Last Project'} uid={'blog'} />
    </HomePageContainer>
  );
};
export default HomePage;
