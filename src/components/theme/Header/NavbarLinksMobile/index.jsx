import { graphql, useStaticQuery } from 'gatsby';
import React, { Link, useEffect } from 'react';
import { useLocation } from '@reach/router';
import { NavbarContainer } from 'components/common';
import { Wrapper, MenuItemWrapper, MenuIconWrapper, MenuIcon , SubItemsWrapper, MenuSubItemsWrapper, OddWrapper , MenuSubItemWrapper } from './styles';
import '../NavbarLinks/styles.css';
import { bell1Audio, bell2Audio, bell3Audio, bell4Audio, bellsAudio, guiroAudio, honkAudio, pop1Audio, pop2Audio, tom1Audio, tom2Audio, whistle1Audio, whistle2Audio } from '../NavbarLinks/audio.js';

const audioItems = [['bell1Audio', bell1Audio], ['bell2Audio', bell2Audio], ['bell3Audio', bell3Audio], ['bell4Audio', bell4Audio], ['bellsAudio', bellsAudio], ['guiroAudio', guiroAudio], ['honkAudio', honkAudio], ['pop1Audio', pop1Audio], ['pop2Audio', pop2Audio], ['tom1Audio', tom1Audio], ['tom2Audio', tom2Audio], ['whistle1Audio', whistle1Audio], ['whistle2Audio', whistle2Audio]];

const NavbarLinksMobile = ({ currentNavItem, setCurrentNavItem }) => {

    /* GIVES useContext error */
    /* let location = useLocation(); */

    const wrapperSetCurrentNavItem = val => {
        setCurrentNavItem(currentNavItem === val ? '' : val);
    }

    useEffect(() => {
        bell1Audio.currentTime = 0;
        bell1Audio.play();
    }, [currentNavItem]);

    return (
        <Wrapper>
            <MenuItemWrapper
                as={Link}
                onClick={(e) => {
                    e.preventDefault();
                    /* bell1Audio.currentTime = 0;
                    bell1Audio.play(); */
                    setTimeout(() => {
                        window.location.href = "/";
                    }, 1000);
                }}
                href="/"
            >
                <MenuIconWrapper>
                    <MenuIcon className="navIcon mobile home" />
                </MenuIconWrapper>
            </MenuItemWrapper>
            <MenuItemWrapper
                onClick={(e) => {
                    e.preventDefault();
                    bell2Audio.currentTime = 0;
                    bell2Audio.play();
                    wrapperSetCurrentNavItem('age');
                }}
            >
                <MenuIconWrapper className={`${currentNavItem === 'age' ? "active" : ""}`}>
                    <MenuIcon className="navIcon mobile age" />
                </MenuIconWrapper>
                {SubItems(query, currentNavItem, 'age')}
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

const SubItems = (query, currentNavItem, navItem) => {
    if (currentNavItem === navItem) {
        var items;
        if (navItem === 'age') {
            items = useStaticQuery(query).ages;
        } else if (navItem === 'type') {
            items = useStaticQuery(query).types;
        } else if (navItem === 'theme') {
            items = useStaticQuery(query).themes;
        }
        const odd = (items.edges.length % 2 === 0) ? false : true;
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
                        if (index === 0 && odd) {
                            return (
                                <OddWrapper key={index} >
                                    <MenuSubItemWrapper
                                        onClick={(e) => {
                                            e.preventDefault();
                                            audio.currentTime = 0;
                                            audio.play();
                                            setTimeout(() => {
                                                window.location.href = ["/", navItem, "/", item.node.name.replace(/ /g, "-").toLowerCase()].join('');
                                            }, 1000);
                                        }}
                                        href={["/", navItem, "/", item.node.name.replace(/ /g, "-").toLowerCase()].join('')}
                                    >
                                        <MenuIconWrapper>
                                            <MenuIcon className={["navIcon", item.node.icon_class].join(' ')} />
                                        </MenuIconWrapper>
                                        <p>{item.node.name}</p>
                                    </MenuSubItemWrapper>
                                </OddWrapper>
                            )
                        } else {
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
                                    <MenuIconWrapper>
                                        <MenuIcon className={["navIcon", item.node.icon_class].join(' ')} />
                                    </MenuIconWrapper>
                                    <p>{item.node.name}</p>
                                </MenuSubItemWrapper>
                            )
                        }
                    })}
                </MenuSubItemsWrapper>
            </SubItemsWrapper>
        )
    }
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
                    icon_class
                    audio
                }
            }
        }
        types: allStrapiType(filter: {strapiParent: {name: {eq: "types"}}}, sort: {fields: menu_order, order: ASC}) {
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
        themes: allStrapiTheme(filter: {strapiParent: {name: {eq: "themes"}}}, sort: {fields: menu_order, order: ASC}) {
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

export default NavbarLinksMobile;
