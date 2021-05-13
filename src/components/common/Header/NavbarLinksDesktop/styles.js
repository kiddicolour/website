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
    justify-content: flex-start;
`;

export const MenuItemWrapper = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding-right: 12px;
    color: ${textSecondary};

    p {
        padding-left: 6px;
        font-family: 'KiddiBold';
    }

    img, p {
        margin: 0;
    }

    :hover {
        background-color: ${secondary};
        color: ${textPrimary};
    }
`;

export const MenuIconWrapper = styled.div`

`;

export const MenuIcon = styled.div`
    margin: auto;
`;

export const DropdownIcon = styled.div`
    margin: auto;
`;
