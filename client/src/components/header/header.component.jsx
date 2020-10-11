import React from "react";
import { FloatingButton, SubButton, Navigation } from "./header.style";
import { ReactComponent as Logo } from "../../assets/img/logo-w.svg";

import { LogoContainer, LogoWrapper } from "../base/base.components";
import "./style.scss";

export const Header = () => (
  <Navigation>
    <LogoWrapper>
      <LogoContainer to="/" size="8.5">
        <Logo />
      </LogoContainer>
    </LogoWrapper>
    <FloatingButton>
      <SubButton to="/" className="tl ">
        <i className="fas fa-home"></i>
      </SubButton>
      <SubButton to="/" className="tr">
        <i className="fas fa-user-friends"></i>
      </SubButton>
      <SubButton to="/blog" className="bl">
        <i className="fas fa-book"></i>
      </SubButton>
      <SubButton to="/" className="br">
        <i className="fas fa-address-card"></i>
      </SubButton>
    </FloatingButton>
  </Navigation>
);
export default Header;
