import React, { useState, useContext } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Navbar from './Navbar'
import { ThemeContext } from 'providers/ThemeProvider';
import { LanguageContext } from 'providers/LanguageProvider';
import { Container, LanguageSelect } from 'components/common';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';
import { composeSEO, querySEO } from 'components/common/SEO'
import useLanguage from '../../../hooks/useLanguage';


export const Header = ({ lang = 'nl' }) => {

  const { theme } = useContext(ThemeContext)
  const { language, setLanguage } = useContext(LanguageContext)

  console.log('language', language)

  const { strapiGlobal } = useStaticQuery(querySEO)
  const { title, introduction } = strapiGlobal
  const defaultSeo = strapiGlobal.seo
  const seo = composeSEO(defaultSeo, { title })

  const getWindowDimensions = () => {
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
    if (window.innerWidth < 768) {
      setDevice('mobile')
    } else if (window.innerWidth >= 992) {
      setDevice('desktop')
    } else if (window.innerWidth >= 768) {
      setDevice('tablet')
    }
  }

  window.addEventListener('resize', handleResize)

  return (
    <>
      <IntroWrapper as={Container}>
        <LanguageSelect lang={language} onChange={setLanguage}/>
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
          strapiParent {
            order
          }
        }
      }
    }
  }
`
