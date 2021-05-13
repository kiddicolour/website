import styled from 'styled-components';
import {
    primary,
    secondary,
    textPrimary,
    textSecondary
} from 'data/config';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    // justify-content: space-around;
`;

export const MenuItemWrapper = styled.div`
    flex-grow: 1;
    align-items: center;
    cursor: pointer;
    padding-right: 0px;
    color: ${textSecondary};

    p {
        padding-left: 6px;
        font-family: 'KiddiBold';
    }

    img, p {
        margin: 0;
    }
`;

export const MenuIconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        color: ${textPrimary};
        padding-right: 6px;
    }
`;

export const MenuIcon = styled.div`
    margin: auto;
`;

export const ParentMenuIcon = styled.div`
    margin: none;
`;

export const OddWrapper = styled.div`
    width: 100%;
`;
