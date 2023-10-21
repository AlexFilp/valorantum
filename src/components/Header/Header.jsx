import Container from 'components/Container/Container';
import { HeaderWrapper, Logo, Nav, Wrapper } from './Header.styled';
import { NavLink } from 'react-router-dom';
import logo from '../../images/icons/valorant-logo.svg';

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Wrapper>
          <NavLink to={'/'}>
            <Logo src={logo} alt="logo" />
          </NavLink>
          <Nav>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/agents'}>Agents</NavLink>
            <NavLink to={'/maps'}>Maps</NavLink>
            <NavLink to={'/weapons'}>Weapons</NavLink>
          </Nav>
        </Wrapper>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
