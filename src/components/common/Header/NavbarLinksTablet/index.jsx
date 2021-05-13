import { graphql, useStaticQuery } from 'gatsby'
import React, { Link } from 'react'
import { NavbarContainer } from 'components/common'
import { Wrapper, MenuItemWrapper, MenuIconWrapper, MenuIcon, ParentMenuIcon, SubItemsWrapper, MenuSubItemsWrapper, OddWrapper , MenuSubItemWrapper } from './styles'
import '../NavbarLinks/styles.css'
import { relativeTimeRounding } from 'moment'
import AudibleLink from '../NavbarLinks/AudibleLink'
import SubItems from '../Navbar/SubItems'

const NavbarLinksTablet = ({ device, currentNavItem, setCurrentNavItem, handleAudio, menu }) => {

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
                onMouseDown={handlePress('')}
            >
                <MenuIconWrapper>
                    <MenuIcon className="navIcon mobile home" />
                </MenuIconWrapper>
            </MenuItemWrapper>
            <MenuItemWrapper
                as={AudibleLink}
                audio="bell2"
                handleAudio={handleAudio}
                onMouseDown={handlePress('age')}
            >
                <MenuIconWrapper className={`${currentNavItem === 'age' ? "active" : ""}`}>
                    <ParentMenuIcon className="navIcon mobile age" />
                    {SubItemsString(currentNavItem, 'age')}
                </MenuIconWrapper>
                {currentNavItem === 'age' && <SubItems device={device} items={ages} urlPrefix="/leeftijd" handleAudio={handleAudio}/>}
            </MenuItemWrapper>
            <MenuItemWrapper
                as={AudibleLink}
                audio="tom1"
                handleAudio={handleAudio}
                onMouseDown={handlePress('type')}
            >
                <MenuIconWrapper className={`${currentNavItem === 'type' ? "active" : ""}`}>
                    <ParentMenuIcon className="navIcon mobile type" />
                    {SubItemsString(currentNavItem, 'type')}
                </MenuIconWrapper>
                {currentNavItem === 'type' && <SubItems device={device} items={types} urlPrefix="/type" handleAudio={handleAudio}/>}
            </MenuItemWrapper>
            <MenuItemWrapper
                as={AudibleLink}
                audio="whistle2"
                handleAudio={handleAudio}
                onMouseDown={handlePress('theme')}
            >
                <MenuIconWrapper className={`${currentNavItem === 'theme' ? "active" : ""}`}>
                    <ParentMenuIcon className="navIcon mobile theme" />
                    {SubItemsString(currentNavItem, 'theme')}
                </MenuIconWrapper>
                {currentNavItem === 'theme' && <SubItems device={device} items={themes} urlPrefix="/thema" handleAudio={handleAudio}/>}
            </MenuItemWrapper>
            <MenuItemWrapper
                as={AudibleLink}
                audio="pop1"
                handleAudio={handleAudio}
                to="/downloads"
                onMouseDown={handlePress('')}
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
                onMouseDown={handlePress('')}
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

const SubItemsString = (currentNavItem, navItem) => {
    if (currentNavItem === navItem) {
        return (
            <MenuIconWrapper>
                {/* TRANSLATE navItem */}
                <p>{navItem}</p>
                <MenuIcon className="dropdownIcon mobile arrow_icon_up_black" />
            </MenuIconWrapper>
        )
    } else return null
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

export default NavbarLinksTablet;
