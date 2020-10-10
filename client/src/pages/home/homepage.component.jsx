import React from "react";

import { HomePageContainer } from "./homepage.styles";
import Directoy from "../../components/directory/directory.component";
import About from "../../components/about/about.component";
import Services from "../../components/services/services.component";

import Project from "../../components/project/project.component";

export const HomePage = () => {
  return (
    <HomePageContainer>
      <Directoy />
      <About />
      <Services />
      <Project />
    </HomePageContainer>
  );
};
export default HomePage;
