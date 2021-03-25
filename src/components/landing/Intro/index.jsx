import React, { useContext } from 'react'
import { useStaticQuery } from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { ThemeContext } from 'providers/ThemeProvider'
import { Header } from 'components/theme'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/dev.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'
import { composeSEO, querySEO } from 'components/common/SEO'

export const Intro = () => {
  const { theme } = useContext(ThemeContext)

  const { strapiGlobal } = useStaticQuery(querySEO)
  const { defaultSeo, siteName, introduction } = strapiGlobal
  const seo = composeSEO(defaultSeo, siteName)

  console.log("Intro seo", seo)

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>{seo.title}</h1>
          <h4>{introduction}</h4>
          <Button as={AnchorLink} href="#contact">
            Hire me
          </Button>
        </Details>
        <Thumbnail>
          <img src={dev} alt="I’m John and I’m a JAMStack engineer!" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  )
}
