import styled from 'styled-components';
import {
    primary, secondary, detail, detailSecondary, textPrimary, textSecondary, text
  } from 'data/config';

export const Wrapper = styled.div`
    display: flex;
    color: ${textPrimary};
`;

export const FilterWrapper = styled.div`
    display: none;

    @media (min-width: 992px) {
        display: block;
        width: 25%;
    }
`;

export const Filter = styled.div`
    background-color: ${detailSecondary};
    margin: 24px 24px 24px 0px;
    height: 800px;
`;

export const DrawingWrapper = styled.div`
    width: 100%;

    @media (min-width: 992px) {
        width: 75%;
    }
`;

export const ButtonsWrapper = styled.div`
    width: 100%;
    margin: 24px 0px 18px 0px;
    display: flex;
    justify-content: center;

    @media (min-width: 992px) {
        width: 83%;
    }
`;

export const Button = styled.button`
    margin: 0px 4px;
    border: none;
    background-color: ${detailSecondary};
    color: ${textSecondary};
    font-size: 11px;
    /* temporary */
    height: 27px;
`;

export const Title = styled.h1`
    display: block;
    font-size: ${text.title};

    @media (min-width: 992px) {
        display: none;
    }
`;

export const ImageWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    @media (min-width: 992px) {
        flex-direction: row;
    }
`;

export const Body = styled.div`
    width: 100%;

    @media (min-width: 992px) {
        width: 83%;
    }
`;

export const Image = styled.img`
    
`;

export const DesktopTitle = styled.h1`
    display: none;
    font-size: ${text.subtitle};

    @media (min-width: 992px) {
        display: block;
    }
`;

export const Description = styled.p`
    
`;

export const CategoriesWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin: 0px 0px 0px 24px;

    @media (min-width: 992px) {
        width: 17%;
        flex-direction: column;
    }
`;

export const CategoryWrapper = styled.div`

`;

export const CategoryTitle = styled.h3`
    font-size: 18px;
    margin-bottom: 6px;
`;

export const Category = styled.a`

`;

export const CategoryImage = styled.div`
    background-position-x: left;
`;

export const CategoryName = styled.p`
    font-size: 12px;
    margin-bottom: 12px;
    color: ${textPrimary};
`;
