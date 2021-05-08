import { graphql, useStaticQuery } from 'gatsby';
import React, { useEffect } from 'react';
import AudibleLink from '../NavbarLinks/AudibleLink'
import { Link } from 'gatsby'
import { NavbarContainer } from 'components/common';
import { Wrapper, MenuItemWrapper, MenuIconWrapper, MenuIcon , SubItemsWrapper, MenuSubItemsWrapper, OddWrapper , MenuSubItemWrapper } from './styles';
import '../NavbarLinks/styles.css';

const NavbarLinksMobile = ({ currentNavItem, setCurrentNavItem, handleClick }) => {

    const wrapperSetCurrentNavItem = val => {
        setCurrentNavItem(currentNavItem === val ? '' : val);
    }

    return (
        <Wrapper>
            <MenuItemWrapper
                as={AudibleLink}
                audio="bell1"
                handleClick={handleClick}
                to="/"
            >
                <MenuIconWrapper>
                    <MenuIcon className="navIcon mobile home" />
                </MenuIconWrapper>
            </MenuItemWrapper>
            <MenuItemWrapper
                as={AudibleLink}
                handleClick={handleClick}
                audio="bell2"
            >
                <MenuIconWrapper className={`${currentNavItem === 'age' ? "active" : ""}`}>
                    <MenuIcon className="navIcon mobile age" />
                </MenuIconWrapper>
                {SubItems(query, currentNavItem, 'age', handleClick)}
            </MenuItemWrapper>
            <MenuItemWrapper
                onClick={(e) => {
                    e.preventDefault();
                    tom1Audio.currentTime = 0;
                    tom1Audio.play();
                    wrapperSetCurrentNavItem('type');
                }}
            >
                <MenuIconWrapper className={`${currentNavItem === 'type' ? "active" : ""}`}>
                    <MenuIcon className="navIcon mobile type" />
                </MenuIconWrapper>
                {SubItems(query, currentNavItem, 'type')}
            </MenuItemWrapper>
            <MenuItemWrapper
                onClick={(e) => {
                    e.preventDefault();
                    whistle2Audio.currentTime = 0;
                    whistle2Audio.play();
                    wrapperSetCurrentNavItem('theme');
                }}
            >
                <MenuIconWrapper className={`${currentNavItem === 'theme' ? "active" : ""}`}>
                    <MenuIcon className="navIcon mobile theme" />
                </MenuIconWrapper>
                {SubItems(query, currentNavItem, 'theme')}
            </MenuItemWrapper>
            <MenuItemWrapper
                as={Link}
                onClick={(e) => {
                    e.preventDefault();
                    pop1Audio.currentTime = 0;
                    pop1Audio.play();
                    setTimeout(() => {
                        window.location.href = "/downloads";
                    }, 1000);
                }}
                href="/downloads"
            >
                <MenuIconWrapper>
                    <MenuIcon className="navIcon mobile downloads" />
                </MenuIconWrapper>
            </MenuItemWrapper>
            <MenuItemWrapper
                as={Link}
                onClick={(e) => {
                    e.preventDefault();
                    whistle1Audio.currentTime = 0;
                    whistle1Audio.play();
                    setTimeout(() => {
                        window.location.href = "/type/emma-and-thomas";
                    }, 1000);
                }}
                href="/type/emma-and-thomas"
            >
                <MenuIconWrapper>
                    <MenuIcon className="navIcon mobile type_emma_and_thomas" />
                </MenuIconWrapper>
            </MenuItemWrapper>
            <MenuItemWrapper
                onClick={(e) => {
                    e.preventDefault();
                    tom1Audio.currentTime = 0;
                    tom1Audio.play();
                    wrapperSetCurrentNavItem('filter');
                }}
            >
                <MenuIconWrapper className={`${currentNavItem === 'filter' ? "active" : ""}`}>
                    <MenuIcon className="navIcon mobile filter_icon" />
                </MenuIconWrapper>
            </MenuItemWrapper>
            <MenuItemWrapper
                onClick={(e) => {
                    e.preventDefault();
                    bell3Audio.currentTime = 0;
                    bell3Audio.play();
                    wrapperSetCurrentNavItem('search');
                }}
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
                    <form className="searchBar">
                        <input className="searchInput" type="text" placeholder="Search..."/>
                    </form>
                </MenuSubItemsWrapper>
            </SubItemsWrapper>
        )
    }
}

const query = graphql`
    query {
        ages: allStrapiAge(sort: {fields: id}) {
            edges {
                node {
                    name
                    iconClass
                    menuAudio
                }
            }
        }
        types: allStrapiType(filter: {strapiParent: {name: {eq: "types"}}}, sort: {fields: menuOrder, order: ASC}) {
            edges {
                node {
                    name
                    iconClass
                    menuAudio
                    strapiChildren {
                        name
                        iconClass
                    }
                }
            }
        }
        themes: allStrapiTheme(filter: {strapiParent: {name: {eq: "themes"}}}, sort: {fields: menuOrder, order: ASC}) {
            edges {
                node {
                    name
                    iconClass
                    menuAudio
                    strapiChildren {
                        name
                        iconClass
                    }
                }
            }
        }
    }
`

export default NavbarLinksMobile;
