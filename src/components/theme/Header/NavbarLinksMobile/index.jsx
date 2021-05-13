import { graphql, useStaticQuery } from 'gatsby'
import React, { useEffect } from 'react'
import { NavbarContainer } from 'components/common'
import { Wrapper, MenuItemWrapper, MenuIconWrapper, MenuIcon , SubItemsWrapper, MenuSubItemsWrapper, OddWrapper , MenuSubItemWrapper } from './styles'
import '../NavbarLinks/styles.css'
import AudibleLink from '../NavbarLinks/AudibleLink'
import SubItems from '../Navbar/SubItems'


const NavbarLinksMobile = ({ device, currentNavItem, setCurrentNavItem, handleAudio, menu }) => {

    const { ages, themes, types } = menu

    const handlePress = (kind) => () => {
        if (kind === currentNavItem) {
            setCurrentNavItem('')
        } else {
            setCurrentNavItem(kind)
        }
    }

    return (
        <Wrapper>
            <MenuItemWrapper
                as={AudibleLink}
                audio="bell1"
                handleAudio={handleAudio}
                to="/"
            >
                <MenuIconWrapper>
                    <MenuIcon className="navIcon mobile home" />
                </MenuIconWrapper>
            </MenuItemWrapper>
            <MenuItemWrapper
                as={AudibleLink}
                handleAudio={handleAudio}
                audio="bell2"
                onMouseDown={handlePress('age')}
            >
                <MenuIconWrapper className={`${currentNavItem === 'age' ? "active" : ""}`}>
                    <MenuIcon className="navIcon mobile age" />
                </MenuIconWrapper>
                {currentNavItem === 'age' && <SubItems device={device} items={ages} urlPrefix="/leeftijd" handleAudio={handleAudio} />}
            </MenuItemWrapper>
            <MenuItemWrapper
                as={AudibleLink}
                handleAudio={handleAudio}
                audio="tom1"
                onMouseDown={handlePress('type')}
            >
                <MenuIconWrapper className={`${currentNavItem === 'type' ? "active" : ""}`}>
                    <MenuIcon className="navIcon mobile type" />
                </MenuIconWrapper>
                {currentNavItem === 'type' && <SubItems device={device} items={types} urlPrefix="/type" handleAudio={handleAudio} />}
            </MenuItemWrapper>
            <MenuItemWrapper
                as={AudibleLink}
                handleAudio={handleAudio}
                audio="whistle2"
                onMouseDown={handlePress('theme')}
            >
                <MenuIconWrapper className={`${currentNavItem === 'theme' ? "active" : ""}`}>
                    <MenuIcon className="navIcon mobile theme" />
                </MenuIconWrapper>
                {currentNavItem === 'theme' && <SubItems device={device} items={themes} urlPrefix="/thema" handleAudio={handleAudio} />}
            </MenuItemWrapper>
            <MenuItemWrapper
                as={AudibleLink}
                audio="pop1"
                handleAudio={handleAudio}
                to="/downloads"
            >
                <MenuIconWrapper>
                    <MenuIcon className="navIcon mobile downloads" />
                </MenuIconWrapper>
            </MenuItemWrapper>
            <MenuItemWrapper
                as={AudibleLink}
                audio="whistle1"
                handleAudio={handleAudio}
                to="/type/emma-en-lowie"
            >
                <MenuIconWrapper>
                    <MenuIcon className="navIcon mobile type_emma_and_thomas" />
                </MenuIconWrapper>
            </MenuItemWrapper>
            <MenuItemWrapper
                as={AudibleLink}
                audio="tom1"
                handleAudio={handleAudio}
                onMouseDown={handlePress('filter')}
            >
                <MenuIconWrapper className={`${currentNavItem === 'filter' ? "active" : ""}`}>
                    <MenuIcon className="navIcon mobile filter_icon" />
                </MenuIconWrapper>
            </MenuItemWrapper>
            <MenuItemWrapper
                as={AudibleLink}
                audio="bell3"
                handleAudio={handleAudio}
                onMouseDown={handlePress('search')}
            >
                <MenuIconWrapper className={`${currentNavItem === 'search' ? "active" : ""}`}>
                    <MenuIcon className="navIcon mobile search_icon" />
                </MenuIconWrapper>
                {/* {SearchBar(currentNavItem)} */}
            </MenuItemWrapper>
        </Wrapper>
    );
}

const SearchBar = (currentNavItem) => {
    if (currentNavItem === 'search') {
        return (
            <SubItemsWrapper onClick={(e) => e.stopPropagation()}>
                <MenuSubItemsWrapper as={NavbarContainer}>
                    <form className="searchBar" action="#">
                        <input className="searchInput" type="text" placeholder="Search..."/>
                    </form>
                </MenuSubItemsWrapper>
            </SubItemsWrapper>
        )
    }
}

export default NavbarLinksMobile;
