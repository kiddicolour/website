import styled from 'styled-components';
import {
    primary,
    secondary,
    textPrimary,
    textSecondary
} from 'data/config';

export const Wrapper = styled.div`
    background-color: ${primary};
    width: 100%;
`;

export const OddWrapper = styled.div`
    width: 100%;
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

export const SubItemsWrapper = styled.div`
    position: absolute;
    top: ${p => (p.device === 'desktop' ? "48px" : "none")};
    bottom: ${p => (p.device === 'desktop' ? "none" : "48px")};
    left: 0;
    width: 100%;

    @media screen and (max-width: 375px) {
        bottom: 40px;
    }
`;

export const MenuSubItemsWrapper = styled.div`
    background-color: ${secondary};
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    min-height: 48px;

    p {
        padding-left: 6px;
        padding-right: 6px;
    }

    @media screen and (max-width: 375px) {
        min-height: 40px;

        /* p {
            padding-left: 0px;
            padding-right: 6px;
        } */
    }
`;

export const MenuSubItemWrapper = styled.a`
    width: ${p => p.device === 'desktop' && "25%" || p.device === 'tablet' && "33%" || "50%"};
    display: flex;
    align-items: center;
    color: ${textPrimary};

    p {
        font-family: 'KiddiRegular' !important;
    }

    :hover {
        color: ${primary};
    }
`;
