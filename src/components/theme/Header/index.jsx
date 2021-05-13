import { graphql, useStaticQuery } from 'gatsby'
import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { Wrapper } from './styles'

export const Header = () => {

  const getWindowDimensions = () => {
    if (window.innerWidth < 768) {
      return 'mobile';
    } else if (window.innerWidth >= 992) {
      return 'desktop';
    } else if (window.innerWidth >= 768) {
      return 'tablet';
    }
  }
  const [device, setDevice] = useState(getWindowDimensions());
  const menu = useStaticQuery(query)
  // const [menu, setMenu] = useState({})

  // useEffect(() => {
  //   async function getMenu() {
  //     setMenu(await useStaticQuery(query))
  //   }
  //   getMenu()
  // }, [])

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setDevice('mobile');
    } else if (window.innerWidth >= 992) {
      setDevice('desktop');
    } else if (window.innerWidth >= 768) {
      setDevice('tablet');
    }
  }

  window.addEventListener('resize', handleResize);

  return (
    <Wrapper>
      <Navbar device={device} menu={menu}/>
    </Wrapper>
  );
};

const query = graphql`
    query {
        ages: allStrapiAge(sort: {fields: menuOrder, order: ASC}) {
            edges {
                node {
                    name
                    slug
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
                    slug
                    menuAudio
                    strapiChildren {
                        name
                        slug
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
                    slug
                    strapiChildren {
                        name
                        slug
                        iconClass
                    }
                }
            }
        }
    }
`
