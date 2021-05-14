import styled from 'styled-components';
import {
  text,
} from 'data/config';

export const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 100;
  font-size: ${text.nav};

  @media (min-width: 992px) {
    position: sticky;
    position: -webkit-sticky;
    top: 0;
  }
`;

export const Select = styled.select`
`;

export const Option = styled.option`
`;
