import styled from 'styled-components';

export const AboutSection = styled.section`
  background: #212121;
  padding: 8rem;
  width: 100%;
  height: 100%;
`;

export const AboutContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 2.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media only screen and (max-width: 68.75em) {
    flex-direction: column;
  }
`;
export const AboutBlog = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ProcessItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Step = styled.li`
  color: #fff;
  position: relative;
  width: 6rem;
  height: 6rem;
  border-radius: 3rem;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  line-height: 6rem;
  border: 0.2rem solid #3e3e3e;
`;

export const NameStep = styled.li`
  padding: 1rem 0 1rem 10rem;
  position: relative;
  letter-spacing: 1px;
  color: #fff;

  &:before {
    content: '';
    width: 0.2rem;
    height: 100%;
    position: absolute;
    left: 3rem;
    top: 0;
    background: #3e3e3e;
  }
  &:last-child::after {
    position: absolute;
    bottom: 0;
    left: 2.1rem;
    width: 2rem;
    height: 2rem;
    background: #3e3e3e;
    content: '';
    border-radius: 1rem;
  }
`;

export const NameSt = styled.span`
  display: block;
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;
export const StepDscr = styled.span`
  color: #bbbbbb;
  letter-spacing: 0.1rem;
`;
export const InnerTitle = styled.h2`
  position: relative;
  font-size: 2rem;
  padding-bottom: 1rem;
  font-weight: 400;
  font-family: 'Titillium Web', sans-serif;
  letter-spacing: 0.5rem;
  color: #fff;
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 3rem;
    height: 0.2rem;
    background: #ff303f;
  }
`;

export const Logan = styled.div`
  color: #fff;
  font-size: 4.8rem;
  font-weight: 700;
  margin-bottom: 4rem;
`;
