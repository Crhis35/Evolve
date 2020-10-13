import React, { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

import { InnerTitle, Slogan, Btn, BtnWrapper } from '../base/base.components';
import { LastProject, ProjectWrapper } from './project.styles';

const Project = ({ title, id, image }) => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  return (
    <LastProject image={image}>
      <ProjectWrapper data-aos="fade-up">
        <InnerTitle>{title}</InnerTitle>
        <Slogan inputColor="#fff">
          We have Developed <br /> an AI
        </Slogan>
        <BtnWrapper>
          <Btn to={`blog/${id}`}>View Details</Btn>
        </BtnWrapper>
      </ProjectWrapper>
    </LastProject>
  );
};
export default Project;
