import React from "react";
import { DirectoryContainer } from "./directory.style";
import Header from "../header/header.component";

import Landing from "../landing/landing.component";

import video from "../../assets/videos/keyboard.mp4";

import "./directory.style.scss";

const Directory = () => {
  return (
    <DirectoryContainer>
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <Header />
      <Landing />
    </DirectoryContainer>
  );
};

export default Directory;
