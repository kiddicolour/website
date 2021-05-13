import React from 'react'
import { Link } from 'gatsby'
import { NavbarContainer } from 'components/common'
import { OddWrapper, SubItemsWrapper, MenuSubItemsWrapper , MenuSubItemWrapper } from '../Navbar/styles'
import AudibleLink from '../NavbarLinks/AudibleLink'
/* import { SubItemsWrapper, MenuSubItemsWrapper , MenuSubItemWrapper } from '../NavbarLinksDesktop/styles' */

const SubItems = ({ device, items, urlPrefix, handleAudio }) => {
    
    let odd = false;
    if (device === 'tablet') {
        odd = (items.edges.length % 3 === 0) ? false : true;
    } else if (device === 'mobile') {
        odd = (items.edges.length % 2 === 0) ? false : true;
    }

    return (
        <SubItemsWrapper device={device} onClick={(e) => e.stopPropagation()}>
            <MenuSubItemsWrapper as={NavbarContainer}>
                {items.edges.map((item, index) => {
                    const { node } = item

                    if (index === 0 && odd) {
                        return (
                            <OddWrapper key={index} >
                            <MenuSubItemWrapper
                                as={node.menuAudio ? AudibleLink : Link}
                                to={`${urlPrefix}/${node.slug}`}
                                audio={node.menuAudio}
                                handleAudio={handleAudio}
                                key={index}
                                onMouseDown={(e) => e.stopPropagation()}
                            >
                                <div className={["navIcon", node.iconClass].join(' ')}></div>
                                <p>{node.name}</p>
                            </MenuSubItemWrapper>
                            </OddWrapper>
                        )
                    }

                    return (
                        <MenuSubItemWrapper
                            device={device}
                            as={node.menuAudio ? AudibleLink : Link}
                            to={`${urlPrefix}/${node.slug}`}
                            audio={node.menuAudio}
                            handleAudio={handleAudio}
                            key={index}
                            onMouseDown={(e) => e.stopPropagation()}
                        >
                            <div className={["navIcon", node.iconClass].join(' ')}></div>
                            <p>{node.name}</p>
                        </MenuSubItemWrapper>
                    )

                })}
            </MenuSubItemsWrapper>
        </SubItemsWrapper>
    )
}

export default SubItems
