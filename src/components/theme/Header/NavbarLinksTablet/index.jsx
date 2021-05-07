import { graphql, useStaticQuery } from 'gatsby';
import React, { Link } from 'react';
import { NavbarContainer } from 'components/common';
import { Wrapper, MenuItemWrapper, MenuIconWrapper, MenuIcon, ParentMenuIcon, SubItemsWrapper, MenuSubItemsWrapper, OddWrapper , MenuSubItemWrapper } from './styles';
import '../NavbarLinks/styles.css';
import { bell1Audio, bell2Audio, bell3Audio, bell4Audio, bellsAudio, guiroAudio, honkAudio, pop1Audio, pop2Audio, tom1Audio, tom2Audio, whistle1Audio, whistle2Audio } from '../NavbarLinks/audio.js';
import { relativeTimeRounding } from 'moment';

const audioItems = [['bell1Audio', bell1Audio], ['bell2Audio', bell2Audio], ['bell3Audio', bell3Audio], ['bell4Audio', bell4Audio], ['bellsAudio', bellsAudio], ['guiroAudio', guiroAudio], ['honkAudio', honkAudio], ['pop1Audio', pop1Audio], ['pop2Audio', pop2Audio], ['tom1Audio', tom1Audio], ['tom2Audio', tom2Audio], ['whistle1Audio', whistle1Audio], ['whistle2Audio', whistle2Audio]];

const NavbarLinksTablet = ({ currentNavItem, setCurrentNavItem }) => {

    const wrapperSetCurrentNavItem = val => {
        setCurrentNavItem(currentNavItem === val ? '' : val);
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
                    <ParentMenuIcon className="navIcon mobile age" />
                    {SubItemsString(currentNavItem, 'age')}
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
                    <ParentMenuIcon className="navIcon mobile type" />
                    {SubItemsString(currentNavItem, 'type')}
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
                    <ParentMenuIcon className="navIcon mobile theme" />
                    {SubItemsString(currentNavItem, 'theme')}
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
                                        <div className={["navIcon", item.node.iconClass].join(' ')}></div>
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
                                    <div className={["navIcon", item.node.iconClass].join(' ')}></div>
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

const SubItemsString = (currentNavItem, navItem) => {
    if (currentNavItem === navItem) {
        return (
            <MenuIconWrapper>
                <p>{navItem}</p>
                <MenuIcon className="dropdownIcon mobile arrow_icon_up_black" />
            </MenuIconWrapper>
        )
    } else return null;
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

export default NavbarLinksTablet;
