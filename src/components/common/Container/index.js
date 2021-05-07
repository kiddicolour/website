import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;

  @media (min-width: 768px) {
    width: 90%;
  }

  @media (min-width: 992px) {
    width: 80%;
  }
`;

export const NavbarContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;

  @media (min-width: 992px) {
    width: 80%;
  }
`;
