import React from 'react'
import { Link } from 'gatsby'
import { NavbarContainer } from 'components/common'
import { OddWrapper, SubItemsWrapper, MenuSubItemsWrapper , MenuSubItemWrapper } from './styles'
import AudibleLink from '../NavbarLinks/AudibleLink'
/* import { SubItemsWrapper, MenuSubItemsWrapper , MenuSubItemWrapper } from '../NavbarLinksDesktop/styles' */

const SubItems = ({ device, items, handleAudio }) => {

    let odd = false;
    if (device === 'tablet') {
        odd = !(items.length % 3 === 0)
    } else if (device === 'mobile') {
        odd = !(items.length % 2 === 0)
    }

    return (
        <SubItemsWrapper device={device} onClick={(e) => e.stopPropagation()}>
            <MenuSubItemsWrapper as={NavbarContainer}>
                {items.map((item, index) => {
                    if (index === 0 && odd) {
                        return (
                          <OddWrapper key={`nav_sub_${item.url}`} >
                            <MenuSubItemWrapper
                                as={item.audio ? AudibleLink : Link}
                                to={item.url}
                                audio={item.audio}
                                handleAudio={handleAudio}
                                key={index}
                                onMouseDown={(e) => e.stopPropagation()}
                            >
                                <div className={["navIcon", item.icon].join(' ')}></div>
                                <p>{item.label}</p>
                            </MenuSubItemWrapper>
                          </OddWrapper>
                        )
                    }

                    return (
                        <MenuSubItemWrapper
                            device={device}
                            as={item.audio ? AudibleLink : Link}
                            to={item.url}
                            audio={item.audio}
                            handleAudio={handleAudio}
                            key={`nav_sub_${item.url}`}
                            onMouseDown={(e) => e.stopPropagation()}
                        >
                            <div className={["navIcon", item.icon].join(' ')}></div>
                            <p>{item.label}</p>
                        </MenuSubItemWrapper>
                    )

                })}
            </MenuSubItemsWrapper>
        </SubItemsWrapper>
    )
}

export default SubItems
