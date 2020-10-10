import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import {
  Section,
  Logan,
  InnerTitle,
  SectionContainer,
  BtnWrapper,
  Btn,
} from "../base/base.components";

import { AboutBlog, ProcessItem } from "./about.styles";

import Road from "./road.component";

const About = () => {
  const titles = ["Planing", "Design", "Development", "Start"];
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);
  return (
    <Section>
      <SectionContainer data-aos="fade-right">
        <AboutBlog>
          <InnerTitle>Building the Future.</InnerTitle>
          <Logan>
            We are moving <br />
            from idea to <br />
            product realization
          </Logan>
          <BtnWrapper>
            <Btn to="/">View Details</Btn>
          </BtnWrapper>
        </AboutBlog>
        <AboutBlog>
          <ProcessItem>
            <ul>
              {titles.map((name, idx) => (
                <Road key={idx} idx={idx} name={name} />
              ))}
            </ul>
          </ProcessItem>
        </AboutBlog>
      </SectionContainer>
    </Section>
  );
};

export default About;
