import styled from "styled-components";

export const AboutBlog = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;
export const ProcessItem = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1.5rem;
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
    content: "";
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
    content: "";
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
