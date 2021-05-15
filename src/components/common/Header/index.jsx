import React, { useState, useContext } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Navbar from './Navbar'
import { ThemeContext } from 'providers/ThemeProvider';
import { LanguageContext } from 'providers/LanguageProvider';
import { Container, LanguageSelect } from '../';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';
import { composeSEO, querySEO } from '../'
// import useLanguage from 'hooks/useLanguage';


export const Header = ({ lang = 'nl', global = {} }) => {

  const { theme } = useContext(ThemeContext)
  const { language, setLanguage, languages } = useContext(LanguageContext)

  console.log('Header language', language, languages)

  const { title, introduction } = global
  const defaultSeo = global.seo
  const seo = composeSEO(defaultSeo, { title })

  const getWindowDimensions = () => {
    if (typeof window === 'undefined') return 'desktop'
    if (window.innerWidth < 768) {
      return 'mobile'
    } else if (window.innerWidth >= 992) {
      return 'desktop'
    } else if (window.innerWidth >= 768) {
      return 'tablet'
    }
  }
  const [device, setDevice] = useState(getWindowDimensions())
  const { menu } = useStaticQuery(query)

  const handleResize = () => {
    setDevice(getWindowDimensions())
  }

  typeof window !== 'undefined' && window.addEventListener('resize', handleResize)

  return (
    <>
      <IntroWrapper as={Container}>
        <LanguageSelect lang={language} onChange={setLanguage} />
        <Details theme={theme}>
          <h1>{seo.title}</h1>
          <h4>{introduction}</h4>
        </Details>
      </IntroWrapper>
      <Wrapper>
        <Navbar device={device} menu={menu} />
      </Wrapper>
    </>
  )
}

const query = graphql`
  query {
    ages: allStrapiAge(sort: { fields: id }) {
      edges {
        node {
          name
          slug
          iconClass
          menuAudio
        }
      }
    }
    types: allStrapiType(sort: { fields: menuOrder, order: ASC }) {
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
    themes: allStrapiTheme(sort: { fields: menuOrder, order: ASC }) {
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
    menu: allStrapiMenu(sort: { fields: order }) {
      edges {
        node {
          label
          url
          order
          audio
          age {
            slug
          }
          type {
            slug
          }
          theme {
            slug
          }
          strapiParent {
            order
          }
        }
      }
    }
  }
`
