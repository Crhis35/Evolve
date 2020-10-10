import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import { Step, NameStep, NameSt, StepDscr } from "./about.styles";

const Road = ({ idx, name }) => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);
  return (
    <>
      <Step data-aos="fade-down">{idx + 1}</Step>
      <NameStep data-aos="fade-right">
        <NameSt>{name}</NameSt>
        <StepDscr>Members should share the same ethos</StepDscr>
      </NameStep>
    </>
  );
};

export default Road;
