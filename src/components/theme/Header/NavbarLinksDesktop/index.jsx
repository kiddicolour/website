import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Link } from 'gatsby'
import AudibleLink from '../NavbarLinks/AudibleLink'
import { NavbarContainer } from 'components/common';
import { Wrapper, MenuItemWrapper, MenuIconWrapper, MenuIcon, SubItemsWrapper, MenuSubItemsWrapper , MenuSubItemWrapper } from './styles';
import '../NavbarLinks/styles.css';
import SubItems from '../Navbar/SubItems'

const NavbarLinksDesktop = ({ currentNavItem, setCurrentNavItem, handleClick, menu }) => {

    const { ages, themes, types } = menu

    const handleMouseEnter = (kind) => {
        setCurrentNavItem(kind)
    }

    const handleMouseLeave = () => {
        setCurrentNavItem('')
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
                    <MenuIcon className="navIcon home" />
                </MenuIconWrapper>
                <p>home</p>
            </MenuItemWrapper>
            <MenuItemWrapper
                onMouseEnter={() => handleMouseEnter('age')}
                onMouseLeave={handleMouseLeave}
            >
                <MenuIconWrapper>
                    <MenuIcon className="navIcon age" />
                </MenuIconWrapper>
                <p>age</p>
                <MenuIconWrapper>
                    <MenuIcon className={`${currentNavItem === 'age' ? "dropdownIcon arrow_icon_down_black" : "dropdownIcon arrow_icon_down_white"}`} />
                </MenuIconWrapper>
                {currentNavItem === 'age' && <SubItems items={ages} urlPrefix="/age" handleClick={handleClick} />}
            </MenuItemWrapper>
            <MenuItemWrapper
                onMouseEnter={() => handleMouseEnter('type')}
                onMouseLeave={handleMouseLeave}
            >
                <MenuIconWrapper>
                    <MenuIcon className="navIcon type" />
                </MenuIconWrapper>
                <p>type</p>
                <MenuIconWrapper>
                    <MenuIcon className={`${currentNavItem === 'type' ? "dropdownIcon arrow_icon_down_black" : "dropdownIcon arrow_icon_down_white"}`} />
                </MenuIconWrapper>
                {currentNavItem === 'type' && <SubItems items={types} urlPrefix="/type" handleClick={handleClick} />}
            </MenuItemWrapper>
            <MenuItemWrapper
                onMouseEnter={() => handleMouseEnter('theme')}
                onMouseLeave={handleMouseLeave}
            >
                <MenuIconWrapper>
                    <MenuIcon className="navIcon theme" />
                </MenuIconWrapper>
                <p>theme</p>
                <MenuIconWrapper>
                    <MenuIcon className={`${currentNavItem === 'theme' ? "dropdownIcon arrow_icon_down_black" : "dropdownIcon arrow_icon_down_white"}`} />
                </MenuIconWrapper>
                {currentNavItem === 'theme' && <SubItems items={themes} urlPrefix="/theme" handleClick={handleClick} />}
            </MenuItemWrapper>
            <MenuItemWrapper
                as={AudibleLink}
                audio="pop1"
                handleClick={handleClick}
                to="/downloads"
            >
                <MenuIconWrapper>
                    <MenuIcon className="navIcon downloads" />
                </MenuIconWrapper>
                <p>downloads</p>
            </MenuItemWrapper>
            <MenuItemWrapper
                as={AudibleLink}
                audio="whistle1"
                handleClick={handleClick}
                to="/type/emma-and-thomas"
            >
                <MenuIconWrapper>
                    <MenuIcon className="navIcon type_emma_and_thomas" />
                </MenuIconWrapper>
                <p>Emma and Thomas</p>
            </MenuItemWrapper>
        </Wrapper>
    );
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
        types: allStrapiType(sort: {fields: menuOrder, order: ASC}) {
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
        themes: allStrapiTheme(sort: {fields: menuOrder, order: ASC}) {
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

export default NavbarLinksDesktop;
