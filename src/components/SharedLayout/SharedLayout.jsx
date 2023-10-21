import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Container from 'components/Container/Container';
import { Nav, Wrapper } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <header>
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
      </header>
      <Suspense fallback={<h1>LOADING...</h1>}>
        <Container>
          <Outlet />
        </Container>
      </Suspense>
      <footer>
        <Container>
          <h1>FOOTER</h1>
        </Container>
      </footer>
    </>
  );
};

export default SharedLayout;
