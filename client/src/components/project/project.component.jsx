import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import { InnerTitle, Slogan, Btn, BtnWrapper } from "../base/base.components";
import { LastProject, ProjectWrapper } from "./project.styles";

export const Project = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);
  return (
    <LastProject>
      <ProjectWrapper data-aos="fade-right">
        <InnerTitle>Latest project</InnerTitle>
        <Slogan inputColor="#fff">
          We have Developed <br /> an AI
        </Slogan>
        <BtnWrapper>
          <Btn to="/">View Details</Btn>
        </BtnWrapper>
      </ProjectWrapper>
    </LastProject>
  );
};
export default Project;
