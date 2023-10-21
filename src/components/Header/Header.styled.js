import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;

  svg {
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;
