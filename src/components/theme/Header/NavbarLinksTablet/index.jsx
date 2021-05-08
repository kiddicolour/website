import { graphql, useStaticQuery } from 'gatsby';
import React, { Link } from 'react';
import { NavbarContainer } from 'components/common';
import { Wrapper, MenuItemWrapper, MenuIconWrapper, MenuIcon, ParentMenuIcon, SubItemsWrapper, MenuSubItemsWrapper, OddWrapper , MenuSubItemWrapper } from './styles';
import '../NavbarLinks/styles.css';
import { relativeTimeRounding } from 'moment';
import AudibleLink from '../NavbarLinks/AudibleLink'
import SubItems from '../Navbar/SubItems'

const NavbarLinksTablet = ({ currentNavItem, setCurrentNavItem, handleAudio, menu }) => {

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
                audio="bell2"
                handleAudio={handleAudio}
                onMouseDown={handlePress('age')}
            >
                <MenuIconWrapper className={`${currentNavItem === 'age' ? "active" : ""}`}>
                    <ParentMenuIcon className="navIcon mobile age" />
                    <MenuIconWrapper>
                        <p>age</p>
                        <MenuIcon className="dropdownIcon mobile arrow_icon_up_black" />
                    </MenuIconWrapper>

                </MenuIconWrapper>
                {currentNavItem === 'age' && <SubItems items={ages} urlPrefix="/age" handleAudio={handleAudio}/>}
            </MenuItemWrapper>
            <MenuItemWrapper
                as={AudibleLink}
                audio="tom1"
                handleAudio={handleAudio}
                onMouseDown={handlePress('type')}
            >
                <MenuIconWrapper className={`${currentNavItem === 'type' ? "active" : ""}`}>
                    <ParentMenuIcon className="navIcon mobile type" />
                    <MenuIconWrapper>
                        <p>type</p>
                        <MenuIcon className="dropdownIcon mobile arrow_icon_up_black" />
                    </MenuIconWrapper>
                </MenuIconWrapper>
                {currentNavItem === 'type' && <SubItems items={types} urlPrefix="/type" handleAudio={handleAudio}/>}
            </MenuItemWrapper>
            <MenuItemWrapper
                as={AudibleLink}
                audio="whistle2"
                handleAudio={handleAudio}
                onMouseDown={handlePress('theme')}
            >
                <MenuIconWrapper className={`${currentNavItem === 'theme' ? "active" : ""}`}>
                    <ParentMenuIcon className="navIcon mobile theme" />
                    <MenuIconWrapper>
                        <p>theme</p>
                        <MenuIcon className="dropdownIcon mobile arrow_icon_up_black" />
                    </MenuIconWrapper>
                </MenuIconWrapper>
                {currentNavItem === 'theme' && <SubItems items={themes} urlPrefix="/theme" handleAudio={handleAudio}/>}
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
                to="/type/emma-and-thomas"
            >
                <MenuIconWrapper>
                    <MenuIcon className="navIcon mobile type_emma_and_thomas" />
                </MenuIconWrapper>
            </MenuItemWrapper>
            <MenuItemWrapper
                as={AudibleLink}
                audio="tom1"
                handleAudio={handleAudio}
            >
                <MenuIconWrapper className={`${currentNavItem === 'filter' ? "active" : ""}`}>
                    <MenuIcon className="navIcon mobile filter_icon" />
                </MenuIconWrapper>
            </MenuItemWrapper>
            <MenuItemWrapper
                as={AudibleLink}
                audio="bell3"
                handleAudio={handleAudio}
           >
                <MenuIconWrapper className={`${currentNavItem === 'search' ? "active" : ""}`}>
                    <MenuIcon className="navIcon mobile search_icon" />
                </MenuIconWrapper>
                {SearchBar(currentNavItem)}
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

export default NavbarLinksTablet;
