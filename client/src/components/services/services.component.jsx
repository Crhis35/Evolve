import React, { useEffect } from "react";

import Aos from "aos";

import "aos/dist/aos.css";

import {
  Row,
  SectionContainer,
  InnerTitle,
  Section,
  Slogan,
} from "../base/base.components";
import Card from "./card.component";
// import { CardItem, Text, Name, List, ListItem,LastProject,ProjectWrapper, } from "./services.styles";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  const names = ["Machine Learning", "IoT", "Web Development"];

  return (
    <Section inputColor="#fff">
      <SectionContainer directionFlow="column">
        <Row data-aos="fade-down">
          <InnerTitle inputColor="#212121">What we do </InnerTitle>
          <Slogan>
            We do everything that helps our clients to make it a successful
            business
          </Slogan>
        </Row>
        <SectionContainer data-aos="fade-up">
          {names.map((name, idx) => (
            <Card key={idx} name={name} />
          ))}
        </SectionContainer>
      </SectionContainer>
    </Section>
  );
};

export default Services;
