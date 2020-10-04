import React from 'react';

import { HomePageContainer } from './homepage.styles';
import Directoy from '../../components/directory/directory.component';
import About from '../../components/about/about.component';

export const HomePage = () => {
  return (
    <HomePageContainer>
      <Directoy />
      <About />
    </HomePageContainer>
  );
};
export default HomePage;
