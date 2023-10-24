import styled from 'styled-components';

export const AgentsListUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 10px;

  @media screen and (min-width: 375px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 20px;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 30px;
  }
`;
