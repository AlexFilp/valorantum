import styled from 'styled-components';

export const SelectInput = styled.select`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const BtnList = styled.ul`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;
