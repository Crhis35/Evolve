import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navigation = styled.div`
  position: fixed;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.03)
  );
  width: 100vw;
  z-index: 1000;
  height: 7.5rem;
`;

export const HeaderContainer = styled.div`
  height: 10rem;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  font-size: 1.5rem;
  padding: 1rem 3rem;

  @media screen and (max-width: 80rem) {
    flex-direction: column;
    height: 6rem;
    padding: 1rem;
    margin-bottom: 2rem;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const OptionsContainer = styled.div`
  padding-top: 2rem;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 80rem) {
    width: 100%;
    justify-content: space-around;
  }
`;

export const OptionLink = styled(Link)`
  padding: 1rem 1.5rem;
  color: #ffffff;
  font-weight: 400;
  &:hover {
    color: #ff303f;
  }
  cursor: pointer;
  @media only screen and (max-width: 37.5em) {
    font-size: 2.6rem;
  }
`;
export const SubButton = styled(Link)`
  position: absolute;
  display: inline-block;
  background-color: #ff303f;
  color: rgba(255, 255, 255, 0);
  width: 2.8rem;
  height: 2.8rem;
  line-height: 4.8rem;
  font-family: "FontAwesome";
  font-size: 1.2rem;
  -webkit-transition: top 0.2s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.2s,
    left 0.2s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.2s,
    bottom 0.2s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.2s,
    right 0.2s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.2s,
    width 0.2s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.2s,
    height 0.2s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.2s,
    transform 0.1s ease 0s, border-radius 0.2s ease 0.2s;
  -moz-transition: top 0.2s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.2s,
    left 0.2s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.2s,
    bottom 0.2s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.2s,
    right 0.2s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.2s,
    width 0.2s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.2s,
    height 0.2s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.2s,
    transform 0.1s ease 0s, border-radius 0.2s ease 0.2s;
  transition: top 0.2s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.2s,
    left 0.2s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.2s,
    bottom 0.2s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.2s,
    right 0.2s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.2s,
    width 0.2s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.2s,
    height 0.2s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.2s,
    transform 0.1s ease 0s, border-radius 0.2s ease 0.2s;
`;

export const FloatingButton = styled.div`
  position: fixed;
  border-radius: 2.8rem 0 0 0;
  z-index: 1000;
  right: 10rem;
  bottom: 5rem;
  width: 5.6rem;
  height: 5.6rem;
  overflow: visible;
  border-radius: 50%;
  box-shadow: -0.2rem 0.2rem 1.6rem 0.1rem rgba(0, 0, 0, 0.75);
  -webkit-transition: transform 0.4s cubic-bezier(0.58, -0.37, 0.45, 1.46),
    color 0s ease 0.4s, font-size 0.2s;
  -moz-transition: transform 0.4s cubic-bezier(0.58, -0.37, 0.45, 1.46),
    color 0s ease 0.4s, font-size 0.2s;
  transition: transform 0.4s cubic-bezier(0.58, -0.37, 0.45, 1.46),
    color 0s ease 0.4s, font-size 0.2s;
  text-align: center;
  line-height: 5rem;
  font-size: 2.8rem;
  color: rgba(255, 255, 255, 1);
  &:before {
    position: relative;
    z-index: 10000;
    content: "+";
  }
  &:hover {
    color: rgba(255, 255, 255, 0);
    transform: rotate(45deg);
  }
  &:hover ${SubButton} {
    width: 4.8rem;
    height: 4.8rem;
    transform: rotate(-45deg);

    color: rgba(255, 255, 255, 1);
    -webkit-transition: top 0.4s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.4s,
      left 0.4s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.4s,
      bottom 0.4s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.4s,
      right 0.4s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.4s,
      width 0.4s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.4s,
      height 0.4s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.4s,
      color 0.3s ease 0.8s, transform 0.3s ease 0.8s,
      border-radius 0.4s ease 0.6s;
    -moz-transition: top 0.4s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.4s,
      left 0.4s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.4s,
      bottom 0.4s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.4s,
      right 0.4s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.4s,
      width 0.4s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.4s,
      height 0.4s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.4s,
      color 0.3s ease 0.8s, transform 0.3s ease 0.8s,
      border-radius 0.4s ease 0.6s;
    transition: top 0.4s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.4s,
      left 0.4s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.4s,
      bottom 0.4s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.4s,
      right 0.4s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.4s,
      width 0.4s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.4s,
      height 0.4s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.4s,
      color 0.3s ease 0.8s, transform 0.3s ease 0.8s,
      border-radius 0.4s ease 0.6s;
  }
  &:hover .tl {
    top: -2.5rem;
    left: -2.5rem;
    border-radius: 2.8rem;
  }

  &:hover .tr {
    top: -2.5rem;
    right: -2.5rem;
    border-radius: 2.8rem;
  }

  &:hover .bl {
    bottom: -2.5rem;
    left: -2.5rem;
    border-radius: 2.8rem;
  }

  &:hover .br {
    bottom: -2.5rem;
    right: -2.5rem;
    border-radius: 2.8rem;
  }
  @media only screen and (max-width: 56.25em) {
    right: 5rem;
    line-height: 6rem;
    width: 6.6rem;
    height: 6.6rem;
    & > * {
      width: 3.8rem;
      height: 3.8rem;
    }
  }
`;
