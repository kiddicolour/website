import React from 'react'
import { NavbarContainer } from 'components/common'
import { OddWrapper } from '../Navbar/styles'
import AudibleLink from '../NavbarLinks/AudibleLink'
import { MenuIconWrapper, MenuIcon, SubItemsWrapper, MenuSubItemsWrapper , MenuSubItemWrapper } from '../NavbarLinksDesktop/styles';

const SubItems = ({items, urlPrefix, handleAudio}) => {
    
    const odd = (items.edges.length % 3 === 0) ? false : true;

    return (
        <SubItemsWrapper onClick={(e) => e.stopPropagation()}>
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
                            >
                                <div className={["navIcon", node.iconClass].join(' ')}></div>
                                <p>{node.name}</p>
                            </MenuSubItemWrapper>
                            </OddWrapper>
                        )
                    }

                    return (
                        <MenuSubItemWrapper
                            as={node.menuAudio ? AudibleLink : Link}
                            to={`${urlPrefix}/${node.slug}`}
                            audio={node.menuAudio}
                            handleAudio={handleAudio}
                            key={index}
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
