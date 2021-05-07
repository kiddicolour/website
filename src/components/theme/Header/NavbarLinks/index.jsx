import React, { useCallback, useState } from 'react';
import NavbarLinksMobile from '../NavbarLinksMobile';
import NavbarLinksTablet from '../NavbarLinksTablet';
import NavbarLinksDesktop from '../NavbarLinksDesktop';
import './styles.css';

const NavbarLinks = ({ device }) => {
    const [currentNavItem, setCurrentNavItem] = useState('');

    const wrapperSetCurrentNavItem = val => {
        setCurrentNavItem(val);
    }

    return (
        <>
        {device === "mobile" && <NavbarLinksMobile currentNavItem={currentNavItem} setCurrentNavItem={wrapperSetCurrentNavItem} />}  
        {device === "tablet" && <NavbarLinksTablet currentNavItem={currentNavItem} setCurrentNavItem={wrapperSetCurrentNavItem} />}  
        {device === "desktop" && <NavbarLinksDesktop currentNavItem={currentNavItem} setCurrentNavItem={wrapperSetCurrentNavItem} />}  
        </>
    )
}

export default NavbarLinks;
