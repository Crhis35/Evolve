import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.section`
  background: ${(props) => props.inputColor || "#212121"};
  padding: 8rem;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 37.5em) {
    padding: 6rem 4.5rem;
  }
`;

export const Slogan = styled.div`
  position: relative;
  padding-top: 1rem;
  font-size: 4.8rem;
  font-weight: 700;
  color: ${(props) => props.inputColor || "#212121"};

  @media only screen and (max-width: 56.25em) {
    font-size: 3.2rem;
    text-align: center;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-around;
`;

export const Paragraph = styled.p`
  line-height: 1.8;
  font-size: 1.4rem;
`;
export const InnerSubTitle = styled.h4`
  font-weight: bold;
  padding-bottom: 0.25rem;
  font-size: 1.8rem;
  position: relative;
  letter-spacing: 0.1rem;
  font-family: "Titillium Web", sans-serif;
  color: ${(props) => props.inputColor || "#fff"};
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 3rem;
    height: 0.2rem;
    background: #ff303f;
  }
`;
export const InnerTitle = styled.h2`
  position: relative;
  font-size: 2rem;
  padding-bottom: 1rem;
  font-weight: 400;
  font-family: "Titillium Web", sans-serif;
  letter-spacing: 0.5rem;
  color: ${(props) => props.inputColor || "#fff"};
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 3rem;
    height: 0.2rem;
    background: #ff303f;
  }
  @media only screen and (max-width: 56.25em) {
    margin-left: -1.5rem;
    text-align: center;
    font-size: 2.2rem;
    &:before {
      left: 45%;
      width: 4.5rem;
      height: 0.3rem;
    }
  }
`;

export const Logan = styled.div`
  color: ${(props) => props.inputColor || "#fff"};
  font-size: 4.8rem;
  font-weight: 700;
  margin-bottom: 4rem;
`;

export const SectionContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 2.5rem;
  display: flex;
  flex-direction: ${(props) => props.directionFlow || "row"};
  justify-content: space-around;
  align-items: center;

  @media only screen and (max-width: 68.75em) {
    flex-direction: column;
  }
`;

export const LogoWrapper = styled.div`
  text-align: center;
`;
export const LogoContainer = styled(Link)`
  width: 12.5rem;
  padding: 2.5rem;
  margin-bottom: 3rem;
  @media screen and (max-width: 80rem) {
    width: 10rem;
    padding: 0;
  }
  & > * {
    width: ${(props) => props.Size || "15"}rem;
    height: ${(props) => props.Size || "15"}rem;
  }
`;
export const BtnWrapper = styled.div`
  @media only screen and (max-width: 56.25em) {
    text-align: center;
  }
`;
export const Btn = styled(Link)`
  display: inline-block;
  padding: 1.5rem 3rem;
  text-transform: uppercase;
  border-radius: 2px;
  position: relative;
  background: #ff303f;
  font-weight: 700;
  color: #fff;
  box-shadow: 0 0.2rem 0.2rem rgba(0, 0, 0, 0.7);
  font-family: "Droid Sans", sans-serif;
  letter-spacing: 0.1rem;

  &:hover {
    background: #ff747d;
  }
`;
