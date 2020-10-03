import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 10rem;
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

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 7rem;
  padding: 2.5rem;
  @media screen and (max-width: 80rem) {
    width: 5rem;
    padding: 0;
  }
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
`;
