import React from 'react'
import { Wrapper, MenuItemWrapper, MenuIconWrapper, MenuIcon } from './styles'
import '../NavbarLinks/styles.css'
import AudibleLink from '../NavbarLinks/AudibleLink'
import SubItems from '../Navbar/SubItems'

const NavbarLinksDesktop = ({ device, currentNavItem, setCurrentNavItem, handleAudio, menu }) => {

  //const { ages, themes, types } = menu

  const handleMouseEnter = (url) => () => {
    setCurrentNavItem(url)
  }

  const handleMouseLeave = () => {
    setCurrentNavItem('')
  }

  return (
    <Wrapper>
      {menu.map((group, index) => (
        <MenuItemWrapper
          key={`nav_${index}`}
          onMouseEnter={handleMouseEnter(group.url)}
          onMouseLeave={handleMouseLeave}
          as={AudibleLink}
          audio={group.audio}
          handleAudio={handleAudio}
          to={group.url}
        >
          <MenuIconWrapper>
            <MenuIcon className="navIcon home" />
          </MenuIconWrapper>
          <p>{group.label}</p>
          { currentNavItem === group.url && group.children.length && (
            <SubItems device={device} items={group.children} handleAudio={handleAudio} />
          ) || null}
        </MenuItemWrapper>
      ))}
    </Wrapper>
  )

  return (
    <Wrapper>
      <MenuItemWrapper
        as={AudibleLink}
        audio="bell1"
        handleAudio={handleAudio}
        to="/"
      >
        <MenuIconWrapper>
          <MenuIcon className="navIcon home" />
        </MenuIconWrapper>
        <p>home</p>
      </MenuItemWrapper>
      <MenuItemWrapper
        onMouseEnter={handleMouseEnter('age')}
        onMouseLeave={handleMouseLeave}
        as={AudibleLink}
        audio="bell2"
        handleAudio={handleAudio}
      >
        <MenuIconWrapper>
          <MenuIcon className="navIcon age" />
        </MenuIconWrapper>
        <p>leeftijd</p>
        <MenuIconWrapper>
          <MenuIcon className={`${currentNavItem === 'age' ? "dropdownIcon arrow_icon_down_black" : "dropdownIcon arrow_icon_down_white"}`} />
        </MenuIconWrapper>
        {currentNavItem === 'age' && <SubItems device={device} items={ages} urlPrefix="/leeftijd" handleAudio={handleAudio} />}
      </MenuItemWrapper>
      <MenuItemWrapper
        onMouseEnter={handleMouseEnter('type')}
        onMouseLeave={handleMouseLeave}
        as={AudibleLink}
        audio="tom1"
        handleAudio={handleAudio}
      >
        <MenuIconWrapper>
          <MenuIcon className="navIcon type" />
        </MenuIconWrapper>
        <p>type</p>
        <MenuIconWrapper>
          <MenuIcon className={`${currentNavItem === 'type' ? "dropdownIcon arrow_icon_down_black" : "dropdownIcon arrow_icon_down_white"}`} />
        </MenuIconWrapper>
        {currentNavItem === 'type' && <SubItems device={device} items={types} urlPrefix="/type" handleAudio={handleAudio} />}
      </MenuItemWrapper>
      <MenuItemWrapper
        onMouseEnter={handleMouseEnter('theme')}
        onMouseLeave={handleMouseLeave}
        as={AudibleLink}
        audio="whistle2"
        handleAudio={handleAudio}
      >
        <MenuIconWrapper>
          <MenuIcon className="navIcon theme" />
        </MenuIconWrapper>
        <p>thema</p>
        <MenuIconWrapper>
          <MenuIcon className={`${currentNavItem === 'theme' ? "dropdownIcon arrow_icon_down_black" : "dropdownIcon arrow_icon_down_white"}`} />
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
          <MenuIcon className="navIcon downloads" />
        </MenuIconWrapper>
        <p>download</p>
      </MenuItemWrapper>
      <MenuItemWrapper
        as={AudibleLink}
        audio="whistle1"
        handleAudio={handleAudio}
        to="/type/emma-en-lowie"
      >
        <MenuIconWrapper>
          <MenuIcon className="navIcon type_emma_and_thomas" />
        </MenuIconWrapper>
        <p>Emma en Lowie</p>
      </MenuItemWrapper>
    </Wrapper>
  );
}


export default NavbarLinksDesktop;
