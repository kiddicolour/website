import styled from 'styled-components';
import {
    primary,
} from 'data/config';

export const Wrapper = styled.div`
    background-color: ${primary};
    width: 100%;
    // temp height
    // height: 48px;
`;

export const WrapperLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const SearchBar = styled.div`
    align-items: center;
    margin-bottom: 0px;
    display: ${p => (p.device === 'desktop' ? "flex": "none")};
`;
