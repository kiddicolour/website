import React, { useCallback, useState } from 'react';
import NavbarLinksMobile from '../NavbarLinksMobile';
import NavbarLinksTablet from '../NavbarLinksTablet';
import NavbarLinksDesktop from '../NavbarLinksDesktop';
import './styles.css';

const NavbarLinks = ({ device, handleAudio, menu }) => {

    const [currentNavItem, setCurrentNavItem] = useState('');

    return (
        <>
            {device === "mobile" && <NavbarLinksMobile
              menu={menu}
              currentNavItem={currentNavItem}
              handleAudio={handleAudio}
              setCurrentNavItem={setCurrentNavItem}
            />}
            {device === "tablet" && <NavbarLinksTablet
              menu={menu}
              currentNavItem={currentNavItem}
              handleAudio={handleAudio}
              setCurrentNavItem={setCurrentNavItem}
            />}
            {device === "desktop" && <NavbarLinksDesktop
              menu={menu}
              currentNavItem={currentNavItem}
              handleAudio={handleAudio}
              setCurrentNavItem={setCurrentNavItem}
            />}
        </>
    )
}

export default NavbarLinks;
