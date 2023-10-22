// import Container from 'components/Container/Container';
import {
  BurgerBtn,
  BurgerIcon,
  CloseIcon,
  HeaderContainer,
  HeaderWrapper,
  LinkList,
  Logo,
  Nav,
  NaviLink,
  Overlay,
  SideBarNav,
  Wrapper,
} from './Header.styled';
import { NavLink } from 'react-router-dom';
import logo from '../../images/icons/valorant-logo.svg';
import { useEffect, useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const sideBarRef = useRef(null);

  useOnClickOutside(sideBarRef, () => setIsSideBarOpen(false));

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderWrapper $scrolled={scrolled.toString()}>
      <HeaderContainer>
        <Wrapper>
          <NavLink to={'/'}>
            <Logo src={logo} alt="logo" />
          </NavLink>
          <BurgerBtn type="button" onClick={toggleSideBar}>
            {isSideBarOpen ? <CloseIcon /> : <BurgerIcon />}
          </BurgerBtn>
          <Overlay $isOpen={isSideBarOpen.toString()}>
            <SideBarNav ref={sideBarRef}>
              <ul>
                <li>
                  <NaviLink onClick={() => setIsSideBarOpen(false)} to={'/'}>
                    Home
                  </NaviLink>
                </li>
                <li>
                  <NaviLink
                    onClick={() => setIsSideBarOpen(false)}
                    to={'/agents'}
                  >
                    Agents
                  </NaviLink>
                </li>
                <li>
                  <NaviLink
                    onClick={() => setIsSideBarOpen(false)}
                    to={'/maps'}
                  >
                    Maps
                  </NaviLink>
                </li>
                <li>
                  <NaviLink
                    onClick={() => setIsSideBarOpen(false)}
                    to={'/weapons'}
                  >
                    Weapons
                  </NaviLink>
                </li>
              </ul>
            </SideBarNav>
          </Overlay>
          <Nav>
            <LinkList>
              <li>
                <NaviLink to={'/'}>Home</NaviLink>
              </li>
              <li>
                <NaviLink to={'/agents'}>Agents</NaviLink>
              </li>
              <li>
                <NaviLink to={'/maps'}>Maps</NaviLink>
              </li>
              <li>
                <NaviLink to={'/weapons'}>Weapons</NaviLink>
              </li>
            </LinkList>
          </Nav>
        </Wrapper>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
