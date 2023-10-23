import styled from 'styled-components';
import { MdKeyboardArrowUp } from 'react-icons/md';

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 50px;
  height: 50px;
  bottom: 40px;
  right: 40px;
  border: none;
  background-color: red;
  border-radius: 4px;
  transition: all 250ms ease-in-out;
  opacity: ${props => (props.$scrollBtnVisible === 'false' ? '0' : '1')};
  visibility: ${props =>
    props.$scrollBtnVisible === 'false' ? 'hidden' : 'visible'};
  transform: ${props =>
    props.$scrollBtnVisible === 'false' ? 'scale(0.9)' : 'scale(1)'};
  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const StyledArrow = styled(MdKeyboardArrowUp)`
  color: white;
  font-size: 40px;
`;
