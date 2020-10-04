import React, { useEffect } from 'react';

import { HomePageContainer } from './homepage.styles';
import Directoy from '../../components/directory/directory.component';
import About from '../../components/about/about.component';

import Aos from 'aos';
export const HomePage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <HomePageContainer>
      <Directoy />
      <About />
    </HomePageContainer>
  );
};
export default HomePage;
