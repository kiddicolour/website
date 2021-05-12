import { graphql, useStaticQuery } from 'gatsby';
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Wrapper } from './styles';

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
  const { menu } = useStaticQuery(query)

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
        ages: allStrapiAge(sort: {fields: id}) {
            edges {
                node {
                    name
                    slug
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
        themes: allStrapiTheme(sort: {fields: menuOrder, order: ASC}) {
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
