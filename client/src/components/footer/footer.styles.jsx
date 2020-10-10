import styled from "styled-components";

export const InfoWrapper = styled.div`
  padding: 4rem;
  background: #1b1b1b;
`;

export const FooterContainer = styled.footer`
  padding: 0 5rem;
  background: #212121;
`;
export const Container = styled.div`
  width: 50%;
  padding: 1rem 0;
  @media screen and (max-width: 37.5em) {
    width: 100%;
  }
`;

export const CopyRight = styled.div`
  letter-spacing: 0.1rem;
  color: #828282;
`;
export const Text = styled.div`
  padding: 0 10rem 0 0;
  color: #bbbbbb;
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  border-bottom: 0.1rem solid #272727;
  letter-spacing: 0.1rem;
  @media screen and (max-width: 56.25em) {
    padding: 0;
  }
`;
