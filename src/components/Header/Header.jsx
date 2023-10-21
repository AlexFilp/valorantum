import Container from 'components/Container/Container';
import React from 'react';
import { Nav, Wrapper } from './Header.styled';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Header>
      <Container>
        <Wrapper>
          <h3>VALORANTUM</h3>
          <Nav>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/agents'}>Agents</NavLink>
            <NavLink to={'/maps'}>Maps</NavLink>
            <NavLink to={'/weapons'}>Weapons</NavLink>
          </Nav>
        </Wrapper>
      </Container>
    </Header>
  );
};

export default Header;
