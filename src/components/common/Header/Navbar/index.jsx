import React, { useEffect, useState } from 'react'
import { NavbarContainer } from 'components/common'
import { Wrapper, WrapperLinks, SearchBar } from './styles'
import NavbarLinks from '../NavbarLinks'
import './styles.css'
import audioElements from './audio'

import { enhanceMenu, groupMenu, sortMenu } from './utils'

const Navbar = ({ device, menu }) => {

  if (! menu?.edges) return null

  // store the current playing audio file, passed on from component
  const [ audio, setAudio ] = useState(false)
  const [ isPlaying, setIsPlaying ] = useState(false)

  console.log('menu', menu.edges)
  console.log('enhanced', enhanceMenu(menu.edges))
  console.log('sorted', sortMenu(enhanceMenu(menu.edges)))
  console.log('grouped', groupMenu(sortMenu(enhanceMenu(menu.edges))))

  useEffect(() => {
    const audioElement = audioElements.reduce((res, elem) => {
      return res ? res : (elem[0] === audio ? elem[1] : false)
    }, false)

    // store timeout in state so it can be cleared / reused
    setIsPlaying(window.setTimeout(() => {
      if (audioElement) {
          audioElement.currentTime = 0
          audioElement.play()
      }
    }, 100))
    return (() => {
      window.clearTimeout(isPlaying)
    })
  }, [audio])

  const handleAudio = (audioFile) => {
    setAudio(audioFile)
  }

  const OnSearch = () => {

  }

  const OnTextChange = () => {

  }

  return (
    <Wrapper>
      <WrapperLinks as={NavbarContainer}>
        <NavbarLinks device={device} handleAudio={handleAudio} menu={groupMenu(sortMenu(enhanceMenu(menu.edges)))} />
        <SearchBar device={device}>
          <form className="searchBarDesktop">
            <input className="searchInputDesktop" type="text" placeholder="Search..." onChange={OnTextChange}/>
          </form>
        </SearchBar>
      </WrapperLinks>
    </Wrapper>
  );
}

export default Navbar
