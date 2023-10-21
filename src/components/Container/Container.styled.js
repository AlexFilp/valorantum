import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;

  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 375px) {
    max-width: 375px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 20px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding: 0 40px;
  }
`;
