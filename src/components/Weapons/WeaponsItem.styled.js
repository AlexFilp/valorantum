import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
`;

export const NameWRapper = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Name = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 20px;
`;
