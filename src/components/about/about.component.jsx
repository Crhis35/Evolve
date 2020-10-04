import React, { useEffect } from 'react';

import Aos from 'aos';

import {
  AboutSection,
  AboutContainer,
  AboutBlog,
  Step,
  NameStep,
  NameSt,
  ProcessItem,
  StepDscr,
  InnerTitle,
  Logan,
} from './about.styles';

import 'aos/dist/aos.css';

const About = () => {
  const titles = ['Planing', 'Design', 'Development', 'Start'];
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);
  return (
    <AboutSection>
      <AboutContainer data-aos="fade-right">
        <AboutBlog>
          <InnerTitle>Building the Future.</InnerTitle>
          <Logan>
            We are moving <br />
            from idea to <br />
            product realization
          </Logan>
        </AboutBlog>
        <AboutBlog>
          <ProcessItem>
            <ul>
              {titles.map((name, idx) => (
                <>
                  <Step data-aos="fade-down">{idx + 1}</Step>
                  <NameStep data-aos="fade-left">
                    <NameSt>{name}</NameSt>
                    <StepDscr>Members should share the same ethos</StepDscr>
                  </NameStep>
                </>
              ))}
            </ul>
          </ProcessItem>
        </AboutBlog>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
