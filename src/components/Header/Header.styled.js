import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineClose } from 'react-icons/md';

export const HeaderContainer = styled.div`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;

  margin-left: auto;
  margin-right: auto;
  

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 20px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding: 0 40px;
  }
`;

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;


  background-color: ${props =>
    props.$scrolled !== 'false' ? 'rgba(10, 20, 30, 0.7)' : 'transparent'};
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  z-index: 1000;
  color: ${props =>
    props.$scrolled !== 'false' ? 'white' : 'inherit'};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

export const BurgerBtn = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1500;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const BurgerIcon = styled(GiHamburgerMenu)`
  font-size: 25px;
  color: red;
`;

export const CloseIcon = styled(MdOutlineClose)`
  font-size: 25px;
  color: red;
`;

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(90, 90, 90, 0.6);
  transition: all 250ms ease-in-out;
  opacity: ${props => (props.$isOpen === 'false' ? '0' : '1')};
  visibility: ${props => (props.$isOpen === 'false' ? 'hidden' : 'visible')};
`;

export const SideBarNav = styled.nav`
  position: fixed;
  top: 55px;
  bottom: 15px;
  left: 15px;
  right: 15px;
  background-color: lightgray;
  border-radius: 10px;
  padding: 15px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const LinkList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const NaviLink = styled(NavLink)`
  display: block;
  padding: 7px 0;
  font-weight: 500;
`;
