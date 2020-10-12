import styled from 'styled-components';

export const LastProject = styled.div`
  padding: 1.5rem 10rem;
  position: relative;
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  width: 100%;
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    background: rgba(18, 23, 27, 0.7);
  }
`;
export const ProjectWrapper = styled.div`
  padding: 10rem 0;
`;
