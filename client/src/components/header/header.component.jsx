import React from 'react';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  Container,
} from './header.style';

export const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <LogoContainer to="/">
          <Logo />
        </LogoContainer>
      </Container>
      <OptionsContainer>
        <OptionLink to="/">Home</OptionLink>
        <OptionLink to="/">Works</OptionLink>
        <OptionLink to="/">About us</OptionLink>
        <OptionLink to="/">Contact us</OptionLink>
      </OptionsContainer>
    </HeaderContainer>
  );
};
export default Header;
