import React, { useCallback, useState } from 'react';
// import NavbarLinksMobile from '../NavbarLinksMobile';
// import NavbarLinksTablet from '../NavbarLinksTablet';
import NavbarLinksDesktop from '../NavbarLinksDesktop';
import './styles.css';

const NavbarLinks = ({ device, handleClick, menu }) => {

    const [currentNavItem, setCurrentNavItem] = useState('');

    const wrapperSetCurrentNavItem = val => {
        setCurrentNavItem(val);
    }

    return (
        <>
            {device === "mobile" && <NavbarLinksDesktop
              menu={menu}
              currentNavItem={currentNavItem}
              handleClick={handleClick}
              setCurrentNavItem={wrapperSetCurrentNavItem}
            />}
            {device === "tablet" && <NavbarLinksDesktop
              menu={menu}
              currentNavItem={currentNavItem}
              handleClick={handleClick}
              setCurrentNavItem={wrapperSetCurrentNavItem}
            />}
            {device === "desktop" && <NavbarLinksDesktop
              menu={menu}
              currentNavItem={currentNavItem}
              handleClick={handleClick}
              setCurrentNavItem={wrapperSetCurrentNavItem}
            />}
        </>
    )
}

export default NavbarLinks;
