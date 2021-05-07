import React from 'react';
import { NavbarContainer } from 'components/common';
import { Wrapper, WrapperLinks, SearchBar } from './styles';
import NavbarLinks from '../NavbarLinks';
import './styles.css';

const Navbar = ({ device }) => {
    const OnSearch = () => {

    }

    const OnTextChange = () => {

    }

    return (
        <Wrapper>
            <WrapperLinks as={NavbarContainer}>
                <NavbarLinks device={device} />
                <SearchBar device={device}>
                    <form className="searchBarDesktop" action={OnSearch}>
                        <input className="searchInputDesktop" type="text" placeholder="Search..." onChange={OnTextChange}/>
                    </form>
                </SearchBar>
            </WrapperLinks>
        </Wrapper>
    );
}

export default Navbar;
