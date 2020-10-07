import styled from 'styled-components';

export const SectionContainer = styled.section`
  position: relative;
  position: absolute;
  top: 50%;
  left: 23%;
  transform: translate(-50%, -50%);
  text-align: center;
  @media only screen and (max-width: 37.5em) {
    left: 50%;
  }
`;

export const ContentContainer = styled.div`
  position: relative;
  box-sizing: border-box;
`;

export const Title = styled.h2`
  font-family: 'Titillium Web', sans-serif;
  font-size: 4.5em;
  color: #fff;
  font-weight: 800;
  @media only screen and (max-width: 37.5em) {
    font-size: 3.5rem;
  }
`;
export const Paragraph = styled.p`
  font-size: 1.2em;
  color: #fff;
  font-weight: 400;
  font-style: italic;
`;
