import styled from "styled-components";

export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Text = styled.div`
  padding-right: 4rem;
  letter-spacing: 0.1rem;
  color: #4c4c4c;
`;

export const Name = styled.div`
  padding-bottom: 2rem;
`;

export const List = styled.div`
  padding: 3rem;
`;

export const ListItem = styled.li`
  position: relative;
  margin-bottom: 15px;
  font-size: 15px;
  letter-spacing: 1px;
  color: #000000;

  &:before {
    position: absolute;
    top: 50%;
    left: -20px;
    width: 10px;
    height: 2px;
    content: "";
    background: #aebbb8;
    margin-top: -1px;
  }
`;
