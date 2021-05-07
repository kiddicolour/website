import { graphql, useStaticQuery } from 'gatsby';
import React, { Link } from 'react';
import { NavbarContainer } from 'components/common';
import { Wrapper, MenuItemWrapper, MenuIconWrapper, MenuIcon, SubItemsWrapper, MenuSubItemsWrapper , MenuSubItemWrapper } from './styles';
import '../NavbarLinks/styles.css';
import { bell1Audio, bell2Audio, bell3Audio, bell4Audio, bellsAudio, guiroAudio, honkAudio, pop1Audio, pop2Audio, tom1Audio, tom2Audio, whistle1Audio, whistle2Audio } from '../NavbarLinks/audio.js';

const audioItems = [['bell1Audio', bell1Audio], ['bell2Audio', bell2Audio], ['bell3Audio', bell3Audio], ['bell4Audio', bell4Audio], ['bellsAudio', bellsAudio], ['guiroAudio', guiroAudio], ['honkAudio', honkAudio], ['pop1Audio', pop1Audio], ['pop2Audio', pop2Audio], ['tom1Audio', tom1Audio], ['tom2Audio', tom2Audio], ['whistle1Audio', whistle1Audio], ['whistle2Audio', whistle2Audio]];

const NavbarLinksDesktop = ({ currentNavItem, setCurrentNavItem }) => {

    const wrapperSetCurrentNavItem = val => {
        setCurrentNavItem(val);
    }

    return (
        <Wrapper>
            <MenuItemWrapper
                as={Link}
                onClick={(e) => {
                    e.preventDefault();
                    bell1Audio.currentTime = 0;
                    bell1Audio.play();
                    setTimeout(() => {
                        window.location.href = "/";
                    }, 1000);
                }}
                href="/"
            >
                <MenuIconWrapper>
                    <MenuIcon className="navIcon home" />
                </MenuIconWrapper>
                <p>home</p>
            </MenuItemWrapper>
            <MenuItemWrapper
                onMouseEnter={() => wrapperSetCurrentNavItem('age')}
                onMouseLeave={() => wrapperSetCurrentNavItem('')}
            >
                <MenuIconWrapper>
                    <MenuIcon className="navIcon age" />
                </MenuIconWrapper>
                <p>age</p>
                <MenuIconWrapper>
                    <MenuIcon className={`${currentNavItem === 'age' ? "dropdownIcon arrow_icon_down_black" : "dropdownIcon arrow_icon_down_white"}`} />
                </MenuIconWrapper>
                {SubItems(query, currentNavItem, 'age')}
            </MenuItemWrapper>
            <MenuItemWrapper
                onMouseEnter={() => wrapperSetCurrentNavItem('type')}
                onMouseLeave={() => wrapperSetCurrentNavItem('')}
            >
                <MenuIconWrapper>
                    <MenuIcon className="navIcon type" />
                </MenuIconWrapper>
                <p>type</p>
                <MenuIconWrapper>
                    <MenuIcon className={`${currentNavItem === 'type' ? "dropdownIcon arrow_icon_down_black" : "dropdownIcon arrow_icon_down_white"}`} />
                </MenuIconWrapper>
                {SubItems(query, currentNavItem, 'type')}
            </MenuItemWrapper>
            <MenuItemWrapper
                onMouseEnter={() => wrapperSetCurrentNavItem('theme')}
                onMouseLeave={() => wrapperSetCurrentNavItem('')}
            >
                <MenuIconWrapper>
                    <MenuIcon className="navIcon theme" />
                </MenuIconWrapper>
                <p>theme</p>
                <MenuIconWrapper>
                    <MenuIcon className={`${currentNavItem === 'theme' ? "dropdownIcon arrow_icon_down_black" : "dropdownIcon arrow_icon_down_white"}`} />
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
                    <MenuIcon className="navIcon downloads" />
                </MenuIconWrapper>
                <p>downloads</p>
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
                    <MenuIcon className="navIcon type_emma_and_thomas" />
                </MenuIconWrapper>
                <p>Emma and Thomas</p>
            </MenuItemWrapper>
        </Wrapper>
    );
}

const SubItems = (query, currentNavItem, navItem) => {
    if (currentNavItem === navItem) {
        let items;
        if (navItem === 'age') {
            items = useStaticQuery(query).ages;
        } else if (navItem === 'type') {
            items = useStaticQuery(query).types;
        } else if (navItem === 'theme') {
            items = useStaticQuery(query).themes;
        }
        const odd = (items.edges.length % 3 === 0) ? false : true;
        return (
            <SubItemsWrapper onClick={(e) => e.stopPropagation()}>
                <MenuSubItemsWrapper as={NavbarContainer}>
                    {items.edges.map((item, index) => {
                        var audio;
                        audioItems.forEach(audioItem => {
                            if (item.node.audio === audioItem[0]) {
                                audio = audioItem[1];
                            }
                        });
                        return (
                            <MenuSubItemWrapper
                                onClick={(e) => {
                                    e.preventDefault();
                                    audio.currentTime = 0;
                                    audio.play();
                                    setTimeout(() => {
                                        window.location.href = ["/", navItem, "/", item.node.name.replace(/ /g, "-").toLowerCase()].join('');
                                    }, 1000);
                                }}
                                key={index}
                                href={["/", navItem, "/", item.node.name.replace(/ /g, "-").toLowerCase()].join('')}
                            >
                                <div className={["navIcon", item.node.icon_class].join(' ')}></div>
                                <p>{item.node.name}</p>
                            </MenuSubItemWrapper>
                        )
                    })}
                </MenuSubItemsWrapper>
            </SubItemsWrapper>
        )
    } else return null;
}

const query = graphql`
    query {
        ages: allStrapiAge(sort: {fields: id}) {
            edges {
                node {
                    name
                    icon_class
                    audio
                }
            }
        }
        types: allStrapiType(filter: {strapiParent: {name: {eq: "types"}}}, sort: {fields: "menu_order", order: ASC}) {
            edges {
                node {
                    name
                    icon_class
                    audio
                    strapiChildren {
                        name
                        icon_class
                    }
                }
            }
        }
        themes: allStrapiTheme(filter: {strapiParent: {name: {eq: "themes"}}}, sort: {fields: "menu_order", order: ASC}) {
            edges {
                node {
                    name
                    icon_class
                    audio
                    strapiChildren {
                        name
                        icon_class
                    }
                }
            }
        }
    }
`

export default NavbarLinksDesktop;
