import styled from 'styled-components';
import {
  primary,
  secondary,
  accent,
  background,
  logo,
} from 'data/config';

export const Wrapper = styled.div`
  // background: transparent;
  background-color: ${primary};
  width: 100%;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
`;

export const Overlay = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  display: none;
  transition: 0.4s;

  ${({ sidebar }) =>
    sidebar &&
    `
			display: block;
			z-index: 4;	
	`}
`;
