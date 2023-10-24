import styled from 'styled-components';

export const ListWrapper = styled.div`
  padding-top: 100px;
  padding-bottom: 40px;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 15px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
`;
