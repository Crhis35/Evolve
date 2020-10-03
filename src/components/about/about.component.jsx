import React from 'react';
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

const About = () => {
  const titles = ['Planing', 'Design', 'Development', 'Start'];
  return (
    <AboutSection>
      <AboutContainer>
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
                  <Step>{idx + 1}</Step>
                  <NameStep>
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
