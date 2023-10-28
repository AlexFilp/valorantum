import styled from 'styled-components';

export const SelectInput = styled.select`
  display: block;
  width: 100%;
  font-weight: 500;
  padding: 7px;
  margin: 0 auto;
  outline: none;

  &:focus-within {
    border-color: red;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Option = styled.option`
  font-weight: 500;
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

export const Item = styled.li`
  padding: 5px;
  border-radius: 5px;
  border: 1px solid ${props => (props.$selected ? 'red' : 'transparent')};
  transition: border-color 250ms ease;
  cursor: pointer;
`;

export const Btn = styled.button`
  border: none;
  font-weight: 500;
`;
